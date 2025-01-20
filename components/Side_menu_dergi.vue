<template>
  <div class="side_menu-container">
      <div class="title">
          <router-link to="/dergi"
          style="text-decoration: none; color: #931818; font-size: 20px;"
          >Dergiler</router-link>
      </div>
      
      <hr>

      <ul class="sub-menu">
          <li><a href="#">Bilgisayar</a></li>
          <li><a href="#">Bilim ve Teknik</a></li>
          <li><a href="#">Çocuk</a></li>
          <li><a href="#">Din, Felsefe</a></li>
          <li><a href="#">Edebiyat</a></li>
          <li><a href="#">Ekonomi, İktisat</a></li>
          <li><a href="#">Gezi Coğrafya</a></li>
          <li><a href="#">Hukuk</a></li>
          <li><a href="#">Kadın Dergileri</a></li>
          <li><a href="#">MAgazin, Moda</a></li>
          <li><a href="#">Mimarlık, Dekorasyon</a></li>
          <li><a href="#">Mizah, Karikatür</a></li>
          <li><a href="#">Otomobil</a></li>
          <li><a href="#">Sağlık, Yaşam</a></li>
          <li><a href="#">Sanat</a></li>
          <li><a href="#">Spor</a></li>
          <li><a href="#">Tarih</a></li>
          <li><a href="#">Toplum & Siyaset</a></li>
          <li><a href="#">Yeme, İçme</a></li>
          <li><a href="#">Diğer</a></li>
      </ul>
      
  </div>


</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Side_menu_dergi',
  });
</script>

<style>
    .side_menu-container {
    background-color: #faf7ec;
    padding: 20px;
    width: 250px;
  }

  hr {
    margin: 15px 0px;
    border-bottom: 4px #645412;
    width: 100%px;
  }
  
  .sub-menu {
    list-style: none;
    padding-left: 7px;
    margin-top: 15px;
  }
  
  .sub-menu > li {
    color: #606060; 
    font-size: 0.9em;
    font-weight: normal;
    margin-bottom: 5px;
    display: flex;
    align-items: center; 
  }
  
  .sub-menu > li::before {
    content: ">";
    margin-right: 8px;
    color: #931818;
    font-weight: bold; 
  }
  
  .sub-menu > li a {
    color: #606060; 
    text-decoration: none;
    font-size: 16px;
  }
  
  .sub-menu > li a:hover {
    text-decoration: underline;
  }
</style>