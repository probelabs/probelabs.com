<template>
  <div class="sidebar-search">
    <div class="sidebar-search-wrapper">
      <svg class="sidebar-search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
      <input
        type="text"
        class="sidebar-search-input"
        placeholder="Search docs..."
        readonly
        @click="openSearch"
        @keydown.enter="openSearch"
      />
      <span class="sidebar-search-shortcut">{{ shortcutKey }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'

const isMac = typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform)
const shortcutKey = computed(() => isMac ? '⌘K' : 'Ctrl K')

const openSearch = () => {
  // VitePress local search uses Ctrl+K or Cmd+K to open
  // We can trigger this by dispatching a keyboard event
  const event = new KeyboardEvent('keydown', {
    key: 'k',
    code: 'KeyK',
    metaKey: isMac,
    ctrlKey: !isMac,
    bubbles: true
  })
  document.dispatchEvent(event)
}

// Also handle the keyboard shortcut when focus is on the input
const handleKeydown = (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    openSearch()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>
