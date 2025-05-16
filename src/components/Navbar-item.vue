<template>
  <div class="nav">
    <div class="hamburger" @click="toggleMenu">&#9776;</div>
    <div class="link-style" :class="{ 'show-menu': menuOpen }">
      <router-link to="/" class="text-navbar">Inicio</router-link>
      <router-link to="/History-item" class="text-navbar">Historia</router-link>
      <router-link to="/Geography-item" class="text-navbar"
        >Geografía</router-link
      >
      <router-link to="/Author-item" class="text-navbar">Autor</router-link>
      <router-link to="/Sale-item" class="text-navbar"
        >Sitio de Venta</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style>
.nav {
  background-color: #e43030;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.link-style {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-navbar {
  color: white;
  text-decoration: none;
  padding-right: 20px;
}

.hamburger {
  display: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
}

@media (max-width: 768px) {
  .link-style {
    display: none;
    flex-direction: column;
    background-color: #e43030;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    z-index: 1000;
  }

  .link-style.show-menu {
    display: flex;
  }

  .text-navbar {
    padding: 10px 0;
  }

  .hamburger {
    display: block;
  }
}
</style>
