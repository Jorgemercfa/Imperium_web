<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';

// IMÁGENES DEL CARRUSEL
const images = [
  new URL('@/assets/Mapa_casa_del_lobo.jpeg', import.meta.url).href,
  new URL('@/assets/Mapa_gerras_de_los_lobos.jpeg', import.meta.url).href,
  // new URL('@/assets/Mapa_sangre_del_lobo.jpeg', import.meta.url).href
];

const currentIndex = ref(0);
let interval = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

onMounted(() => {
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

    <!-- CARRUSEL CORREGIDO -->
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
    <div class="tables-container">
      <div class="table-group">
        <h2 class="continents-titles">Imperios Europeos</h2>
        <table>
          <tr>
            <th>Imperio</th>
            <th>Tipo de gobierno</th>
          </tr>
          <tr>
            <td>Imperio Germánico</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>República Franco-Suiza</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Flandes</td>
            <td>Ducado Vasallo del Imperio Germanico</td>
          </tr>
          <tr>
            <td>Imperio Celta</td>
            <td>Monarquia Electiva</td>
          </tr>
          <tr>
            <td>Unión Popular de Britania</td>
            <td>Comunista</td>
          </tr>
          <tr>
            <td>Principado de Essex</td>
            <td>Monarquia Parlamentaria</td>
          </tr>
          <tr>
            <td>Principado de York</td>
            <td>Monarquia Parlamentaria</td>
          </tr>
          <tr>
            <td>Principado de Wessex</td>
            <td>Monarquia Parlamentaria</td>
          </tr>
          <tr>
            <td>Imperio Ravenio</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Estados Husitas</td>
            <td>Confederación</td>
          </tr>
          <tr>
            <td>Imperio Húngaro</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Commonwealth Polaco-Baltica</td>
            <td>Monarquia electiva</td>
          </tr>
          <tr>
            <td>Reino de Serbia</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>República de Jutlandia</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Republica del Mar del Norte</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Nueva Unión Sovietica</td>
            <td>Comunista</td>
          </tr>
          <tr>
            <td>Reino de Rumania</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Imperio de Sueco</td>
            <td>Monarquia Constitucional</td>
          </tr>
          <tr>
            <td>Imperio de Iberico</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Pincipado de Ruthenia</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Reino de Bulgaria</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Emirato de Albania</td>
            <td>Monarquia Parlamentaria</td>
          </tr>
          <tr>
            <td>Imperio Bizantino</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Estado Pontificio</td>
            <td>Estado Teocrático</td>
          </tr>
          <!-- <tr>
            <td>Reino de Finlandia</td>
            <td>Monarquia Parlamentaria</td>
          </tr> -->
          <tr>
            <td>Svalbard</td>
            <td>Territorio desabitado</td>
          </tr>
        </table>
      </div>
      <div class="table-group">
        <h2 class="continents-titles">Imperios Africanos</h2>
        <table>
          <tr>
            <th>Imperio</th>
            <th>Tipo de gobierno</th>
          </tr>
          <tr>
            <td>Reino de Algeria</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Estados Unidos de África occidental</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Imperio de Mali</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Republica de Nigeria</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Republica Islamica de Nigeria</td>
            <td>Estado Teocrático</td>
          </tr>
          <tr>
            <td>La Feredación Bereber</td>
            <td>Monarquia Electiva</td>
          </tr>
          <tr>
            <td>República de Botsuana</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>República de África Oriental</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Reino de Imerina</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Republica de Toamasina</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Imperio de Etiopia</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Sultanado Saryisida de Egipto</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Reino Copto de Egipto</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>República de Sudafrica</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Reino Zulú</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Territorio tribal de África</td>
            <td>Anarquia</td>
          </tr>
          <tr>
            <td>Llanura de Kasai</td>
            <td>Territorio desabitado</td>
          </tr>
        </table>
      </div>
      <div class="table-group">
        <h2 class="continents-titles">Imperios Asiáticos/Ocenia</h2>
        <table>
          <tr>
            <th>Imperio</th>
            <th>Tipo de gobierno</th>
          </tr>
          <tr>
            <td>Kanato de Gran Tartaria</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Republica de Beringia</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Reino de Asiria</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Reino de Antioquia</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Federación del Levante</td>
            <td>Monarquia Teocratica</td>
          </tr>
          <tr>
            <td>Reino de Sion</td>
            <td>Monarquia Teocratica</td>
          </tr>
          <tr>
            <td>Cuidad Estado de Jerusalem</td>
            <td>Ciudad Estado</td>
          </tr>
          <tr>
            <td>Emirato de Al-Quds</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Emirato de Jornadia</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Reino de Nabatea</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Emirato de Gaza</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Reino de Sinai</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Sacro imperio del Caucaso</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Reino de Osetia</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Emirato de Azerbaiyán</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Horda Dorada</td>
            <td>Monarquia Electiva</td>
          </tr>
          <tr>
            <td>Kanato de Yuan</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Kanato de Sinkiang</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Kanato de Kirguistán</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Reino de Tayikistán</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Imperio Sabasida</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Califato Saudí</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Imperio de Japon</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Segunda Dinastia Ming</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>República Popoular de Beijing</td>
            <td>Comunista</td>
          </tr>
          <tr>
            <td>Confederación China occidental</td>
            <td>Estado Anarquico</td>
          </tr>
          <tr>
            <td>Taiwan</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Imperio de Joseon</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Dinastia Li</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Reino de Siam</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Segundo imperio Khmer</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Sultanato de Bruney</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>República de Singapur</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Sultanato de Malasia</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Unión Austro Oceanica</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Segundo Imperio Srivijaya</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Imperio Persa</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Kanato Kasario</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Segundo Imperio Tibetano</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Kanato de Manchuria</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Corazon Negro</td>
            <td>Territorio desabitado</td>
          </tr>
        </table>
      </div>
      <div class="table-group">
        <h2 class="continents-titles">Imperios Americanos</h2>
        <table>
          <tr>
            <th>Imperio</th>
            <th>Tipo de gobierno</th>
          </tr>
          <tr>
            <td>Republica Artica</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Republica de Canadá</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Los Estados Democráticos de America</td>
            <td>Socialista</td>
          </tr>
          <tr>
            <td>Estados Unidos de America</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Republica de Hawai</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Estados de México</td>
            <td>Democracia Anarquista</td>
          </tr>
          <tr>
            <td>Caribe</td>
            <td>Territorio del Imperio Iberico</td>
          </tr>
          <!-- <tr>
            <td>Reinado de Hispano América</td>
            <td>Monarquia Absoluta</td>
          </tr> -->
          <tr>
            <td>República del Salvador</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Federación Centro Américana</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Republica de Gran Colombia</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Imperio de Brasil</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>República de Perú y Ecuador</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>República de la Plata</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Territorios del Noreste de la Republica Artica</td>
            <td>Territorio desabitado</td>
          </tr>
        </table>
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

/* ===== CARRUSEL CORREGIDO ===== */
.carousel {
  position: relative;
  width: 100%;
  max-width: 1000px; /* Tamaño reducido para vista de geografía */
  margin: 0 auto 60px auto; /* Centrado */
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.carousel-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9; /* Proporción estándar para mapas */
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
  object-fit: cover; /* Asegura que la imagen cubra todo el contenedor */
  display: block;
}

/* Botones del carrusel */
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

/* Indicadores (dots) */
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

/* ===== TABLAS (sin cambios) ===== */
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
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: transparent;
}

th {
  text-align: left;
  padding: 12px;
  background-color: #545862;
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
}

td {
  padding: 10px 12px;
  color: #f1f1f1;
  font-size: 0.9rem;
}

tr:nth-child(even) td {
  background-color: #2c3240;
}

tr:hover td {
  background-color: #40485c;
  transition: 0.2s ease;
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
}
</style>
