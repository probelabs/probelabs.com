---
theme: portfolio
---

<div class="portfolio-home">
  <header class="hero-header">
    <h1 class="main-title">Leonid Bugaev</h1>
    <p class="subtitle">Building tools that understand code</p>
  </header>

  <PortfolioGrid />
</div>

<style>
/* Portfolio home page styles */
.portfolio-home {
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.hero-header {
  text-align: center;
  margin-bottom: 10rem;
  padding: 10rem 0 4rem 0;
}

.main-title {
  font-size: clamp(3.5rem, 10vw, 9rem);
  font-weight: 200;
  letter-spacing: -0.05em;
  line-height: 0.9;
  margin: 0;
  color: #1a1a1a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

@media (prefers-color-scheme: dark) {
  .main-title {
    color: #e0e0e0;
  }
}

.subtitle {
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  font-weight: 300;
  letter-spacing: 0.04em;
  margin-top: 3rem;
  color: #666;
  opacity: 0.8;
}

@media (prefers-color-scheme: dark) {
  .subtitle {
    color: #999;
  }
}

@media (max-width: 768px) {
  .portfolio-home {
    padding: 2rem 1.5rem;
  }

  .hero-header {
    margin-bottom: 5rem;
    padding: 5rem 0 2rem 0;
  }
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-header {
  animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
