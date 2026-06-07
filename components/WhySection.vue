<template>
  <section id="zasto" class="section why">
    <div class="container why-grid">
      <div class="why-media reveal">
        <img :src="img" alt="Detalj — guma i felna u radionici" loading="lazy" />
        <div class="why-rating">
          <div class="stars">★★★★★</div>
          <strong>{{ shop.rating }} / 5</strong>
          <small>{{ shop.reviewsCount }} {{ t.why.reviewsLabel }}</small>
        </div>
      </div>

      <div class="why-text reveal">
        <span class="kicker">{{ t.why.kicker }}</span>
        <h2>{{ t.why.heading }}<br /><span class="hl">{{ t.why.hl }}</span></h2>
        <p class="why-lead">{{ t.why.lead }}</p>

        <ul class="why-list">
          <li v-for="p in t.why.points" :key="p">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {{ p }}
          </li>
        </ul>

        <a href="#termin" class="btn btn-primary">{{ t.why.cta }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const shop = useShopInfo()
const t = useT()
const img =
  'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1100&auto=format&fit=crop'
</script>

<style scoped>
.why {
  background: var(--bg-2);
  border-top: 1px solid var(--line-soft);
  border-bottom: 1px solid var(--line-soft);
}
.why-grid {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 60px;
  align-items: center;
}

.why-media {
  position: relative;
}
.why-media img {
  width: 100%;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line);
  aspect-ratio: 4 / 4.4;
  object-fit: cover;
  filter: contrast(1.05);
}
.why-rating {
  position: absolute;
  bottom: 22px;
  left: -18px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 16px 22px;
  box-shadow: var(--shadow);
}
.stars {
  color: var(--amber);
  letter-spacing: 2px;
  font-size: 1.05rem;
}
.why-rating strong {
  font-family: var(--font-display);
  font-size: 1.5rem;
  display: block;
  margin-top: 4px;
}
.why-rating small {
  color: var(--text-3);
  font-family: var(--font-cond);
  font-size: 0.82rem;
}

.why-text h2 {
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  margin: 16px 0 20px;
}
.hl {
  color: var(--orange);
}
.why-lead {
  color: var(--text-2);
  font-size: 1.08rem;
  margin-bottom: 28px;
  max-width: 520px;
}
.why-list {
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-bottom: 34px;
}
.why-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 1.02rem;
  color: var(--text);
}
.why-list svg {
  width: 19px;
  height: 19px;
  color: var(--orange);
  flex-shrink: 0;
  margin-top: 4px;
}

@media (max-width: 900px) {
  .why-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .why-rating {
    left: 16px;
  }
}
</style>
