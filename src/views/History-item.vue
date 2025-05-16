<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <h1 class="title">Resumen de la historia</h1>
  <div class="history-space">
    <div class="pa-1">
      Después de la Tercera Guerra Mundial, el mundo ha quedado en ruinas. Todo
      el tejido industrial quedó completamente devastado, y la ONU, junto con
      otras instituciones mundiales, ha desaparecido. Con el desarme nuclear y
      la desaparición de muchos países, se han creado otros nuevos. Han surgido
      nuevos imperios que han adoptado la monarquía como forma de gobierno, como
      el Imperio Germánico.
    </div>
    <div class="pa-2">
      La historia de "La casa del Lobo" trata sobre Sigurd Ornstein, un joven
      que es tomado prisionero por una organización terrorista que experimenta
      con él cuando era muy pequeño, y del que es rescatado por un Estado rival
      al suyo. Esto provoca que tarde muchos años en volver a casa. Los
      experimentos que realizaron en él le otorgaron ciertas capacidades, pero
      también lesiones y dolencias que marcaron su crecimiento desde la niñez
      hasta la juventud.
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style>
.history-space {
  height: 36vh;
  margin: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .history-space {
    height: 160vh;
    margin: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .history-space {
    height: 100vh;
    margin: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #ffffff;
  text-align: center;
}

.pa-1 {
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  text-align: justify;
  max-width: 80%;
}

.pa-2 {
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  text-align: justify;
  max-width: 80%;
}
</style>
