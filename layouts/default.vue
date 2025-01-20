<template>
    <div>
      <Header /> <!-- Üst Menü -->
  
      <main>
        <transition name="fade" mode="out-in">
          <NuxtPage /> <!-- Sayfa İçeriği Burada Yüklenir -->
        </transition>
      </main>
  
      <Footer /> <!-- Alt Menü -->
    </div>
  </template>
    
  <script>
    import Header from '../components/Header.vue';
    import Footer from '/components/Footer.vue';
    
    export default {
      components: {
        Header,
        Footer,
      },
    };
  </script>
  
  <style>
  
  *{
      margin: 0px 0px;
      padding: 0px 0px;
    }
    
    main {
      margin: 20px 150px;
    }
  </style>
    