<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Imágenes del carrusel
const images = [
  require('@/assets/homeimg1.png'),
  require('@/assets/homeimg2.png'),
  require('@/assets/homeimg3.png'),
];

const currentImageIndex = ref(0);
let intervalId = null;

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

onMounted(() => {
  intervalId = setInterval(nextImage, 5000);
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<template>
  <header>
    <navbar />
  </header>
  <div class="home-area">
    <!-- Carrusel automático -->
    <div class="carousel-container">
      <img class="img-home" :src="images[currentImageIndex]" />
      <div class="carousel-dots">
        <span
          v-for="(image, index) in images"
          :key="index"
          :class="{ active: index === currentImageIndex }"
          @click="currentImageIndex = index"
        ></span>
      </div>
    </div>

    <div class="text-home">
      Tras la Tercera Guerra Mundial, el mundo quedó en ruinas y el antiguo
      orden internacional desapareció. Nuevos imperios han surgido y adoptado la
      monarquía como forma de gobierno.
    </div>
    <h1 class="title-home">Libros</h1>
    <div class="books">
      <div class="logs-item">
        <img class="card-icons" src="@/assets/book_home_1.png" alt="insect" />
        <div class="books-title">Casa del Lobo</div>
      </div>
      <div class="logs-item">
        <img class="card-icons" src="@/assets/book_home_2.png" alt="insect" />
        <div class="books-title">La guerra de los lobos</div>
      </div>
      <!-- <div class="logs-item">
        
        <img class="card-icons" src="@/assets/book_home_3.png" alt="insect" />
        <div class="books-title">La sangre del Lobo</div>
      </div> -->
      <!-- Puedes editar, quitar o agregar más cards -->
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style>
.home-area {
  /* margin-top: 20px; */
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Carrusel */
.carousel-container {
  width: 100%;
  max-width: 2100px;
  height: 500px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.img-home {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Botones del carrusel */
.carousel-dots {
  position: absolute;
  bottom: 20px; /* Los sube dentro de la imagen */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.carousel-dots span {
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-dots span:hover {
  transform: scale(1.2);
}

.carousel-dots .active {
  background: white;
}

/* Texto y títulos */
.text-home {
  font-size: 1.2rem;
  max-width: 750px;
  margin: 30px auto 20px;
  text-align: center;
  color: #000000;
}
.title-home {
  font-size: 2rem;
  font-weight: bold;
  margin: 40px 0 20px;
  text-align: center;
  color: #000000;
}

/* Cards de imperios */
.books {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 300px;
  width: 100%;
  margin-bottom: 40px;
  background-color: #3a4356;
}
.books-title {
  font-size: 1.2rem;
  color: #ffffff;
  text-align: center;
  margin-top: 10px;
}

.logs-item {
  background: #252b37;
  border-radius: 10px;
  border-radius: 10px;
  width: 150px;
  height: 200px;
  text-align: center;
}

.card-icons {
  margin-top: 10%;
  height: 120px;
  width: 120px;
  background-color: #ffffff;
  border-radius: 10px;
}

.logs-item:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

@media (max-width: 768px) {
  .books {
    flex-direction: column;
    align-items: center;
  }
  .logs-item {
    margin-bottom: 20px;
    width: 90%;
    max-width: 330px;
  }
}
</style>
