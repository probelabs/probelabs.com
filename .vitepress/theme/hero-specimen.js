import * as THREE from 'three'
import { mountStage } from './hero-stage.js'

const TAU = Math.PI * 2
const GOLDEN = Math.PI * (3 - Math.sqrt(5))
const FIT_RADIUS = 0.92

function hash(i) {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

function normalize(out, radius) {
  let max = 1e-6
  for (let i = 0; i < out.length; i += 3) {
    const r = Math.hypot(out[i], out[i + 1], out[i + 2])
    if (r > max) max = r
  }
  const s = radius / Math.max(1e-6, max)
  for (let i = 0; i < out.length; i++) out[i] *= s
}

// One instrument: a distorted ring (the trace of the work) around a dense
// core (the evidence). Both are closed volumes. Nothing is a node graph.
function writeInstrument(pos, kind) {
  const n = pos.length / 3
  const ringCount = Math.floor(n * 0.7)
  for (let i = 0; i < n; i++) {
    let x
    let y
    let z
    let k
    if (i < ringCount) {
      const u = (i * GOLDEN) % TAU
      const v = hash(i + 5) * TAU
      const wobble = 0.22 * Math.sin(u * 2 + 0.5) + 0.1 * Math.sin(u * 3 - 1.1)
      const major = 0.7 * (1 + 0.06 * Math.sin(u * 2))
      const tube = 0.2 * (1 + wobble) * (0.9 + (hash(i + 13) - 0.5) * 0.16)
      x = (major + tube * Math.cos(v)) * Math.cos(u)
      y = tube * Math.sin(v) * (0.92 + 0.08 * Math.sin(u))
      z = (major + tube * Math.cos(v)) * Math.sin(u)
      const tilt = 0.52
      const cy = y * Math.cos(tilt) - z * Math.sin(tilt)
      const cz = y * Math.sin(tilt) + z * Math.cos(tilt)
      y = cy
      z = cz
      k = 0
    } else {
      const t = (i - ringCount) / Math.max(1, n - ringCount - 1)
      const y0 = 1 - t * 2
      const rad = Math.sqrt(Math.max(0, 1 - y0 * y0))
      const phi = i * GOLDEN
      const shell = 0.94 + (hash(i + 2) - 0.5) * 0.08
      const pinch = 0.7 + 0.3 * (1 - y0 * y0)
      const scale = 0.34
      x = Math.cos(phi) * rad * pinch * shell * scale
      y = y0 * 0.46
      z = Math.sin(phi) * rad * pinch * shell * scale * 0.92
      k = 1
    }
    pos[i * 3] = x
    pos[i * 3 + 1] = y
    pos[i * 3 + 2] = z
    kind[i] = k
  }
  normalize(pos, FIT_RADIUS)
}

const VERT = `
attribute float aKind;
uniform float uSpin;
uniform float uTime;
uniform float uSway;
uniform float uSize;
uniform float uCamZ;
varying float vLight;
varying float vDepth;
varying float vLat;
varying float vKind;

void main() {
  vec3 p = position;
  float breathe = 1.0 + 0.012 * sin(uTime * 0.4);
  p *= breathe;
  float s = sin(uSpin);
  float c = cos(uSpin);
  p.xz = mat2(c, -s, s, c) * p.xz;
  p.xy += uSway;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  float kindScale = aKind > 0.5 ? 1.15 : 1.0;
  gl_PointSize = clamp(uSize * kindScale * (3.4 / max(0.4, -mv.z)), 1.15, 6.0);
  vec3 n = normalize(p + vec3(0.0001));
  vec3 light = normalize(vec3(0.58, 0.74, 0.36));
  vLight = pow(clamp(dot(n, light), 0.0, 1.0), 1.35);
  vDepth = clamp((-mv.z - (uCamZ - 1.05)) / 2.1, 0.0, 1.0);
  vLat = clamp(p.y * 0.62 + 0.5, 0.0, 1.0);
  vKind = aKind;
}
`

const FRAG = `
precision highp float;
uniform float uScan;
varying float vLight;
varying float vDepth;
varying float vLat;
varying float vKind;

void main() {
  vec2 pc = gl_PointCoord * 2.0 - 1.0;
  float d = dot(pc, pc);
  if (d > 1.0) discard;
  float edge = smoothstep(1.0, 0.22, d);
  vec3 shade = vec3(0.34, 0.31, 0.27);
  vec3 stone = vec3(0.90, 0.86, 0.78);
  vec3 amber = vec3(0.86, 0.49, 0.15);
  vec3 col = mix(shade, stone, smoothstep(0.02, 0.7, vLight));
  col = mix(col, amber, smoothstep(0.55, 1.0, vLight) * 0.82);
  float band = smoothstep(0.2, 0.0, abs(vLat - uScan));
  col = mix(col, amber, band * 0.42);
  col = mix(col, col * 0.62, vDepth * 0.55);
  float alpha = edge * (vKind > 0.5 ? 0.95 : 0.9);
  gl_FragColor = vec4(col, alpha);
}
`

function frameCamera(camera, aspect, sway) {
  const vFov = 26 * Math.PI / 180
  const hFov = 2 * Math.atan(Math.tan(vFov / 2) * Math.max(0.2, aspect))
  const minFov = Math.min(vFov, hFov)
  const dist = (FIT_RADIUS * 1.38) / Math.tan(minFov / 2)
  camera.fov = 26
  camera.aspect = Math.max(0.2, aspect)
  camera.near = 0.1
  camera.far = dist + 12
  camera.position.set(sway.x * 0.35, sway.y * 0.28, dist)
  camera.lookAt(0, 0, 0)
  camera.updateProjectionMatrix()
}

export function mount(canvas) {
  const small = window.matchMedia('(max-width: 700px)').matches
  const count = small ? 4200 : 9600
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    alpha: false,
    powerPreference: small ? 'low-power' : 'high-performance'
  })
  renderer.setClearColor(0x141311, 1)

  const pos = new Float32Array(count * 3)
  const kind = new Float32Array(count)
  writeInstrument(pos, kind)

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  geometry.setAttribute('aKind', new THREE.BufferAttribute(kind, 1))

  const uniforms = {
    uSpin: { value: 0.15 },
    uTime: { value: 0 },
    uSway: { value: new THREE.Vector2(0, 0) },
    uSize: { value: 4 },
    uScan: { value: 0.66 },
    uCamZ: { value: 5.5 }
  }
  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: VERT,
    fragmentShader: FRAG,
    transparent: true,
    depthWrite: false
  })
  const scene = new THREE.Scene()
  scene.add(new THREE.Points(geometry, material))

  const camera = new THREE.PerspectiveCamera(26, 1, 0.1, 24)
  let sized = ''

  const stop = mountStage(canvas, ({ elapsed, pointer, influence, size, reduced }) => {
    const dpr = size.w < 520 ? Math.min(size.dpr, 1.15) : size.dpr
    const key = Math.round(size.w * dpr) + 'x' + Math.round(size.h * dpr)
    if (key !== sized) {
      renderer.setPixelRatio(dpr)
      renderer.setSize(size.w, size.h, false)
      sized = key
    }
    const sway = reduced
      ? { x: 0, y: 0 }
      : {
          x: (pointer.x - 0.5) * influence,
          y: (pointer.y - 0.5) * influence
        }
    frameCamera(camera, size.w / Math.max(1, size.h), sway)
    uniforms.uCamZ.value = camera.position.z
    const time = reduced ? 0 : elapsed
    uniforms.uTime.value = time
    uniforms.uSpin.value = reduced ? 0.15 : 0.15 + time * 0.045
    uniforms.uSway.value.set(sway.x * 0.05, sway.y * 0.04)
    uniforms.uScan.value = reduced ? 0.66 : 0.62 + Math.sin(time * 0.18) * 0.12
    uniforms.uSize.value = Math.max(3.2, Math.min(size.w, size.h) / 58)
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
