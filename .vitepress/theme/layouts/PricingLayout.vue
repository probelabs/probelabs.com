<template>
  <div class="new-homepage new-homepage-pricing">
    <NewNav activeNav="pricing" />

    <!-- Hero -->
    <section class="nhp-hero">
      <div class="nh-container">
        <div class="nhp-hero-box">
          <div class="nhp-hero-content">
            <h1>Open source core.<br>Simple pricing.</h1>
            <p class="nhp-hero-desc">Start free with the full engine. When you need high availability, hands-on support, or enterprise governance — that's when pricing kicks in.</p>
            <div class="nhp-hero-ctas">
              <a href="https://cal.com/leonid-bugaev/30min" class="nh-btn filled">Book a demo</a>
              <a href="/docs/chat-with-code#quick-start" class="nh-btn">Start with Open Source</a>
            </div>
          </div>
          <ul class="nhp-hero-list">
            <li>Full platform at every tier — multi-repo, workflows, integrations, all included</li>
            <li>Pay when you need HA deployment, production support, and governance</li>
            <li>Your infra, your models, your rules — no lock-in, no phoning home</li>
            <li>Most teams are live within a day</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Plans -->
    <section class="nhp-plans">
      <div class="nh-container">
        <div class="nhp-section-header">
          <span class="nhp-label">Plans</span>
          <h2>Start free. Scale when you're ready.</h2>
          <p>The open source gives you the full engine. Paid plans give you a partner — high availability, hands-on support, and enterprise governance.</p>
        </div>
        <div class="nhp-grid">
          <!-- Open Source -->
          <div class="nhp-card">
            <div class="nhp-card-header">
              <h3>Open Source</h3>
              <div class="nhp-price">Free</div>
              <p class="nhp-best">Full engine, one node, zero cost. Ideal for solo founders and small teams.</p>
            </div>
            <div class="nhp-card-section">
              <div class="nhp-card-section-title">Includes</div>
              <ul class="nhp-list">
                <li>Full Probe + Visor stack — multi-repo, chat, workflows, integrations</li>
                <li>Dynamic skills, automations, scheduled jobs</li>
                <li>Single-node deployment — you run it, you own it</li>
                <li>Community support via GitHub issues and discussions</li>
              </ul>
            </div>
            <div class="nhp-card-section">
              <div class="nhp-card-section-title">You'll outgrow this when</div>
              <ul class="nhp-list nhp-list--muted">
                <li>You need high-availability multi-node deployment</li>
                <li>You want hands-on onboarding and someone to tune workflows to your stack</li>
                <li>You need production SLAs and guaranteed response times</li>
                <li>Your org requires policy-as-code governance and access boundaries</li>
              </ul>
            </div>
            <div class="nhp-card-cta">
              <a href="https://github.com/probelabs/probe" class="nh-btn">Get started on GitHub</a>
            </div>
          </div>
          <!-- Business -->
          <div class="nhp-card nhp-card--featured">
            <div class="nhp-card-header">
              <h3>Business</h3>
              <div class="nhp-price">$20,000 / year</div>
              <p class="nhp-best">HA deployment, hands-on support. Most teams live within a day.</p>
            </div>
            <div class="nhp-card-section">
              <div class="nhp-card-section-title">What you get</div>
              <ul class="nhp-list">
                <li>Up to 10 repos, up to 50 people</li>
                <li>Multi-node deployment with high availability</li>
                <li>An assistant tuned for your stack — repos, services, Jira, GitHub, Zendesk, Slack, and any tools your team uses</li>
                <li>Dozens of pre-built templates and working solutions to get you running fast</li>
                <li>Hands-on onboarding — we sit with your team and get it running</li>
                <li>Built-in AI agent that helps build new integrations and diagnose its own issues</li>
                <li>Ongoing support from first deploy to daily operations</li>
              </ul>
            </div>
            <p class="nhp-note">Annual contract. Fixed scope. Predictable cost.</p>
            <div class="nhp-card-cta">
              <a href="https://cal.com/leonid-bugaev/30min" class="nh-btn filled">Book a demo</a>
            </div>
          </div>
          <!-- Enterprise -->
          <div class="nhp-card">
            <div class="nhp-card-header">
              <h3>Enterprise</h3>
              <div class="nhp-price">Contact us</div>
              <p class="nhp-best">Unlimited scale, policy-as-code governance, and a named engineer on your account.</p>
            </div>
            <div class="nhp-card-section">
              <div class="nhp-card-section-title">What you get</div>
              <ul class="nhp-list">
                <li>Everything in Business, plus:</li>
                <li>Unlimited repos and users</li>
                <li>Open Policy Agent (OPA) for policy-as-code</li>
                <li>Per-workflow tool permissions and scoped context retrieval</li>
                <li>A named engineer assigned to your account — direct access via Slack or email, not a ticket queue</li>
                <li>Custom SLAs with guaranteed response times</li>
                <li>Professional services for org-wide AI transformation at scale</li>
              </ul>
            </div>
            <div class="nhp-card-cta">
              <a href="https://cal.com/leonid-bugaev/30min" class="nh-btn">Talk to us</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="nhp-testimonials">
      <div class="nh-container">
        <div class="nhp-testimonials-grid">
          <div class="nhp-testimonial">
            <p class="nhp-testimonial-quote">"As a Product Manager, Probe helps me understand the true behaviour of the software so I can go beyond the documentation and validate edge case scenarios. This saves a lot of time and disruption to the development teams."</p>
            <div class="nhp-testimonial-author">
              <strong>Andy Ost</strong>
              <span>Senior Product Manager at Tyk.io</span>
            </div>
          </div>
          <div class="nhp-testimonial">
            <p class="nhp-testimonial-quote">"I'm using Probe Labs tools daily as a technical lead, and they've been adopted across marketing, sales, documentation, product, delivery, and engineering. The YAML-based automation makes it easy to wire in tools like JIRA, Zendesk, and GitHub for agentic flows that actually work from day one."</p>
            <div class="nhp-testimonial-author">
              <strong>Laurentiu Ghiur</strong>
              <span>Technical Lead at Tyk.io</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Professional Services -->
    <section class="nhp-services">
      <div class="nh-container">
        <div class="nhp-services-box">
          <div class="nhp-services-left">
            <h2>Professional Services</h2>
            <p>Every org is different. The tools people use, how teams talk to each other, where knowledge lives, what slows things down — it's never the same twice.</p>
            <p>We sit down with your teams, understand the pain points, map how everything connects, and build the workflows and integrations that actually fit.</p>
            <div class="nhp-services-cta">
              <a href="https://cal.com/leonid-bugaev/30min" class="nh-btn filled">Book a call</a>
            </div>
          </div>
          <ul class="nhp-services-list">
            <li>Deep-dive with each team to understand their workflows and bottlenecks</li>
            <li>Custom integrations across your tools and data sources</li>
            <li>Workflow design, implementation, and tuning</li>
            <li>Ongoing partnership — quarterly reviews, workflow tuning, new integrations as your needs evolve</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="nhp-faq">
      <div class="nh-container">
        <h2>Common questions</h2>
        <div class="nhp-faq-grid">
          <div class="nhp-faq-item">
            <h3>What happens if I exceed 10 repos or 50 people?</h3>
            <p>We'll work with you to expand your license. Probe keeps running with a 3-month grace period — no disruption while we sort it out.</p>
          </div>
          <div class="nhp-faq-item">
            <h3>Is there a trial?</h3>
            <p>You can start with the open source right now — same core engine, no time limit. But if you want the fastest path to value, reach out. We run a free proof-of-concept with your team: we connect your repos, wire up your tools, and show you what it looks like running on your actual stack. No commitment, no contract until you're ready.</p>
          </div>
          <div class="nhp-faq-item">
            <h3>What LLMs do you support?</h3>
            <p>Any. OpenAI, Anthropic, Google, or your own self-hosted models. For best results, we recommend models at the Gemini 2.5 Pro level or above. You can also configure fallback models per workflow — if one provider goes down, your processes keep running. Switch anytime, no lock-in, no re-indexing.</p>
          </div>
          <div class="nhp-faq-item">
            <h3>Does my code leave my infrastructure?</h3>
            <p>No. Code indexing and retrieval run locally or on your own infra. You control what context goes to the LLM. Full on-prem deployment available.</p>
          </div>
          <div class="nhp-faq-item">
            <h3>How is this different from ChatGPT or Copilot?</h3>
            <p>They work with what you paste in. Probe has a purpose-built context retrieval engine designed for enterprise-scale, multi-repo codebases. It connects to your real systems — code repos, Jira, Zendesk, Confluence, Slack — reasons across all of them, and takes actions: opens PRs, updates tickets, posts summaries.</p>
          </div>
          <div class="nhp-faq-item">
            <h3>What's included in support?</h3>
            <p>Business: onboarding, workflow help, and ongoing tuning via a shared channel. Enterprise: a named contact, guaranteed response times, and dedicated rollout support.</p>
          </div>
          <div class="nhp-faq-item">
            <h3>Can I start with Open Source and upgrade later?</h3>
            <p>Yes. The open source runs the same core engine. When you're ready, we help you migrate to Business or Enterprise — same infrastructure, same data, no re-deployment. The upgrade adds HA, support, and governance on top of what you already have.</p>
          </div>
          <div class="nhp-faq-item">
            <h3>What does onboarding look like?</h3>
            <p>We start with a kickoff call to understand your stack, repos, and team structure. Then we connect your tools, configure workflows, and tune the assistant for your architecture. Most teams are in production within a week. After launch, we stay in a shared channel for ongoing support and tuning.</p>
          </div>
        </div>
      </div>
    </section>

    <NewFooter />
  </div>
</template>

<script setup>
import NewNav from '../components/NewNav.vue'
import NewFooter from '../components/NewFooter.vue'
</script>
