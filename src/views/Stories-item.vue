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

<style>
.stories-area {
  margin: 50px 7%;
  text-align: center;
}

.title-stories {
  font-size: 2rem;
  color: #000000;
  margin-bottom: 30px;
  font-weight: bold;
  text-align: left;
}

.stories-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.storie-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3a4356;
  color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.storie-content {
  display: flex;
  gap: 20px;
  align-items: center;
}

.storie-image {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  background-color: #fff;
}

.storie-info {
  text-align: left;
}

.storie-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.storie-description {
  font-size: 1rem;
  line-height: 1.5;
}

.details-button {
  background-color: #e43030;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.details-button:hover {
  background-color: #e43030;
}
</style>