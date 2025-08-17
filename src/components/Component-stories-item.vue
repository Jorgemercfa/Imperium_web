<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
import { useRoute } from 'vue-router';
import stories from '@/data/stories.js';

const route = useRoute();
const id = Number(route.params.id);
const storie = stories.find((s) => s.id === id);
</script>

<template>
  <header>
    <navbar />
  </header>
  <h1 class="title">{{ storie.name }}</h1>
  <div class="type-storie" v-if="storie">
    <div class="return-area">
      <router-link to="/Stories-item">
        <button class="card-button">Regresar</button>
      </router-link>
    </div>
    <div class="type-content">
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
  </div>
  <div v-else>
    <p>Libro no encontrado.</p>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style>
.type-storie {
  padding-left: 5%;
  padding-right: 15%;
  font-family: Outfit, Inter, Avenir, Helvetica, Arial, sans-serif;
}

.return-area {
  padding-bottom: 5%;
}

.title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #000000;
  text-align: center;
}

.type-content {
  gap: 33px;
  padding-left: 5%;
}

.storie-image-details {
  height: 400px;
  border-radius: 10px;
  width: 1246px;
  object-fit: cover;
  margin-bottom: 2rem;
}

.text-storie-type {
  padding-top: 5%;
  padding-right: 5%;
  padding-left: 15%;
  padding-bottom: 5%;
  font-size: 18px;
  line-height: 1.6;
}
.card-button {
  background-color: #e43030;
  color: white;
  border: none;
  padding: 10px 24px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}
.card-button:hover {
  background: #e43030;
}

@media (max-width: 768px) {
  .type-storie {
    padding-left: 3%;
    padding-right: 3%;
  }

  .return-area {
    padding-bottom: 10px;
    text-align: center;
  }

  .title {
    font-size: 1.3rem;
    margin-bottom: 15px;
  }

  .type-content {
    flex-direction: column;
    gap: 16px;
    padding-left: 0;
    align-items: center;
    display: flex;
  }

  .storie-image-details {
    width: 95vw;
    max-width: 340px;
    height: auto;
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  .text-storie-type {
    padding: 8px 4% 8px 4%;
    font-size: 1rem;
    text-align: center;
  }

  .card-button {
    width: 100%;
    font-size: 0.95rem;
    padding: 10px 0;
  }
}
</style>
