<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
import empires from '@/data/empires.js';

const router = useRouter();

// IMÁGENES DEL CARRUSEL
const images = [
  new URL('@/assets/Mapa_casa_del_lobo.jpeg', import.meta.url).href,
  new URL('@/assets/Mapa_guerras_de_los_lobos.jpeg', import.meta.url).href,
];

const currentIndex = ref(0);
let interval = null;

// Filtrar imperios por continente
const europeanEmpires = ref([]);
const africanEmpires = ref([]);
const asianEmpires = ref([]);
const americanEmpires = ref([]);

// Función para filtrar imperios por continente
const filterEmpiresByContinent = () => {
  europeanEmpires.value = empires.filter(
    (empire) => empire.continent === 'Europa',
  );
  africanEmpires.value = empires.filter(
    (empire) => empire.continent === 'África',
  );
  asianEmpires.value = empires.filter(
    (empire) => empire.continent === 'Asia/Ocenia',
  );
  americanEmpires.value = empires.filter(
    (empire) => empire.continent === 'America',
  );
};

// Funciones del carrusel
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

// Navegar a detalles del imperio
const goToEmpireDetails = (empireId) => {
  router.push({ name: 'EmpiresDetails', params: { id: empireId } });
};

onMounted(() => {
  filterEmpiresByContinent();
  interval = setInterval(() => {
    nextSlide();
  }, 4000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<template>
  <header>
    <navbar />
  </header>
  <div class="geography-space">
    <h1 class="title">Geografía de la historia</h1>

    <!-- CARRUSEL -->
    <div class="carousel">
      <div class="carousel-container">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="carousel-slide"
          :class="{ active: index === currentIndex }"
        >
          <img :src="image" class="map" :alt="'Mapa ' + (index + 1)" />
        </div>
      </div>

      <button
        class="carousel-btn prev"
        @click="prevSlide"
        aria-label="Anterior"
      >
        <span>‹</span>
      </button>
      <button
        class="carousel-btn next"
        @click="nextSlide"
        aria-label="Siguiente"
      >
        <span>›</span>
      </button>

      <div class="indicators">
        <span
          v-for="(image, index) in images"
          :key="'dot-' + index"
          class="dot"
          :class="{ activeDot: index === currentIndex }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>

    <!-- CONTENEDOR DE IMPERIOS POR CONTINENTE -->
    <div class="tables-container">
      <!-- Imperios Europeos -->
      <div class="table-group">
        <h2 class="continents-titles">Imperios Europeos</h2>
        <div class="empires-grid">
          <div
            v-for="empire in europeanEmpires"
            :key="empire.id"
            class="empire-card"
          >
            <div class="empire-content">
              <div class="empire-info">
                <h3 class="empire-name">{{ empire.name }}</h3>
                <p class="empire-government">
                  <strong>Tipo de gobierno:</strong> {{ empire.typegovernment }}
                </p>
              </div>
            </div>
            <button
              class="details-button"
              @click="goToEmpireDetails(empire.id)"
            >
              {{ empire.information_button || 'Información' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Imperios Africanos -->
      <div class="table-group">
        <h2 class="continents-titles">Imperios Africanos</h2>
        <div class="empires-grid">
          <div
            v-for="empire in africanEmpires"
            :key="empire.id"
            class="empire-card"
          >
            <div class="empire-content">
              <div class="empire-info">
                <h3 class="empire-name">{{ empire.name }}</h3>
                <p class="empire-government">
                  <strong>Tipo de gobierno:</strong> {{ empire.typegovernment }}
                </p>
                <p v-if="empire.shortDescription" class="empire-description">
                  {{ empire.shortDescription }}
                </p>
              </div>
            </div>
            <button
              class="details-button"
              @click="goToEmpireDetails(empire.id)"
            >
              {{ empire.details_button || 'Información' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Imperios Asiáticos/Oceanía -->
      <div class="table-group">
        <h2 class="continents-titles">Imperios Asiáticos/Oceanía</h2>
        <div class="empires-grid">
          <div
            v-for="empire in asianEmpires"
            :key="empire.id"
            class="empire-card"
          >
            <div class="empire-content">
              <div class="empire-info">
                <h3 class="empire-name">{{ empire.name }}</h3>
                <p class="empire-government">
                  <strong>Tipo de gobierno:</strong> {{ empire.typegovernment }}
                </p>
                <p v-if="empire.shortDescription" class="empire-description">
                  {{ empire.shortDescription }}
                </p>
              </div>
            </div>
            <button
              class="details-button"
              @click="goToEmpireDetails(empire.id)"
            >
              {{ empire.details_button || 'Información' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Imperios Americanos -->
      <div class="table-group">
        <h2 class="continents-titles">Imperios Americanos</h2>
        <div class="empires-grid">
          <div
            v-for="empire in americanEmpires"
            :key="empire.id"
            class="empire-card"
          >
            <div class="empire-content">
              <div class="empire-info">
                <h3 class="empire-name">{{ empire.name }}</h3>
                <p class="empire-government">
                  <strong>Tipo de gobierno:</strong> {{ empire.typegovernment }}
                </p>
                <p v-if="empire.shortDescription" class="empire-description">
                  {{ empire.shortDescription }}
                </p>
              </div>
            </div>
            <button
              class="details-button"
              @click="goToEmpireDetails(empire.id)"
            >
              {{ empire.details_button || 'Información' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
/* Contenedor general */
.geography-space {
  max-width: 1300px;
  margin: 60px auto;
  padding: 0 5%;
}

/* Título principal */
h1.title {
  text-align: left;
  font-size: 2.3rem;
  margin-bottom: 50px;
  position: relative;
  font-weight: 700;
}

h1.title::after {
  content: '';
  width: 60px;
  height: 4px;
  background-color: #fc4747;
  position: absolute;
  bottom: -12px;
  left: 0;
  border-radius: 5px;
}

/* ===== CARRUSEL ===== */
.carousel {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 60px auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.carousel-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #1a1f2b;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
}

.carousel-slide.active {
  opacity: 1;
  visibility: visible;
}

.map {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 45px;
  height: 45px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
}

.carousel-btn:hover {
  background-color: rgba(252, 71, 71, 0.8);
  transform: translateY(-50%) scale(1.1);
}

.carousel-btn.prev {
  left: 20px;
}

.carousel-btn.next {
  right: 20px;
}

.carousel-btn span {
  line-height: 1;
  margin-bottom: 4px;
}

.indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  backdrop-filter: blur(4px);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot:hover {
  background-color: rgba(255, 255, 255, 0.9);
  transform: scale(1.2);
}

.activeDot {
  background-color: #fc4747;
  transform: scale(1.2);
}

/* ===== CONTENEDOR DE IMPERIOS ===== */
.tables-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 40px;
}

.table-group {
  background: linear-gradient(145deg, #3a4356, #323a4b);
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  transition: 0.3s ease;
}

.table-group:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.25);
}

.continents-titles {
  text-align: left;
  margin-bottom: 20px;
  font-size: 1.4rem;
  color: #ffffff;
  font-weight: 600;
  border-left: 4px solid #fc4747;
  padding-left: 15px;
}

/* Grid de tarjetas de imperios */
.empires-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  max-height: 600px;
  overflow-y: auto;
  padding-right: 10px;
}

/* Scrollbar personalizado */
.empires-grid::-webkit-scrollbar {
  width: 8px;
}

.empires-grid::-webkit-scrollbar-track {
  background: #2c3240;
  border-radius: 10px;
}

.empires-grid::-webkit-scrollbar-thumb {
  background: #fc4747;
  border-radius: 10px;
}

.empires-grid::-webkit-scrollbar-thumb:hover {
  background: #d63a3a;
}

/* Tarjeta de imperio */
.empire-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.empire-card:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(252, 71, 71, 0.3);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.empire-content {
  flex: 1;
}

.empire-info {
  color: #f1f1f1;
}

.empire-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #ffffff;
  border-left: 3px solid #fc4747;
  padding-left: 10px;
}

.empire-government {
  font-size: 0.9rem;
  margin-bottom: 8px;
  color: #e0e0e0;
}

.empire-government strong {
  color: #fc4747;
}

.empire-description {
  font-size: 0.85rem;
  line-height: 1.5;
  opacity: 0.85;
  margin-top: 8px;
}

/* Botón de detalles */
.details-button {
  margin-top: 15px;
  background-color: #fc4747;
  color: white;
  border: none;
  padding: 10px;
  font-size: 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  font-weight: 500;
}

.details-button:hover {
  background-color: #d63a3a;
  transform: scale(1.02);
  box-shadow: 0 3px 10px rgba(252, 71, 71, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .tables-container {
    grid-template-columns: 1fr;
  }

  h1.title {
    font-size: 1.8rem;
  }

  .carousel {
    max-width: 100%;
  }

  .carousel-btn {
    width: 35px;
    height: 35px;
    font-size: 1.5rem;
  }

  .carousel-btn.prev {
    left: 10px;
  }

  .carousel-btn.next {
    right: 10px;
  }

  .empires-grid {
    grid-template-columns: 1fr;
    max-height: 400px;
  }
}
</style>
