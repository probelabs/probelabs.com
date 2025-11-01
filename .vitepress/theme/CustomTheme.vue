<template>
  <component :is="layout" />
</template>

<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
import DefaultTheme from 'vitepress/theme'
import PortfolioLayout from './layouts/PortfolioLayout.vue'

const { page, frontmatter } = useData()

const layout = computed(() => {
  // Use custom PortfolioLayout if specified in frontmatter
  if (frontmatter.value?.layout === 'PortfolioLayout') {
    return PortfolioLayout
  }
  // Otherwise use VitePress default theme
  return DefaultTheme.Layout
})
</script>
