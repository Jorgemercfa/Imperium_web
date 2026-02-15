<script setup>
import 'primeicons/primeicons.css';
</script>

<template>
  <div class="footer-area">
    <div class="contact-area">
      <h4 class="titile-footer">Contacto</h4>
      <div class="footer-text">
        <div>macchiavellolorenzo@gmail.com</div>
      </div>
    </div>
    <div class="social-media">
      <h4 class="titile-footer">Redes Sociales</h4>
      <div class="social-media2">
        <div>
          <a
            href="https://www.instagram.com/lorenzomacchiavello?utm_source=qr&igsh=MXQ1N2FwaXExcDVxbg=="
            ><i class="pi pi-instagram"></i
          ></a>
        </div>
        <div>
          <a href="https://www.youtube.com/channel/UCux64_mG1yaaJwtKLZTwLvg"
            ><i class="pi pi-youtube"></i
          ></a>
        </div>
        <div>
          <a
            href="https://www.tiktok.com/@lorenzo_macchiavello?t=ZS-8yuGMeiV4qb&_r=1"
          >
            <i class="pi pi-tiktok"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.footer-area {
  background-color: #000000;
  width: 100%;
  height: 175px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
}

.contact-area {
  padding-left: 3%;
}

.titile-footer {
  color: white;
  padding-top: 10px;
}

.footer-text {
  padding-bottom: 50px;
  color: white;
}

.social-media {
  padding-right: 3%;
}

.social-media2 {
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
}

.pi-instagram {
  font-size: 2rem;
  color: white;
}

.pi-youtube {
  font-size: 2rem;
  color: white;
}
.pi-tiktok {
  font-size: 2rem;
  color: white;
}
</style>
