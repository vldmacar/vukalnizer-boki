<template>
  <section id="top" class="hero">
    <div class="hero-glow"></div>
    <div class="hero-stripe"></div>

    <div class="container hero-grid">
      <div class="hero-text">
        <span class="kicker">{{ t.hero.kicker }} · {{ shop.city }}</span>

        <h1>
          {{ t.hero.line1 }}<br />
          {{ t.hero.line2 }} <span class="hl">{{ t.hero.hl }}</span><br />
          {{ t.hero.line3 }}
        </h1>

        <p class="hero-sub">{{ t.hero.sub }}</p>

        <div class="hero-cta">
          <a href="#termin" class="btn btn-primary">
            {{ t.hero.ctaBook }}
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a :href="shop.telLink" class="btn btn-ghost">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {{ shop.phone }}
          </a>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <strong>{{ shop.rating }}<span>★</span></strong>
            <small>{{ shop.reviewsCount }} {{ t.hero.stat1label }}</small>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <strong>10—18"</strong>
            <small>{{ t.hero.stat2label }}</small>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <strong>{{ t.hero.stat3value }}</strong>
            <small>{{ t.hero.stat3label }}</small>
          </div>
        </div>
      </div>

      <div class="hero-media">
        <div class="media-frame">
          <img
            :src="img"
            alt="Radionica vulkanizera — montaža guma"
            loading="eager"
          />
          <div class="media-badge">
            <span class="badge-dot"></span>
            {{ t.hero.openToday }}
          </div>
        </div>
        <div class="media-tag tag">{{ t.hero.tag }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const shop = useShopInfo()
const t = useT()
// Pexels — close-up elegantne supercar felne (free)
const img =
  'https://images.pexels.com/photos/29964434/pexels-photo-29964434.jpeg?auto=compress&cs=tinysrgb&w=1200'
</script>

<style scoped>
.hero {
  position: relative;
  padding: 150px 0 90px;
  overflow: hidden;
}
.hero-glow {
  position: absolute;
  top: -10%;
  right: -5%;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(255, 90, 31, 0.18), transparent 62%);
  filter: blur(20px);
  pointer-events: none;
}
.hero-stripe {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--orange), transparent 60%);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 60px;
  align-items: center;
}

.hero-text h1 {
  font-size: clamp(2.8rem, 7vw, 5.4rem);
  margin: 22px 0 24px;
}
.hl {
  color: var(--orange);
  position: relative;
}
.hero-sub {
  color: var(--text-2);
  font-size: 1.12rem;
  max-width: 480px;
  margin-bottom: 36px;
}

.hero-cta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 44px;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 26px;
}
.stat strong {
  font-family: var(--font-display);
  font-size: 1.7rem;
  display: block;
  line-height: 1;
}
.stat strong span {
  color: var(--orange);
  font-size: 1.2rem;
}
.stat small {
  color: var(--text-3);
  font-family: var(--font-cond);
  font-weight: 500;
  letter-spacing: 0.04em;
  font-size: 0.82rem;
}
.stat-divider {
  width: 1px;
  height: 38px;
  background: var(--line);
}

/* Media */
.hero-media {
  position: relative;
}
.media-frame {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  aspect-ratio: 4 / 3.4;
}
.media-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.05) saturate(1.05);
}
.media-frame::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, transparent 50%, rgba(12, 12, 13, 0.55));
}
.media-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(12, 12, 13, 0.78);
  backdrop-filter: blur(8px);
  border: 1px solid var(--line);
  padding: 8px 14px;
  border-radius: 100px;
  font-family: var(--font-cond);
  font-weight: 600;
  letter-spacing: 0.05em;
  font-size: 0.82rem;
}
.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d058;
  box-shadow: 0 0 8px #34d058;
}
.media-tag {
  position: absolute;
  bottom: -14px;
  right: 20px;
  z-index: 2;
  background: var(--orange);
  color: var(--black);
  border: none;
  font-size: 0.8rem;
  padding: 8px 16px;
  box-shadow: var(--shadow-orange);
}

@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .hero-media {
    order: -1;
  }
  .media-frame {
    aspect-ratio: 16 / 11;
  }
}

@media (max-width: 760px) {
  .hero {
    padding: 120px 0 60px;
  }
  .hero-stats {
    gap: 18px;
  }
  .stat strong {
    font-size: 1.4rem;
  }
  .stat-divider {
    height: 30px;
  }
}

@media (max-width: 420px) {
  .hero-cta .btn {
    flex: 1;
  }
}
</style>
