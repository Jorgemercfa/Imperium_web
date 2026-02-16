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
  gap: 20px;
}

.storie-content {
  display: flex;
  gap: 20px;
  align-items: center;
  flex: 1;
}

.storie-image {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  background-color: #fff;
  flex-shrink: 0;
}

.storie-info {
  text-align: left;
  flex: 1;
  min-width: 0;
}

.storie-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.storie-description {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
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
  white-space: nowrap;
  flex-shrink: 0;
}

.details-button:hover {
  background-color: #c92a2a;
}

/* Tablets pequeños y dispositivos medianos (768px - 1023px) */
@media (max-width: 1023px) {
  .stories-area {
    margin: 40px 4%;
  }

  .title-stories {
    font-size: 1.6rem;
    margin-bottom: 24px;
    text-align: left;
  }

  .storie-card {
    flex-direction: row;
    align-items: center;
    padding: 16px;
    gap: 16px;
  }

  .storie-content {
    gap: 16px;
    flex: 1;
  }

  .storie-image {
    width: 90px;
    height: 90px;
  }

  .storie-title {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }

  .storie-description {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .details-button {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}

/* Tablets e iPad (max 768px) */
@media (max-width: 768px) {
  .stories-area {
    margin: 30px 3%;
  }

  .title-stories {
    font-size: 1.3rem;
    margin-bottom: 20px;
    text-align: center;
  }

  .storie-card {
    flex-direction: column;
    align-items: stretch;
    padding: 14px;
    gap: 12px;
  }

  .storie-content {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .storie-image {
    width: 80px;
    height: 80px;
  }

  .storie-info {
    text-align: center;
  }

  .storie-title {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }

  .storie-description {
    font-size: 0.85rem;
    line-height: 1.3;
  }

  .details-button {
    width: 100%;
    padding: 10px;
    font-size: 0.95rem;
  }
}

/* Móviles (max 480px) */
@media (max-width: 480px) {
  .stories-area {
    margin: 20px 2%;
  }

  .title-stories {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }

  .storie-card {
    padding: 12px;
    gap: 10px;
  }

  .storie-image {
    width: 70px;
    height: 70px;
  }

  .storie-title {
    font-size: 1rem;
    margin-bottom: 6px;
  }

  .storie-description {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .details-button {
    padding: 8px;
    font-size: 0.85rem;
  }
}
</style>