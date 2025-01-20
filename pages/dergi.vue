<template>
  <div class="dergi_page">
    
    <div class="blog_side">
      <div class="side_menu_dergi">
        <Side_menu_dergi />
      </div>

      <div class="blog_rehber">
        <Islem_rehberi />
      </div>

    </div>


    <div class="dergiler_container">
      <Dergiler_container />
    </div>



  </div>
</template>

<script>
  import Side_menu_dergi from '~/components/Side_menu_dergi.vue';
  import Dergiler_container from '../components/Dergiler_container.vue';
  import Islem_rehberi from '/components/Islem_rehberi.vue';

</script>

<style>

  .dergi_page {
    display: flex;
  }

  .blog_side {
    flex: 1;
    max-width: 25%;
  }

  .side_menu_dergi {
    margin-bottom: 20px;
  }

  .dergiler_container {
    width: 100%;
    padding: 10px 20px;
  }

</style>

