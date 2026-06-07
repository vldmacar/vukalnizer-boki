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
// Reveal-on-scroll animacija
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
