<template>
  <section id="galerija" class="section">
    <div class="container">
      <div class="section-head reveal">
        <span class="kicker">{{ t.gallery.kicker }}</span>
        <h2>{{ t.gallery.title }}</h2>
        <p>{{ t.gallery.desc }}</p>
      </div>

      <div class="gallery reveal">
        <figure
          v-for="(g, i) in photos"
          :key="i"
          :class="['g-item', g.span]"
        >
          <img :src="g.src" :alt="g.alt" loading="lazy" />
          <figcaption>{{ g.alt }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
const t = useT()

const u = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`

const srcs = [
  { src: u('1568605117036-5fe5e7bab0b7', 1000), span: 'wide' },
  { src: u('1502877338535-766e1452684a', 700), span: '' },
  { src: u('1449965408869-eaa3f722e40d', 700), span: '' },
  { src: u('1597007030739-6d2e7172ee5e', 700), span: '' },
  { src: u('1530046339160-ce3e530c7d2f', 700), span: '' },
  { src: u('1605559424843-9e4c228bf1c2', 1000), span: 'wide' },
]

const photos = computed(() =>
  srcs.map((s, i) => ({ ...s, alt: t.value.gallery.photos[i] }))
)
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 220px;
  gap: 14px;
}
.g-item {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line-soft);
}
.g-item.wide {
  grid-column: span 2;
}
.g-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.4s ease;
  filter: grayscale(0.15) contrast(1.05);
}
.g-item:hover img {
  transform: scale(1.07);
  filter: grayscale(0) contrast(1.08);
}
.g-item figcaption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 22px 16px 12px;
  font-family: var(--font-cond);
  font-weight: 600;
  letter-spacing: 0.04em;
  font-size: 0.86rem;
  color: var(--text);
  background: linear-gradient(transparent, rgba(12, 12, 13, 0.85));
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.g-item:hover figcaption {
  opacity: 1;
  transform: none;
}

@media (max-width: 760px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 160px;
    gap: 10px;
  }
  .g-item.wide {
    grid-column: span 2;
  }
}
</style>
