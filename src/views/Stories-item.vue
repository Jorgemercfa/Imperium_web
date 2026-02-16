<script setup name=src/components/storiesList.vue>
import navbar from '@/components/Navbar-item.vue'
import Footer from '@/components/Footer-item.vue'
import { useRouter } from 'vue-router'
import stories from '@/data/stories.js'

const router = useRouter()
</script>

<template>
  <header>
    <navbar />
  </header>
  <div class="stories-area">
    <h1 class="title-stories">Libros</h1>
    <div class="stories-container">
      <div v-for="storie in stories" :key="storie.id" class="storie-card">
        <div class="storie-content">
          <img v-if="storie.image" :src="storie.image" :alt="storie.name" class="storie-image" />
          <div class="storie-info">
            <h2 class="storie-title">{{ storie.name }}</h2>
            <p class="storie-description">{{ storie.shortDescription }}</p>
          </div>
        </div>
        <button
          class="details-button"
          @click="router.push({ name: 'StoriesDetails', params: { id: storie.id } })"
        >
          {{ storie.details_button }}
        </button>
      </div>
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
.stories-area {
  margin: 60px auto;
  padding: 0 6%;
  max-width: 1200px;
}

.title-stories {
  font-size: 2.2rem;
  color: #1a1a1a;
  margin-bottom: 40px;
  font-weight: 700;
  text-align: left;
  position: relative;
}

.title-stories::after {
  content: "";
  width: 60px;
  height: 4px;
  background-color: #e43030;
  position: absolute;
  bottom: -10px;
  left: 0;
  border-radius: 5px;
}

/* GRID en desktop */
.stories-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

/* Card */
.storie-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(145deg, #3a4356, #323a4b);
  color: white;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.storie-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
}

/* Contenido */
.storie-content {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.storie-image {
  width: 90px;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
  background-color: white;
  flex-shrink: 0;
}

.storie-info {
  flex: 1;
}

.storie-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.storie-description {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.85;
}

/* Botón */
.details-button {
  margin-top: 20px;
  background-color: #e43030;
  color: white;
  border: none;
  padding: 12px;
  font-size: 0.95rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.details-button:hover {
  background-color: #c92a2a;
  transform: scale(1.02);
}

/* Tablet */
@media (max-width: 768px) {
  .stories-container {
    grid-template-columns: 1fr;
  }

  .storie-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .storie-image {
    width: 100px;
    height: 140px;
  }
}
</style>