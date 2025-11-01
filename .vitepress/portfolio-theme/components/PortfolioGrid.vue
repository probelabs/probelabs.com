<template>
  <div class="portfolio-grid">
    <div
      v-for="(project, index) in projects"
      :key="project.id"
      class="project-card"
      :style="{ animationDelay: `${0.15 + index * 0.15}s` }"
      @click="navigateTo(project.link)"
    >
      <div class="card-inner">
        <div class="card-header">
          <span class="project-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="project-year">{{ project.year }}</span>
        </div>

        <div class="card-content">
          <h2 class="project-title">{{ project.title }}</h2>
          <p class="project-description">{{ project.description }}</p>
        </div>

        <div class="card-footer">
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <div class="project-link">
            <span class="link-text">View Project</span>
            <svg class="link-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    year: '2024',
    title: 'Probe',
    description: 'AI-friendly semantic code search tool that combines ripgrep\'s speed with tree-sitter\'s AST parsing.',
    tags: ['Rust', 'AI Tools', 'Open Source'],
    link: '/probe'
  },
  {
    id: 2,
    year: '2024',
    title: 'Maid',
    description: 'Your Mermaid.js diagram assistant - AI-powered tool for creating, validating, and improving Mermaid diagrams.',
    tags: ['TypeScript', 'AI Tools', 'Diagrams'],
    link: '/maid/'
  },
  {
    id: 3,
    year: '2016',
    title: 'GoReplay',
    description: 'Open-source tool for capturing and replaying live HTTP traffic for testing and analysis.',
    tags: ['Go', 'DevOps', 'Open Source'],
    link: 'https://goreplay.org'
  },
  {
    id: 4,
    year: '2020',
    title: 'Conductor',
    description: 'Mac app that lets you run many AI coding agents in parallel for complex development workflows.',
    tags: ['AI', 'Developer Tools', 'Productivity'],
    link: 'https://conductor.build'
  }
]

const navigateTo = (link) => {
  if (link.startsWith('http')) {
    window.open(link, '_blank')
  } else {
    window.location.href = link
  }
}
</script>

<style scoped>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

.project-card {
  position: relative;
  cursor: pointer;
  animation: fadeInScale 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: both;
  border-radius: 0;
}

.card-inner {
  position: relative;
  padding: 3rem 2.5rem;
  background: #fafafa;
  border: 1px solid #e8e8e8;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 420px;
}

@media (prefers-color-scheme: dark) {
  .card-inner {
    background: #0f0f0f;
    border-color: #1f1f1f;
  }
}

.project-card:hover .card-inner {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  border-color: #d0d0d0;
}

@media (prefers-color-scheme: dark) {
  .project-card:hover .card-inner {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    border-color: #2a2a2a;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
}

@media (prefers-color-scheme: dark) {
  .card-header {
    border-bottom-color: #2a2a2a;
  }
}

.project-number {
  font-size: 3rem;
  font-weight: 200;
  letter-spacing: -0.02em;
  color: #1a1a1a;
  line-height: 1;
}

@media (prefers-color-scheme: dark) {
  .project-number {
    color: #e0e0e0;
  }
}

.project-year {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #999;
}

@media (prefers-color-scheme: dark) {
  .project-year {
    color: #666;
  }
}

.card-content {
  flex: 1;
  margin-bottom: 2rem;
}

.project-title {
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: -0.02em;
  margin: 0 0 1.25rem 0;
  color: #1a1a1a;
  line-height: 1.2;
}

@media (prefers-color-scheme: dark) {
  .project-title {
    color: #e0e0e0;
  }
}

.project-description {
  font-size: 0.9375rem;
  font-weight: 300;
  line-height: 1.7;
  color: #666;
  margin: 0;
}

@media (prefers-color-scheme: dark) {
  .project-description {
    color: #999;
  }
}

.card-footer {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: auto;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
}

.tag {
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 0.4rem 0.75rem;
  background-color: #f0f0f0;
  color: #666;
  border-radius: 3px;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

@media (prefers-color-scheme: dark) {
  .tag {
    background-color: #1a1a1a;
    color: #999;
  }
}

.project-card:hover .tag {
  background-color: #1a1a1a;
  color: #fff;
}

@media (prefers-color-scheme: dark) {
  .project-card:hover .tag {
    background-color: #333;
    color: #fff;
  }
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: #1a1a1a;
  text-transform: uppercase;
  opacity: 0.6;
  transition: all 0.3s ease;
}

@media (prefers-color-scheme: dark) {
  .project-link {
    color: #e0e0e0;
  }
}

.project-card:hover .project-link {
  opacity: 1;
}

.link-arrow {
  transition: transform 0.3s ease;
}

.project-card:hover .link-arrow {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .card-inner {
    padding: 2.5rem 2rem;
    min-height: 380px;
  }

  .project-number {
    font-size: 2.5rem;
  }

  .project-title {
    font-size: 1.75rem;
  }

  .project-description {
    font-size: 0.875rem;
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
