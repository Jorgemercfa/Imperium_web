<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <h1 class="title">Sitios de venta</h1>
  <div class="sale-space">
    <div>
      <h2>Formato digital</h2>
      <div>Puedes encontrar los libros la web Torre de Papel</div>
      <di>
        Link:
        <a href="https://torredepapelediciones.com/"
          >https://torredepapelediciones.com/</a
        ></di
      >
      <div>Puedes encontrar los libros en Amazon</div>
      <di> Link: </di>
    </div>
    <div class="print-book">
      <h2>Formato impreso</h2>
      <div>Puedes encontrar los libros en las siguestes librerias</div>
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style>
.title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #000000;
  text-align: center;
}

.sale-space {
  flex-direction: row;
  gap: 200px;
  margin-left: 60px;
  margin-top: 40px;
  margin-bottom: 200px;
}
@media (max-width: 768px) {
  .sale-space {
    padding: 8px;
  }
  .print-book,
  .title {
    text-align: center;
  }
}
.print-book {
  margin-top: 50px;
}
</style>
