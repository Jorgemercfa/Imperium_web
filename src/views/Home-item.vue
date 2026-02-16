<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Imágenes del carrusel homeimg4
const images = [
  require('@/assets/homeimg1.png'),
  require('@/assets/homeimg2.png'),
  require('@/assets/homeimg3.png'),
  require('@/assets/homeimg4.png'),
  require('@/assets/homeimg5.png'),
  require('@/assets/homeimg6.png'),
  require('@/assets/homeimg7.png'),
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

<style scoped>
/* =========================
   HOME AREA
========================= */

.home-area {
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* =========================
   CARRUSEL
========================= */

.carousel-container {
  width: 100%;
  max-width: 2100px;
  height: 500px;
  position: relative;
  overflow: hidden;
}

.img-home {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* DOTS */

.carousel-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.carousel-dots span {
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s ease;
}

.carousel-dots .active {
  background: #fc4747;
  transform: scale(1.2);
}

/* =========================
   TEXTO
========================= */

.text-home {
  font-size: 1.2rem;
  max-width: 750px;
  margin: 40px auto 30px;
  text-align: center;
  line-height: 1.7;
  padding: 0 20px;
}

.title-home {
  font-size: 2rem;
  font-weight: 700;
  margin: 50px 0 30px;
  text-align: center;
  position: relative;
}

.title-home::after {
  content: '';
  width: 60px;
  height: 4px;
  background-color: #fc4747;
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
}

/* =========================
   LIBROS
========================= */

.books {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 40px;
  width: 100%;
  padding: 60px 20px;
  background-color: #3a4356;
  flex-wrap: wrap; /* 🔥 CLAVE */
}

.logs-item {
  background: #252b37;
  border-radius: 16px;
  width: 180px;
  padding: 25px 15px;
  text-align: center;
  transition: 0.3s ease;
}

.logs-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
}

.card-icons {
  height: 120px;
  width: 120px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 15px;
}

.books-title {
  font-size: 1.1rem;
  color: #ffffff;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 768px) {
  /* Carrusel más compacto */
  .carousel-container {
    height: 280px;
  }

  .text-home {
    font-size: 1rem;
    margin: 30px auto 20px;
  }

  .books {
    flex-direction: column;
    align-items: center;
    padding: 50px 15px;
    gap: 30px;
  }

  .logs-item {
    width: 90%;
    max-width: 320px;
  }
}
</style>
