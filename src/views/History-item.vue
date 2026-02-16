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

<style>
/* 🔥 RESET GLOBAL (MUY IMPORTANTE) */
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

/* Layout estructural */
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Hace que el contenido empuje el footer */
.content {
  flex: 1;
}

/* Contenedor general */
.history-container {
  padding: 3rem 5%;
}

/* Título adaptable */
.title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: 2rem;
  text-align: center;
}

/* Contenedor del texto */
.history-space {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

/* Párrafos */
.history-space p {
  font-size: 1rem;
  line-height: 1.7;
  text-align: justify;
}

/* Responsive */
@media (max-width: 768px) {
  .history-container {
    padding: 2rem 6%;
  }

  .history-space p {
    font-size: 0.95rem;
  }
}
</style>
