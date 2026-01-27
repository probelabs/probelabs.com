<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
  index: {
    type: Number,
    required: true
  }
})

const activeTab = inject('activeTab')

const isActive = computed(() => activeTab.value === props.index)
</script>

<template>
  <div v-show="isActive" class="tab-panel">
    <slot></slot>
  </div>
</template>

<style scoped>
.tab-panel {
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
