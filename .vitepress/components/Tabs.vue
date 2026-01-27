<script setup>
import { ref, provide, onMounted } from 'vue'

const props = defineProps({
  labels: {
    type: Array,
    required: true
  }
})

const activeTab = ref(0)

const setActiveTab = (index) => {
  activeTab.value = index
}

provide('activeTab', activeTab)
provide('setActiveTab', setActiveTab)
</script>

<template>
  <div class="tabs-container">
    <div class="tabs-nav">
      <button
        v-for="(label, index) in labels"
        :key="index"
        :class="['tab-btn', { active: activeTab === index }]"
        @click="setActiveTab(index)"
      >
        {{ label }}
      </button>
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.tabs-container {
  margin: 1.5rem 0;
}

.tabs-nav {
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 1rem;
}

.tab-btn {
  padding: 0.75rem 1.25rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: -1px;
}

.tab-btn:hover {
  color: var(--vp-c-text-1);
}

.tab-btn.active {
  color: var(--vp-c-brand-1);
  border-bottom-color: var(--vp-c-brand-1);
}

.tabs-content {
  padding-top: 0.5rem;
}
</style>
