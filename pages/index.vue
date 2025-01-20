<template>

  <div class="homepage">

    <div class="index_container">
      <div class="side_menu">
        <Side_menu />
      </div>

      <div class="slider">
        <Slider />
      </div>
    </div>

    <div class="index_container2">
      <div class="son_eklenenler">
        <Son_eklenenler />
      </div>

      <div class="index_container3">
        <div class="son_blog">

        </div>

        <div class="Islem_rehberi">
          <Islem_rehberi />
        </div>
      </div>

    </div>

  </div>



</template>

<script>
  import Side_menu from '~/components/Side_menu.vue';
  import Slider from '../components/Slider.vue';
  import Son_eklenenler from '../components/Son_eklenenler.vue';
  import Islem_rehberi from '../components/Islem_rehberi.vue';
</script>

<style>

  .index_container {
    display: flex;
    margin-bottom: 50px;
    max-width: 100%;
  }

  .side_menu {
    flex: 1;
    max-width: 25%;
  }

  .slider {
    margin-left: 30px;
  }

  .index_container2 {
    display: flex;
  }

  .son_eklenenler {
    margin-right: 20px;
  }

  .index_container3 {
    padding-top: 10px;
  }

  .son_blog {
    border: 1px solid #eee4cd;
    margin: 30px 10px;
    padding: 10px 20px;
    margin-bottom: 20px;
    height: 400px;
  }

  .son_eklenenler {
    height: 400%;
  }

</style>


<!--
FIREBASE KONTROL
<template>
  <div>
    <h1>Firebase Kullanımı</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { getAuth } from "firebase/auth";
const nuxtApp = useNuxtApp();

// Firebase nesnesine erişim
const firebaseApp = nuxtApp.$firebase;

// Firebase servislerini kullanma
const auth = getAuth(firebaseApp);

let message = "Firebase bağlantısı sağlandı.";
</script>
-->