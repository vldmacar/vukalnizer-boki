<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <WhySection />
    <GallerySection />
    <LocationSection />
    <BookingSection />
    <ChatAgent />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'Vulkanizer Boki — Kaluđerica | Tires, Rims, Balancing',
  meta: [
    { name: 'description', content: 'Tire shop Boki in Kaluđerica — mounting, dismounting and balancing, used and new tires, steel and alloy rims. Rating 4.9★.' },
    { property: 'og:title', content: 'Vulkanizer Boki — Kaluđerica' },
    { property: 'og:description', content: 'Tires, rims, balancing. Fast, fair, professional. Rating 4.9★.' },
  ],
})

onMounted(() => {
  const els = document.querySelectorAll('.reveal')
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )
  els.forEach((el) => io.observe(el))
})
</script>
