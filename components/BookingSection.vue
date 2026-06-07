<template>
  <section id="termin" class="section booking">
    <div class="booking-glow"></div>
    <div class="container booking-grid">
      <div class="booking-intro reveal">
        <span class="kicker">{{ t.booking.kicker }}</span>
        <h2>{{ t.booking.heading }}<br /><span class="hl">{{ t.booking.hl }}</span></h2>
        <p>{{ t.booking.desc }}</p>

        <div class="booking-alt">
          <span>{{ t.booking.preferCall }}</span>
          <a :href="shop.telLink" class="alt-phone">{{ shop.phone }}</a>
        </div>
      </div>

      <div class="booking-card reveal">
        <div class="row">
          <div>
            <label for="ime">{{ t.booking.labels.name }}</label>
            <input id="ime" v-model="form.ime" type="text" :placeholder="t.booking.placeholders.name" />
          </div>
          <div>
            <label for="tel">{{ t.booking.labels.phone }}</label>
            <input id="tel" v-model="form.tel" type="tel" :placeholder="t.booking.placeholders.phone" />
          </div>
        </div>

        <div>
          <label for="usluga">{{ t.booking.labels.service }}</label>
          <select id="usluga" v-model="form.usluga">
            <option v-for="opt in t.booking.options" :key="opt">{{ opt }}</option>
          </select>
        </div>

        <div class="row">
          <div>
            <label for="vozilo">{{ t.booking.labels.vehicle }}</label>
            <input id="vozilo" v-model="form.vozilo" type="text" :placeholder="t.booking.placeholders.vehicle" />
          </div>
          <div>
            <label for="dim">{{ t.booking.labels.tireSize }}</label>
            <input id="dim" v-model="form.dim" type="text" :placeholder="t.booking.placeholders.tireSize" />
          </div>
        </div>

        <div>
          <label for="kada">{{ t.booking.labels.when }}</label>
          <input id="kada" v-model="form.kada" type="text" :placeholder="t.booking.placeholders.when" />
        </div>

        <div>
          <label for="poruka">{{ t.booking.labels.note }}</label>
          <textarea id="poruka" v-model="form.poruka" :placeholder="t.booking.placeholders.note"></textarea>
        </div>

        <a :href="waHref" target="_blank" rel="noopener" class="btn btn-primary btn-block send-wa">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7.9-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3 1 2.6 1.1 2.7.1.2 1.9 2.9 4.6 4 1.7.7 2.4.8 3.2.7.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.4-.2z"/>
          </svg>
          {{ t.booking.cta }}
        </a>

        <p class="booking-note">{{ t.booking.note }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const shop = useShopInfo()
const t = useT()

const form = reactive({
  ime: '',
  tel: '',
  usluga: '',
  vozilo: '',
  dim: '',
  kada: '',
  poruka: '',
})

watch(t, (val) => {
  if (!form.usluga || !val.booking.options.includes(form.usluga)) {
    form.usluga = val.booking.options[0]
  }
}, { immediate: true })

const waHref = computed(() => {
  const lbl = t.value.booking.waLabels
  const lines = [
    t.value.booking.waGreeting,
    '',
    form.ime ? `${lbl.name}: ${form.ime}` : '',
    form.tel ? `${lbl.phone}: ${form.tel}` : '',
    `${lbl.service}: ${form.usluga}`,
    form.vozilo ? `${lbl.vehicle}: ${form.vozilo}` : '',
    form.dim ? `${lbl.tireSize}: ${form.dim}` : '',
    form.kada ? `${lbl.when}: ${form.kada}` : '',
    form.poruka ? `${lbl.note}: ${form.poruka}` : '',
  ].filter(Boolean)

  return shop.waLink(lines.join('\n'))
})
</script>

<style scoped>
.booking {
  position: relative;
  overflow: hidden;
}
.booking-glow {
  position: absolute;
  bottom: -20%;
  left: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 90, 31, 0.13), transparent 60%);
  filter: blur(20px);
  pointer-events: none;
}
.booking-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 56px;
  align-items: start;
}

.booking-intro {
  position: sticky;
  top: 110px;
}
.booking-intro h2 {
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  margin: 16px 0 22px;
}
.hl {
  color: var(--orange);
}
.booking-intro p {
  color: var(--text-2);
  font-size: 1.08rem;
  max-width: 420px;
  margin-bottom: 30px;
}
.booking-alt {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 18px 22px;
  background: var(--surface);
  border: 1px solid var(--line-soft);
  border-left: 3px solid var(--orange);
  border-radius: var(--radius);
  width: fit-content;
}
.booking-alt span {
  font-family: var(--font-cond);
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.8rem;
}
.alt-phone {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--text);
}
.alt-phone:hover {
  color: var(--orange);
}

.booking-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: var(--shadow);
}
.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.send-wa {
  margin-top: 6px;
  background: #25d366;
  color: #042a13;
  box-shadow: 0 10px 40px -10px rgba(37, 211, 102, 0.5);
}
.send-wa:hover {
  background: #2ee370;
  box-shadow: 0 16px 50px -10px rgba(37, 211, 102, 0.6);
}
.booking-note {
  color: var(--text-3);
  font-size: 0.84rem;
  text-align: center;
  margin-top: -4px;
}

@media (max-width: 860px) {
  .booking-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .booking-intro {
    position: static;
  }
}
@media (max-width: 480px) {
  .booking-card {
    padding: 22px;
  }
  .row {
    grid-template-columns: 1fr;
  }
}
</style>
