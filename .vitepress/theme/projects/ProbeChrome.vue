<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  slug: { type: String, required: true },
  github: { type: String, required: true },
  repoLabel: { type: String, required: true },
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
        <a :href="github" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
    </header>
    <main id="content">
      <slot />
    </main>
    <footer class="probe-strip probe-foot">
      <p>
        © ProbeLabs ·
        <a href="https://probelabs.com">probelabs.com</a>
        ·
        <a :href="github" target="_blank" rel="noopener noreferrer">{{ repoLabel }}</a>
        <template v-if="license"> · {{ license }}</template>
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
  min-height: 32px;
  height: 32px;
  padding: 0 16px;
  box-sizing: border-box;
  background: var(--bg);
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
    padding: 0 8px;
    gap: 8px;
  }

  .probe-strip nav {
    gap: 10px;
  }
}
</style>
