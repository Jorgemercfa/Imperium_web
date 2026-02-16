<script setup>
import 'primeicons/primeicons.css';
</script>

<template>
  <footer class="footer-area">
    <div class="footer-container">
      <div class="contact-area">
        <h4 class="title-footer">Contacto</h4>
        <p class="footer-text">macchiavellolorenzo@gmail.com</p>
      </div>

      <div class="social-media">
        <h4 class="title-footer">Redes Sociales</h4>

        <div class="social-icons">
          <a
            href="https://www.instagram.com/lorenzomacchiavello?utm_source=qr&igsh=MXQ1N2FwaXExcDVxbg=="
            target="_blank"
          >
            <i class="pi pi-instagram"></i>
          </a>

          <a
            href="https://www.youtube.com/channel/UCux64_mG1yaaJwtKLZTwLvg"
            target="_blank"
          >
            <i class="pi pi-youtube"></i>
          </a>

          <a
            href="https://www.tiktok.com/@lorenzo_macchiavello?t=ZS-8yuGMeiV4qb&_r=1"
            target="_blank"
          >
            <i class="pi pi-tiktok"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      © 2026 Lorenzo Macchiavello. Todos los derechos reservados.
    </div>
  </footer>
</template>

<style scoped>
.footer-area {
  background-color: #0f0f0f;
  color: white;
  margin-top: 100px;
}

/* CONTENEDOR INTERNO */
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 5%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

/* TÍTULOS */
.title-footer {
  font-size: 1.1rem;
  margin-bottom: 15px;
  position: relative;
  font-weight: 600;
}

/* Línea roja decorativa */
.title-footer::after {
  content: '';
  width: 40px;
  height: 3px;
  background-color: #fc4747;
  position: absolute;
  bottom: -6px;
  left: 0;
  border-radius: 4px;
}

/* TEXTO */
.footer-text {
  font-size: 0.95rem;
  color: #ccc;
}

/* ICONOS */
.social-icons {
  display: flex;
  gap: 20px;
  margin-top: 15px;
}

.social-icons a {
  font-size: 1.8rem;
  color: #ccc;
  transition: 0.3s ease;
}

.social-icons a:hover {
  color: #fc4747;
  transform: translateY(-3px);
}

/* BARRA INFERIOR */
.footer-bottom {
  text-align: center;
  padding: 20px;
  font-size: 0.85rem;
  color: #888;
  border-top: 1px solid #222;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .title-footer::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .social-icons {
    justify-content: center;
  }
}
</style>
