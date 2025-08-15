<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <div class="title-autor">
    <h1 class="title">Acerca del autor</h1>
  </div>

  <div class="author-space">
    <!-- Versión para móvil -->
    <div class="mobile-version">
      <div class="author">
        <div class="author-image-container">
          <img
            class="author-image"
            src="@/assets/autorimg.jpeg"
            alt="Foto de Lorenzo Macchiavello Tudela"
          />
        </div>
        <div class="author-name">
          <p>Lorenzo Macchiavello Tudela</p>
        </div>
        <div class="biography">
          <p>
            Lorenzo Macchiavello Tudela nació el 19 de marzo de 1999. Amante de
            ciencia ficción y apasionado de la lectura. Lorenzo siempre sintió
            fascinación por franquicias como Star Wars, El señor de los Anillos,
            Warhammer, Canción de Hielo y Fuego y Dune, así como por la creación
            de personajes y desarrollar sus respectivas historias. Ello lo
            inspiró a escribir Imperium: La casa del Lobo. Fueron varias
            historias de realidades alternativas, especialmente algunas como,
            «The man en in the High Castle», una serie que transcurre en un
            mundo en donde las potencias del Eje ganaron la Segunda Guerra
            Mundial y «Kaiserreich», un universo alternativo que platea cómo
            sería el mundo si los poderes centrales hubieran ganado la Primera
            Guerra Mundial.
          </p>
        </div>
      </div>
    </div>

    <!-- Versión para PC -->
    <div class="desktop-version">
      <div class="author">
        <div class="author-image-container">
          <img
            class="author-image"
            src="@/assets/autorimg.jpeg"
            alt="Foto de Lorenzo Macchiavello Tudela"
          />
        </div>
        <div class="biography-name">
          <h2 class="author-name">Lorenzo Macchiavello Tudela</h2>
          <p class="biography">
            Lorenzo Macchiavello Tudela nació el 19 de marzo de 1999. Amante de
            ciencia ficción y apasionado de la lectura. Lorenzo siempre sintió
            fascinación por franquicias como Star Wars, El señor de los Anillos,
            Warhammer, Canción de Hielo y Fuego y Dune, así como por la creación
            de personajes y desarrollar sus respectivas historias. Ello lo
            inspiró a escribir Imperium: La casa del Lobo. Fueron varias
            historias de realidades alternativas, especialmente algunas como,
            «The man en in the High Castle», una serie que transcurre en un
            mundo en donde las potencias del Eje ganaron la Segunda Guerra
            Mundial y «Kaiserreich», un universo alternativo que platea cómo
            sería el mundo si los poderes centrales hubieran ganado la Primera
            Guerra Mundial.
          </p>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style>
/* Estilos generales */
.title-autor {
  text-align: center;
  margin: 20px;
}

.author-space {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.author-image-container {
  text-align: center;
  margin: 10px;
}

.author-image {
  width: 150px;
  height: auto;
  border-radius: 50%;
}

.biography {
  text-align: justify;
  margin: 10px;
}

.author-name {
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
}

/* Ocultar versiones según la pantalla */

/* Versión móvil: para pantallas más pequeñas */
.mobile-version {
  display: block;
}

.desktop-version {
  display: none;
  margin-top: 50px;
  margin-bottom: 140px;
}

/* A partir de 768px en adelante (PC): Mostrar versión de escritorio */
@media (min-width: 768px) {
  .mobile-version {
    display: none;
  }

  .desktop-version {
    display: flex;
    align-items: center;
  }

  .desktop-version .author {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .desktop-version .biography-name {
    margin-left: 20px;
    text-align: left;
  }

  .desktop-version .author-name {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .desktop-version .biography {
    margin: 0;
  }
}
</style>
