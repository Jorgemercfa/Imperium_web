<script setup>
import Navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
import { useRoute } from 'vue-router';
import stories from '@/data/stories.js';

const route = useRoute();
const id = Number(route.params.id);

const storie = stories.find((s) => s.id === id);
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main class="container">
    <div v-if="storie" class="story-wrapper">
      <router-link to="/Stories-item" class="return-area">
        <button class="card-button">Regresar</button>
      </router-link>

      <h1 class="title">{{ storie.name }}</h1>

      <img
        v-if="storie.image2"
        class="storie-image-details"
        :src="storie.image2"
        :alt="storie.name"
      />

      <div class="text-storie-type">
        {{ storie.longDescription }}
      </div>
      <div class="geography-changes-title-type">
        <h2>{{ storie.geography_changes_title }}</h2>
      </div>
      <div class="geography-changes-type">
        {{ storie.geography_changes }}
      </div>
    </div>

    <div v-else class="not-found">
      <p>Libro no encontrado.</p>
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
.storie-image-details {
  width: 100%;
  max-width: 900px;
  height: 450px;
  object-fit: cover;
  border-radius: 18px;
  margin-bottom: 40px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
  transition: 0.4s ease;
}

.storie-image-details:hover {
  transform: scale(1.02);
}

/* TEXTO */
.text-storie-type {
  max-width: 850px;
  font-size: 1.15rem;
  line-height: 1.9;
  color: #444;
  text-align: justify;
}

.geography-changes-title-type {
  margin: 50px 0 20px;
  width: 100%;
  max-width: 850px;
}

.geography-changes-type {
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

  .storie-image-details {
    height: auto;
    border-radius: 14px;
  }

  .text-storie-type {
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
