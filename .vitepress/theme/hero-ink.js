import { mountStage } from './hero-stage.js'

const VERT = `
attribute vec2 a;
void main() {
  gl_Position = vec4(a, 0.0, 1.0);
}
`

const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uPointer;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 m = mat2(0.80, 0.60, -0.60, 0.80);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = m * p * 2.02;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / max(1.0, uRes.y);
  vec2 p = vec2((uv.x - 0.45) * aspect, uv.y - 0.5);
  vec2 pull = (uPointer - vec2(0.68, 0.42)) * 0.16;
  float t = uTime;

  vec2 q = vec2(
    fbm(p * 0.85 + vec2(0.0, t * 0.055) + pull),
    fbm(p * 0.85 + vec2(4.1, 1.7) - t * 0.046)
  );
  vec2 warped = p + (q - 0.5) * 0.85;
  float f = fbm(warped * 1.15 + vec2(t * 0.036, -t * 0.028));
  float sweep = sin(warped.y * 2.2 + f * 2.4 + warped.x * 0.6);
  float mass = smoothstep(0.22, 0.78, f * 0.55 + sweep * 0.45 + 0.08);
  float shore = smoothstep(0.08, 0.0, abs(f - 0.52 + sweep * 0.05));

  vec3 paper = vec3(0.953, 0.941, 0.914);
  vec3 mist = vec3(0.78, 0.75, 0.70);
  vec3 stone = vec3(0.22, 0.21, 0.19);
  vec3 ink = vec3(0.07, 0.066, 0.06);
  vec3 amber = vec3(0.80, 0.46, 0.14);

  vec3 col = mix(paper, mist, smoothstep(0.0, 0.45, mass));
  col = mix(col, stone, smoothstep(0.38, 0.72, mass));
  col = mix(col, ink, smoothstep(0.62, 0.92, mass));
  col = mix(col, amber, shore * smoothstep(0.25, 0.8, uv.x) * smoothstep(0.15, 0.7, uv.y) * 0.85);

  float vignette = smoothstep(1.25, 0.28, length((uv - vec2(0.62, 0.5)) * vec2(aspect * 0.8, 1.0)));
  col *= mix(0.78, 1.0, vignette);

  float grain = hash(floor(gl_FragCoord.xy)) - 0.5;
  col += grain * 0.016;

  gl_FragColor = vec4(col, 1.0);
}
`

export function mount(canvas) {
  const gl = canvas.getContext('webgl', {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: 'high-performance'
  })
  if (!gl) return () => {}

  function compile(type, source) {
    const shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader))
    }
    return shader
  }

  const program = gl.createProgram()
  gl.attachShader(program, compile(gl.VERTEX_SHADER, VERT))
  gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAG))
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program))
  }
  gl.useProgram(program)

  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  const loc = gl.getAttribLocation(program, 'a')
  gl.enableVertexAttribArray(loc)
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

  const uRes = gl.getUniformLocation(program, 'uRes')
  const uTime = gl.getUniformLocation(program, 'uTime')
  const uPointer = gl.getUniformLocation(program, 'uPointer')
  let sized = ''

  const stop = mountStage(canvas, ({ elapsed, pointer, size, reduced }) => {
    const t = reduced ? 7.4 : elapsed
    const bw = Math.max(1, Math.round(size.w * size.dpr))
    const bh = Math.max(1, Math.round(size.h * size.dpr))
    const key = bw + 'x' + bh
    if (key !== sized) {
      canvas.width = bw
      canvas.height = bh
      sized = key
    }
    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.uniform2f(uRes, canvas.width, canvas.height)
    gl.uniform1f(uTime, t)
    gl.uniform2f(uPointer, pointer.x, pointer.y)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
  })

  return function unmount() {
    stop()
    const ext = gl.getExtension('WEBGL_lose_context')
    ext?.loseContext()
  }
}
