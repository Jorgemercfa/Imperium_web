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
    </div>

    <div v-else class="not-found">
      <p>Libro no encontrado.</p>
    </div>
  </main>

  <footer>
    <Footer />
  </footer>
</template>

<style>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: Outfit, Inter, Avenir, Helvetica, Arial, sans-serif;
}

.story-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.return-area {
  align-self: flex-start;
  margin-bottom: 20px;
}

.title {
  font-size: 2.2rem;
  margin-bottom: 30px;
  color: #111;
}

.storie-image-details {
  width: 100%;
  max-width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.text-storie-type {
  max-width: 800px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
}

.card-button {
  background-color: #e43030;
  color: white;
  border: none;
  padding: 10px 26px;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-button:hover {
  background: #c62828;
  transform: translateY(-2px);
}

.not-found {
  text-align: center;
  font-size: 1.2rem;
  padding: 60px 0;
}

@media (max-width: 768px) {
  .container {
    padding: 20px 15px;
  }

  .title {
    font-size: 1.5rem;
  }

  .storie-image-details {
    height: auto;
  }

  .text-storie-type {
    font-size: 1rem;
  }

  .return-area {
    align-self: center;
  }

  .card-button {
    width: 100%;
  }
}
</style>
