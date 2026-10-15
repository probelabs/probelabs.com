import * as THREE from 'three'
import { mountStage } from './hero-stage.js'

const COUNT = 9000

const VERT = `
attribute vec3 a0;
attribute vec3 a1;
attribute vec3 a2;
uniform vec3 uW;
uniform float uSpin;
uniform vec2 uPointer;
uniform float uInfluence;
uniform float uSize;
varying float vLight;
varying float vDepth;

void main() {
  vec3 p = a0 * uW.x + a1 * uW.y + a2 * uW.z;
  float s = sin(uSpin);
  float c = cos(uSpin);
  p.xz = mat2(c, -s, s, c) * p.xz;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vec4 clip = projectionMatrix * mv;
  vec2 ndc = clip.xy / max(0.0001, clip.w);
  vec2 delta = ndc - uPointer;
  float dist = length(delta);
  float falloff = smoothstep(0.58, 0.0, dist);
  falloff *= falloff;
  vec2 dir = delta / max(0.001, dist);
  vec2 swirl = vec2(-dir.y, dir.x);
  vec2 kick = (dir * 0.15 + swirl * 0.06) * falloff * uInfluence;
  clip.xy += kick * clip.w;
  gl_Position = clip;
  gl_PointSize = clamp(uSize * (4.8 / max(0.2, -mv.z)), 1.5, 9.0);
  vec3 n = normalize(p + vec3(0.0001));
  vec3 light = normalize(vec3(0.62, 0.72, 0.42));
  vLight = pow(clamp(dot(n, light), 0.0, 1.0), 1.45);
  vDepth = clamp((-mv.z - 2.2) / 3.2, 0.0, 1.0);
}
`

const FRAG = `
precision highp float;
varying float vLight;
varying float vDepth;
void main() {
  vec2 pc = gl_PointCoord * 2.0 - 1.0;
  float d = dot(pc, pc);
  if (d > 1.0) discard;
  float edge = smoothstep(1.0, 0.2, d);
  vec3 stone = vec3(0.88, 0.84, 0.76);
  vec3 amber = vec3(0.86, 0.50, 0.16);
  vec3 shade = vec3(0.38, 0.35, 0.31);
  vec3 col = mix(shade, stone, smoothstep(0.0, 0.55, vLight));
  col = mix(col, amber, smoothstep(0.62, 1.0, vLight) * 0.85);
  col = mix(col, col * 0.45, vDepth);
  gl_FragColor = vec4(col, edge);
}
`

function hash(i) {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

function writeVessel(out) {
  const n = COUNT
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2
    const radius = Math.sqrt(Math.max(0, 1 - y * y))
    const golden = Math.PI * (3 - Math.sqrt(5))
    const phi = i * golden
    const pinch = 0.62 + 0.38 * (1 - y * y)
    const shell = 0.92 + (hash(i) - 0.5) * 0.08
    out[i * 3] = Math.cos(phi) * radius * pinch * shell
    out[i * 3 + 1] = y * 1.28
    out[i * 3 + 2] = Math.sin(phi) * radius * pinch * shell * 0.82
  }
}

function writeRibbon(out) {
  const n = COUNT
  for (let i = 0; i < n; i++) {
    const u = (i / n) * Math.PI * 2
    const v = (hash(i + 19) - 0.5) * 2
    const twist = u * 0.5
    const rad = 1.05 + v * 0.28 * Math.cos(twist)
    out[i * 3] = Math.cos(u) * rad
    out[i * 3 + 1] = v * 0.42 * Math.sin(twist) + Math.sin(u * 2.0) * 0.16
    out[i * 3 + 2] = Math.sin(u) * rad * 0.72
  }
}

function writeKnot(out) {
  const n = COUNT
  for (let i = 0; i < n; i++) {
    const u = (i / n) * Math.PI * 2
    const tube = (hash(i + 41) - 0.5) * 0.28
    const r = 0.78 + 0.34 * Math.cos(3 * u)
    const cx = r * Math.cos(2 * u)
    const cy = r * Math.sin(2 * u) * 0.72
    const cz = 0.42 * Math.sin(3 * u)
    const nx = Math.cos(2 * u)
    const ny = Math.sin(3 * u)
    out[i * 3] = cx + nx * tube
    out[i * 3 + 1] = cy + tube * 0.65
    out[i * 3 + 2] = cz + ny * tube
  }
}

function weights(time) {
  const hold = 14
  const morph = 10
  const span = hold + morph
  const cycle = time % (span * 3)
  const index = Math.floor(cycle / span) % 3
  const local = cycle - index * span
  const t = local <= hold ? 0 : (local - hold) / morph
  const eased = t * t * t * (t * (t * 6 - 15) + 10)
  const w = [0, 0, 0]
  w[index] = 1 - eased
  w[(index + 1) % 3] = eased
  return w
}

export function mount(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    alpha: false,
    powerPreference: 'high-performance'
  })
  renderer.setClearColor(0x141311, 1)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 24)
  camera.position.set(0, 0.08, 3.15)

  const a0 = new Float32Array(COUNT * 3)
  const a1 = new Float32Array(COUNT * 3)
  const a2 = new Float32Array(COUNT * 3)
  writeVessel(a0)
  writeRibbon(a1)
  writeKnot(a2)

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(a0, 3))
  geometry.setAttribute('a0', new THREE.BufferAttribute(a0, 3))
  geometry.setAttribute('a1', new THREE.BufferAttribute(a1, 3))
  geometry.setAttribute('a2', new THREE.BufferAttribute(a2, 3))
  geometry.computeBoundingSphere()

  const uniforms = {
    uW: { value: new THREE.Vector3(1, 0, 0) },
    uSpin: { value: 0.4 },
    uPointer: { value: new THREE.Vector2(0.44, -0.08) },
    uInfluence: { value: 0 },
    uSize: { value: 4.2 }
  }
  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: VERT,
    fragmentShader: FRAG,
    transparent: true,
    depthWrite: false
  })
  scene.add(new THREE.Points(geometry, material))

  let sized = ''
  const stop = mountStage(canvas, ({ elapsed, pointer, influence, size, reduced }) => {
    const time = reduced ? 2.4 : elapsed
    const dpr = size.dpr
    const key = Math.round(size.w * dpr) + 'x' + Math.round(size.h * dpr)
    if (key !== sized) {
      renderer.setPixelRatio(dpr)
      renderer.setSize(size.w, size.h, false)
      sized = key
    }
    const portrait = size.h > size.w * 0.92
    camera.aspect = size.w / Math.max(1, size.h)
    if (portrait) {
      camera.position.set(0, 0.12, 3.55)
      camera.lookAt(0, 0.58, 0)
    } else {
      camera.position.set(0, 0.02, 3.2)
      camera.lookAt(-0.48, -0.02, 0)
    }
    camera.updateProjectionMatrix()
    const w = weights(time)
    uniforms.uW.value.set(w[0], w[1], w[2])
    uniforms.uSpin.value = reduced ? 0.42 : time * 0.055
    uniforms.uPointer.value.set(pointer.x * 2 - 1, pointer.y * 2 - 1)
    uniforms.uInfluence.value = influence || 0
    uniforms.uSize.value = Math.max(5.2, Math.min(size.w, size.h) / 68)
    renderer.render(scene, camera)
  })

  return function unmount() {
    stop()
    geometry.dispose()
    material.dispose()
    renderer.dispose()
    renderer.forceContextLoss()
  }
}
