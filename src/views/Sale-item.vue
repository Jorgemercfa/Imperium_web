<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>

  <main class="container">
    <h1 class="title">Sitios de Venta</h1>

    <div class="sale-space">
      <!-- DIGITAL -->
      <div class="card">
        <h2>📱 Formato Digital</h2>
        <p>Encuentra los libros en:</p>

        <a
          href="https://torredepapelediciones.com/?s=Imperium&post_type%5B%5D=any&search_limit_to_post_titles=0&fs=1"
          target="_blank"
          class="btn"
        >
          Torre de Papel
        </a>

        <a
          href="https://www.amazon.com/s?i=digital-text&rh=p_27%3ALorenzo%2B%2BMacchiavello%2BTudela&s=relevancerank&language=es&text=Lorenzo++Macchiavello+Tudela&ref=dp_byline_sr_ebooks_1"
          target="_blank"
          rel="noopener noreferrer"
          class="btn amazon"
        >
          Amazon
        </a>
      </div>

      <!-- IMPRESO -->
      <div class="card">
        <h2>📚 Formato Impreso</h2>
        <p>Disponible en las siguientes librerías:</p>

        <ul class="list">
          <li><a href="#" target="_blank">El Virrey</a></li>
          <li><a href="#" target="_blank">Communitas</a></li>
          <li><a href="#" target="_blank">La Rebelde</a></li>
          <li><a href="#" target="_blank">Oculta</a></li>
        </ul>
      </div>
    </div>
  </main>

  <footer class="footer-wrapper">
    <Footer />
  </footer>
</template>

<style>
/* Evita desbordamientos */
* {
  box-sizing: border-box;
}

/* CONTENEDOR CENTRAL */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

/* TITULO */
.title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  font-weight: 600;
}

/* GRID */
.sale-space {
  display: flex;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;
}

/* CARDS */
.card {
  background: white;
  padding: 40px;
  border-radius: 16px;
  width: 420px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
}

.card h2 {
  margin-bottom: 20px;
}

.card p {
  margin-bottom: 20px;
  color: #555;
}

/* BOTONES */
.btn {
  display: block;
  margin: 12px 0;
  padding: 12px;
  text-align: center;
  background: black;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
}

.btn:hover {
  opacity: 0.85;
}

.amazon {
  background: #ff9900;
}

/* LISTA */
.list {
  padding-left: 20px;
}

.list li {
  margin-bottom: 10px;
}

.list a {
  text-decoration: none;
  color: #333;
}

.list a:hover {
  text-decoration: underline;
}

/* FOOTER */
.footer-wrapper {
  margin-top: 100px;
}
</style>
