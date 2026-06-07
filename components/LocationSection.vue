<template>
  <section id="lokacija" class="section loc">
    <div class="container">
      <div class="section-head reveal">
        <span class="kicker">{{ t.location.kicker }}</span>
        <h2>{{ t.location.title }}</h2>
        <p>{{ t.location.descPrefix }} {{ shop.city }}{{ t.location.descSuffix }}</p>
      </div>

      <div class="loc-grid">
        <div class="loc-map reveal">
          <iframe
            :src="shop.mapEmbed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            :title="t.location.mapTitle"
            allowfullscreen
          ></iframe>
        </div>

        <div class="loc-info reveal">
          <div class="info-block">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h3>{{ t.location.address }}</h3>
              <p>{{ shop.address }}<br />{{ shop.city }}, {{ shop.country }}</p>
            </div>
          </div>

          <div class="info-block">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <h3>{{ t.location.phone }}</h3>
              <p><a :href="shop.telLink" class="lnk">{{ shop.phone }}</a></p>
            </div>
          </div>

          <div class="info-block">
            <div class="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" />
              </svg>
            </div>
            <div>
              <h3>{{ t.location.hours }}</h3>
              <ul class="hours">
                <li v-for="h in t.shopHours" :key="h.day">
                  <span>{{ h.day }}</span>
                  <strong :class="{ closed: h.closed }">{{ h.time }}</strong>
                </li>
              </ul>
            </div>
          </div>

          <a :href="shop.mapLink" target="_blank" rel="noopener" class="btn btn-primary btn-block">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2">
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            {{ t.location.navBtn }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const shop = useShopInfo()
const t = useT()
</script>

<style scoped>
.loc {
  background: var(--bg-2);
  border-top: 1px solid var(--line-soft);
}
.loc-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 32px;
}

.loc-map {
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--line);
  min-height: 440px;
  box-shadow: var(--shadow);
}
.loc-map iframe {
  width: 100%;
  height: 100%;
  min-height: 440px;
  border: 0;
  filter: grayscale(0.3) invert(0.92) hue-rotate(180deg) contrast(0.9);
}

.loc-info {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.info-block {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.info-icon {
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  border-radius: var(--radius);
  background: rgba(255, 90, 31, 0.1);
  border: 1px solid rgba(255, 90, 31, 0.25);
  display: grid;
  place-items: center;
  color: var(--orange);
}
.info-icon svg {
  width: 22px;
  height: 22px;
}
.info-block h3 {
  font-size: 1rem;
  margin-bottom: 6px;
}
.info-block p {
  color: var(--text-2);
  font-size: 1rem;
  line-height: 1.5;
}
.lnk {
  color: var(--orange);
  font-weight: 600;
}
.lnk:hover {
  text-decoration: underline;
}

.hours {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.hours li {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-size: 0.96rem;
  color: var(--text-2);
  padding-bottom: 6px;
  border-bottom: 1px dashed var(--line-soft);
}
.hours strong {
  color: var(--text);
  font-family: var(--font-cond);
  font-weight: 600;
}
.hours strong.closed {
  color: var(--text-3);
}

.btn-block {
  margin-top: 6px;
}

@media (max-width: 860px) {
  .loc-grid {
    grid-template-columns: 1fr;
  }
  .loc-map,
  .loc-map iframe {
    min-height: 320px;
  }
}
</style>
