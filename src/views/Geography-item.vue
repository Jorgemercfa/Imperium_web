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
            <td>Imperio de Bisantino</td>
            <td>Monarquia Absoluta</td>
          </tr>
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
            <td>Imperio Mali</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>República de Botsuania</td>
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
            <td>Reino de Israel</td>
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
            <td>Kanato Xiongnu</td>
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
            <td>Dinastia Ma</td>
            <td>Monarquia Absoluta</td>
          </tr>
          <tr>
            <td>República Popoular de Beijing</td>
            <td>Comunista</td>
          </tr>
          <tr>
            <td>Republica China</td>
            <td>Democracia</td>
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
            <td>Reino de Cian</td>
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
            <td>Imperio Suryavancha</td>
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
            <td>Estados Republicanos de America</td>
            <td>Monarquia Absoluta</td>
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
            <td>Estados de México</td>
            <td>Democracia Anarquista</td>
          </tr>
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

<style>
/* Espaciado y formato base */
.geography-space {
  margin: 20px 4%;
}

h1.title {
  text-align: center;
  margin-bottom: 30px;
}

.continents-titles {
  text-align: center;
  margin-bottom: 10px;
  color: #000000; /* Color del texto */
  font-size: 1.5rem; /* Tamaño del texto */
}

/* Contenedor de tablas */
.tables-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

/* Cada grupo de tablas */
.table-group {
  flex: 1 1 calc(50% - 20px); /* Dos columnas en pantallas grandes */
  max-width: 600px;
}

.table-group h2 {
  text-align: center;
  margin-bottom: 10px;
}

/* Estilos de tabla */
table {
  border-collapse: collapse;
  width: 100%;
  background-color: #3a4356;
}

th,
td {
  border: 1px solid #ddd;
  text-align: left;
  padding: 8px;
  color: #ffffff;
}

tr:nth-child(even) {
  background-color: #252b37;
}

th {
  background-color: #545862;
  color: white;
}

/* Diseño responsive */
@media (max-width: 768px) {
  .table-group {
    flex: 1 1 100%; /* Una columna en pantallas pequeñas */
  }

  table {
    font-size: 14px;
  }

  th,
  td {
    padding: 6px;
  }
}

@media (max-width: 480px) {
  h1.title {
    font-size: 24px;
  }

  table {
    font-size: 12px;
  }

  th,
  td {
    padding: 4px;
  }
}
</style>
