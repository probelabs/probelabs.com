<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  slug: { type: String, required: true },
  github: { type: String, default: '' },
  repoLabel: { type: String, default: '' },
  status: { type: String, default: '' },
  license: { type: String, default: '' },
  bg: { type: String, required: true }
})

onMounted(() => {
  document.documentElement.classList.add('probe-lock')
  document.documentElement.style.setProperty('--probe-page-bg', props.bg)
})

onBeforeUnmount(() => {
  document.documentElement.classList.remove('probe-lock')
  document.documentElement.style.removeProperty('--probe-page-bg')
})
</script>

<template>
  <div class="probe-root">
    <a class="probe-skip" href="#content">Skip to content</a>
    <header class="probe-strip">
      <a class="probe-home" href="/">ProbeLabs / {{ slug }}</a>
      <nav aria-label="Project">
        <a href="/#projects">Projects</a>
        <a v-if="github" :href="github" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
    </header>
    <main id="content">
      <slot />
    </main>
    <footer class="probe-strip probe-foot">
      <p>
        © ProbeLabs ·
        <a href="https://probelabs.com">probelabs.com</a>
        <template v-if="github">
          ·
          <a :href="github" target="_blank" rel="noopener noreferrer">{{ repoLabel }}</a>
        </template>
        <template v-if="license"> · {{ license }}</template>
        <template v-if="status"> · {{ status }}</template>
      </p>
    </footer>
  </div>
</template>

<style>
.probe-root {
  background: var(--bg);
  color: var(--ink);
  min-height: 100vh;
  overflow-x: clip;
}

.probe-skip {
  position: absolute;
  left: 8px;
  top: -48px;
  z-index: 40;
  background: var(--bg);
  color: var(--ink);
  padding: 6px 10px;
  font-family: system-ui, sans-serif;
  font-size: 12px;
}

.probe-skip:focus {
  top: 40px;
}

.probe-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  box-sizing: border-box;
  width: min(1120px, calc(100% - clamp(32px, 7vw, 120px) * 2));
  min-height: 32px;
  margin-inline: auto;
  padding: 0;
  background: transparent;
  color: var(--ink);
  font-family: system-ui, sans-serif;
  font-size: 12px;
  line-height: 32px;
}

.probe-strip nav {
  display: flex;
  gap: 16px;
}

.probe-strip a {
  color: inherit;
  text-decoration: none;
}

.probe-strip a:hover {
  text-decoration: underline;
}

.probe-strip a:focus-visible,
.probe-skip:focus-visible {
  outline: 2px solid var(--focus, var(--ink));
  outline-offset: 2px;
}

.probe-foot {
  height: auto;
  min-height: 32px;
}

.probe-foot p {
  margin: 0;
  line-height: 1.4;
  padding: 6px 0;
}

@media (max-width: 420px) {
  .probe-strip {
    gap: 8px;
  }

  .probe-strip nav {
    gap: 10px;
  }
}
</style>
