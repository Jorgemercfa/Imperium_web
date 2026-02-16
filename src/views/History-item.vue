<script setup>
import Navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <div class="page-container">
    <header>
      <Navbar />
    </header>

    <main class="content">
      <div class="history-container">
        <h1 class="title">Resumen de la historia</h1>

        <div class="history-space">
          <p>
            A mediados del siglo XXI, las democracias y organizaciones
            internacionales fracasaron en prevenir la devastadora Tercera Guerra
            Mundial, la cual ha dejado al mundo en ruinas. Todo el tejido
            industrial quedó completamente devastado, y la ONU, junto con otras
            instituciones mundiales, han desaparecido. Con el desarme nuclear y
            la desaparición de muchos países, se han creado otros nuevos. Han
            surgido nuevos imperios que han adoptado la monarquía como forma de
            gobierno, como el Imperio Germánico.
          </p>

          <p>
            En la saga de Imperium, este renacimiento imperial, donde reinos e
            imperios se extienden en gran parte del territorio, las repúblicas y
            democracias se acercan a la extinción. En este nuevo mundo, las
            nuevas tecnologías se mezclan con técnicas tradicionales y la gran
            guerra es librada con pólvora y acero.
          </p>
        </div>
      </div>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
/* Layout estructural */
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}

/* Contenedor principal */
.history-container {
  max-width: 1100px;
  margin: 60px auto;
  padding: 0 6%;
}

/* Título estilo editorial */
.title {
  font-size: clamp(2rem, 4vw, 2.6rem);
  margin-bottom: 50px;
  font-weight: 700;
  position: relative;
  text-align: left;
}

.title::after {
  content: '';
  width: 70px;
  height: 4px;
  background-color: #fc4747;
  position: absolute;
  bottom: -12px;
  left: 0;
  border-radius: 5px;
}

/* Card narrativa */
.history-space {
  background: linear-gradient(145deg, #3a4356, #323a4b);
  padding: 40px;
  border-radius: 18px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  color: #f1f1f1;
  display: flex;
  flex-direction: column;
  gap: 25px;
  transition: 0.3s ease;
}

.history-space:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25);
}

/* Párrafos */
.history-space p {
  font-size: 1.05rem;
  line-height: 1.9;
  text-align: justify;
  opacity: 0.95;
}

/* Primera letra estilo libro (detalle elegante) */
.history-space p:first-child::first-letter {
  font-size: 2.5rem;
  font-weight: bold;
  color: #fc4747;
  float: left;
  margin-right: 8px;
  line-height: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .history-space {
    padding: 25px;
  }

  .history-space p {
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .title {
    text-align: center;
  }

  .title::after {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
