<script setup>
import navbar from '@/components/Navbar-item.vue';
import Footer from '@/components/Footer-item.vue';
</script>

<template>
  <header>
    <navbar />
  </header>
  <div class="geography-space">
    <h1 class="title">Geografía de la historia</h1>
    <div class="tables-container">
      <div class="table-group">
        <h2 class="continents-titles">Imperios Europeos</h2>
        <table>
          <tr>
            <th>Imperio</th>
            <th>Tipo de gobierno</th>
          </tr>
          <tr>
            <td>Imperio Germanico</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>República Franco-Suiza</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Flandes</td>
            <td>Ducado Vasallo del Imperio Germanico</td>
          </tr>
          <tr>
            <td>Imperio Celtas</td>
            <td>Monarquia Electiva</td>
          </tr>
          <tr>
            <td>Unión Popular de Britania</td>
            <td>Comunista</td>
          </tr>
          <tr>
            <td>Principado de Esex</td>
            <td>Monarquia Parlamentaria</td>
          </tr>
          <tr>
            <td>Principado de York</td>
            <td>Monarquia Parlamentaria</td>
          </tr>
          <tr>
            <td>Principado de Wessex</td>
            <td>Monarquia Parlamentaria</td>
          </tr>
          <tr>
            <td>Imperio Ravenio</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Imperio Hungaro</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Commonwealth Polaco-Baltico</td>
            <td>Monarquia electiva</td>
          </tr>
          <tr>
            <td>Reino de Servia</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>República de Jutlandia</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Republica del Mar del Norte</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Nueva Unión Sovietica</td>
            <td>Comunista</td>
          </tr>
          <tr>
            <td>Estados Husltas</td>
            <td>Estados secesionistas</td>
          </tr>
          <tr>
            <td>Imperio de Rumania</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Imperio de Sueco</td>
            <td>Monarquia Constitucional</td>
          </tr>
          <tr>
            <td>Imperio de Iberico</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Pincipado de Rusenia</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Reino de Bulgaria</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Emirato de Albania</td>
            <td>Monarquia Parlamentaria</td>
          </tr>
          <tr>
            <td>Imperio Bisantino</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Estado Pontificio</td>
            <td>Estado Teocrático</td>
          </tr>
          <!-- <tr>
            <td>Reino de Finlandia</td>
            <td>Monarquia Parlamentaria</td>
          </tr> -->
        </table>
      </div>
      <div class="table-group">
        <h2 class="continents-titles">Imperios Africanos</h2>
        <table>
          <tr>
            <th>Imperio</th>
            <th>Tipo de gobierno</th>
          </tr>
          <tr>
            <td>Reino de Algeria</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Estados Unidos de África occidental</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Imperio de Mali</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>República de Botsuana</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>República de África Oriental</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Imperio de Etiopia</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Sultanado Saryisida de Egipto</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Reino Copto de Egipto</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>República de Sudafrica</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Reino Zulú</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Territorio tribal de África</td>
            <td>Anarquia</td>
          </tr>
          <!-- Aquí continúa el resto de las filas... -->
        </table>
      </div>
      <div class="table-group">
        <h2 class="continents-titles">Imperios Asiáticos</h2>
        <table>
          <tr>
            <th>Imperio</th>
            <th>Tipo de gobierno</th>
          </tr>
          <tr>
            <td>Kanato de Gran Tartaria</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Reino de Abramaico de Jerusalen</td>
            <td>Monarquia Teocratica</td>
          </tr>
          <tr>
            <td>Reino de Jordania-Palestina</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Reino de Antioquia</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Sacro imperio del Caucaso</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Horda Dorada</td>
            <td>Monarquia Electiva</td>
          </tr>
          <tr>
            <td>Kanato de Yuan</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Kanato de Sinkiang</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Imperio Sabasida</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Califato Saudí</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Imperio de Japon</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Segunda Dinastia Ming</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>República Popoular de Beijing</td>
            <td>Comunista</td>
          </tr>
          <tr>
            <td>Confederación China occidental</td>
            <td>Estado Anarquico</td>
          </tr>
          <tr>
            <td>Taiwan</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Imperio de Joseon</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Dinastia Li</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Reino de Siam</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Segundo imperio mer</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Sultanato de Bruney</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>República de Singapur</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Sultanato de Malasia</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Unión Austro Oceanica</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Segundo Imperio Srivijaya</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Imperio Persa</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Kanato Kasario</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Segundo Imperio Tibetano</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Kanado de Manchuria</td>
            <td>Monarquia Absoluta</td>
          </tr>
        </table>
      </div>
      <div class="table-group">
        <h2 class="continents-titles">Imperios Americanos</h2>
        <table>
          <tr>
            <th>Imperio</th>
            <th>Tipo de gobierno</th>
          </tr>
          <tr>
            <td>Republica Artica</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Reino de Canadá</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Los Estados Democráticos de America</td>
            <td>Socialista</td>
          </tr>
          <tr>
            <td>Estados Unidos de America</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>Estados de México</td>
            <td>Democracia Anarquista</td>
          </tr>
          <tr>
            <td>Caribe</td>
            <td>Territorio del Imperio Iberico</td>
          </tr>
          <!-- <tr>
            <td>Reinado de Hispano América</td>
            <td>Monarquia Absoluta</td>
          </tr> -->
          <tr>
            <td>Reipública del Salvador</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Federación Centro América</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Republica de Gran Colombia</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>Imperio de Brasil</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>República de Perú y Ecuador</td>
            <td>Democracia</td>
          </tr>
          <tr>
            <td>República de la Plata</td>
            <td>Democracia</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
/* Contenedor general */
.geography-space {
  max-width: 1300px;
  margin: 60px auto;
  padding: 0 5%;
}

/* Título principal */
h1.title {
  text-align: left;
  font-size: 2.3rem;
  margin-bottom: 50px;
  position: relative;
  font-weight: 700;
}

h1.title::after {
  content: '';
  width: 60px;
  height: 4px;
  background-color: #fc4747;
  position: absolute;
  bottom: -12px;
  left: 0;
  border-radius: 5px;
}

/* GRID moderno */
.tables-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

/* Card de cada continente */
.table-group {
  background: linear-gradient(145deg, #3a4356, #323a4b);
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  transition: 0.3s ease;
}

.table-group:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.25);
}

/* Subtítulos */
.continents-titles {
  text-align: left;
  margin-bottom: 20px;
  font-size: 1.4rem;
  color: #ffffff;
  font-weight: 600;
}

/* Wrapper para scroll en móvil */
.table-wrapper {
  overflow-x: auto;
  border-radius: 10px;
}

/* Tabla */
table {
  width: 100%;
  border-collapse: collapse;
  background-color: transparent;
}

/* Cabecera */
th {
  text-align: left;
  padding: 12px;
  background-color: #545862;
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
}

/* Celdas */
td {
  padding: 10px 12px;
  color: #f1f1f1;
  font-size: 0.9rem;
}

/* Filas alternadas más suaves */
tr:nth-child(even) td {
  background-color: #2c3240;
}

/* Hover en filas */
tr:hover td {
  background-color: #40485c;
  transition: 0.2s ease;
}

/* Responsive */
@media (max-width: 768px) {
  .tables-container {
    grid-template-columns: 1fr;
  }

  h1.title {
    font-size: 1.8rem;
  }
}
</style>
