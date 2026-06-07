<template>
  <section id="usluge" class="section">
    <div class="container">
      <div class="section-head reveal">
        <span class="kicker">{{ t.services.kicker }}</span>
        <h2>{{ t.services.title }}</h2>
        <p>{{ t.services.desc }}</p>
      </div>

      <div class="grid">
        <article
          v-for="(s, i) in services"
          :key="s.title"
          class="card reveal"
          :style="{ transitionDelay: i * 60 + 'ms' }"
        >
          <div class="card-icon" v-html="s.icon"></div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const t = useT()

const icons = [
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 12l5-3"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 8v0.01M16 12h0.01M12 16v0.01M8 12h0.01"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/><circle cx="12" cy="12" r="3"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 12l6.5-2.5M12 12l-5 4.5M12 12l-1-7"/><circle cx="12" cy="12" r="2"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
]

const services = computed(() =>
  t.value.services.items.map((item, i) => ({ ...item, icon: icons[i] }))
)
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.card {
  background: var(--surface);
  border: 1px solid var(--line-soft);
  border-radius: var(--radius-lg);
  padding: 30px 26px;
  transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease,
    opacity 0.7s ease;
  position: relative;
  overflow: hidden;
}
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 3px;
  background: var(--orange);
  transition: width 0.3s ease;
}
.card:hover {
  transform: translateY(-6px);
  border-color: var(--line);
  background: var(--bg-3);
}
.card:hover::before {
  width: 100%;
}
.card-icon {
  width: 54px;
  height: 54px;
  border-radius: var(--radius);
  background: rgba(255, 90, 31, 0.1);
  border: 1px solid rgba(255, 90, 31, 0.25);
  display: grid;
  place-items: center;
  color: var(--orange);
  margin-bottom: 20px;
}
.card-icon :deep(svg) {
  width: 28px;
  height: 28px;
}
.card h3 {
  font-size: 1.15rem;
  margin-bottom: 10px;
}
.card p {
  color: var(--text-2);
  font-size: 0.98rem;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
