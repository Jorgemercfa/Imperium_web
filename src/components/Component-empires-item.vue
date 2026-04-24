<script setup>
import { computed, onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
import empires from '@/data/empires.js';

const route = useRoute();

const empire = computed(() =>
  empires.find((s) => s.id === Number(route.params.id)),
);

function getScrollContainer() {
  // 1) Si tienes un contenedor layout con overflow, ponle un id y úsalo aquí.
  // return document.querySelector('#app-scroll');

  // 2) Fallbacks comunes:
  return document.scrollingElement || document.documentElement || document.body;
}

async function forceScrollTop() {
  await nextTick();

  // 1) Scroll del documento
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // 2) Scroll del contenedor real (si no es window)
  const el = getScrollContainer();
  if (el) el.scrollTop = 0;

  // 3) Doble “refuerzo” por si hay imágenes/iframes que cambian el layout después
  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const el2 = getScrollContainer();
    if (el2) el2.scrollTop = 0;
  }, 50);

  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const el3 = getScrollContainer();
    if (el3) el3.scrollTop = 0;
  }, 250);
}

onMounted(() => {
  forceScrollTop();
});

// IMPORTANTE: si cambias entre servicios (id cambia), vuelve a forzar scroll
watch(
  () => route.params.id,
  () => {
    forceScrollTop();
  },
);
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main class="container">
    <div v-if="empire" class="story-wrapper">
      <router-link to="/Geography-item" class="return-area">
        <button class="card-button">Regresar</button>
      </router-link>

      <h1 class="title">{{ empire.name }}</h1>

      <img
        v-if="empire.image"
        class="empire-image-details"
        :src="empire.image"
        :alt="empire.name"
      />

      <div class="text-empire-type">
        {{ empire.Description }}
      </div>
      <div class="text-empire-type">
        <strong>Tipo de Gobierno:</strong> {{ empire.typegovernment }}
        <span v-if="empire.capital"
          ><br /><strong>Capital:</strong> {{ empire.capital }}</span
        >
        <span v-if="empire.headofstate"
          ><br /><strong>Jefe de Estado:</strong> {{ empire.headofstate }}</span
        >
        <span v-if="empire.family"
          ><br /><strong>Familia Real:</strong> {{ empire.family }}</span
        >
        <span v-if="empire.partys"
          ><br /><strong>Partidos Políticos:</strong> {{ empire.partys }}</span
        >
        <span v-if="empire.year_fonded"
          ><br /><strong>Año de Fundación:</strong>
          {{ empire.year_fonded }}</span
        >
        <span v-if="empire.economical_system"
          ><br /><strong>Sistema Económico:</strong>
          {{ empire.economical_system }}</span
        >
        <div class="regions_title_type">
          <h2>{{ empire.regions_title }}</h2>
        </div>
        <img
          v-if="empire.regions_images"
          class="empire-image-details"
          :src="empire.regions_images"
          :alt="empire.regions_images"
        />
      </div>
    </div>
  </main>

  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 20px;
  font-family: Outfit, Inter, Avenir, Helvetica, Arial, sans-serif;
}

.story-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* BOTÓN VOLVER */
.return-area {
  align-self: flex-start;
  margin-bottom: 25px;
}

/* TÍTULO PRINCIPAL */
.title {
  font-size: 2.3rem;
  margin-bottom: 40px;
  color: #111;
  position: relative;
  font-weight: 700;
}

/* 🔥 Línea roja decorativa */
.title::after {
  content: '';
  width: 70px;
  height: 4px;
  background-color: #fc4747;
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 6px;
}

/* IMAGEN */
.empire-image-details {
  width: 100%;
  max-width: 900px;
  height: 450px;
  object-fit: cover;
  border-radius: 18px;
  margin-bottom: 40px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
  transition: 0.4s ease;
}

.empire-image-details:hover {
  transform: scale(1.02);
}

/* TEXTO */
.text-empire-type {
  max-width: 850px;
  font-size: 1.15rem;
  line-height: 1.9;
  color: #444;
  text-align: justify;
}

/* BOTÓN */
.card-button {
  background-color: #e43030;
  color: white;
  border: none;
  padding: 10px 26px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.card-button:hover {
  background: #c62828;
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.15);
}

.regions_title_type {
  margin: 50px 0 20px;
  width: 100%;
  max-width: 850px;
  text-align: center !important;
  color: #111;
}

/* NOT FOUND */
.not-found {
  text-align: center;
  font-size: 1.2rem;
  padding: 80px 0;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .container {
    padding: 30px 15px;
  }

  .title {
    font-size: 1.6rem;
  }

  .title::after {
    width: 50px;
    bottom: -12px;
  }

  .empire-image-details {
    /* height: auto; */
    height: 270px;
    border-radius: 14px;
  }

  .text-empire-type {
    font-size: 1rem;
    text-align: left;
  }

  .return-area {
    align-self: center;
  }

  .card-button {
    width: 100%;
  }
}
</style>
