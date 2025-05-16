<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <div class="sale-space">
    <h1 class="title">Sitios de venta</h1>
    <div>
      <h2>Formato digital</h2>
      <div>Puedes encontrar el libro en Amazon</div>
      <di> Link: </di>
    </div>
    <div class="print-book">
      <h2>Formato impreso</h2>
      <div>Puedes encontrar el libro en las siguestes librerias</div>
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style>
.sale-space {
  flex-direction: row;
  gap: 200px;
  margin-left: 60px;
  margin-top: 40px;
  margin-bottom: 200px;
}

.print-book {
  margin-top: 50px;
}
</style>
