<template>

  <div class="dergi_con">
    <div class="search-bar">
      <input type="text" placeholder="Dergiler kategorisinde ara" class="search-input"/>
      <button class="search-button">ARA</button>
    </div>
  
    <div class="filters">
      <span style="color: #931818;" >Dergiler kategorisindeki dergiler (Son 48 saat)</span>
      <div class="siralama">
        <h4>Sıralama Şekli</h4>
        <div class="seciniz">
          Seçiniz
          <button>Yeni Gelenler</button>
        </div>
      </div>
    </div>
<!-- Dergi Listesi -->
  <div class="dergi-listesi">
      <div v-for="(dergi, index) in dergiler" :key="index" class="dergi-box">
        <img :src="dergi.image" alt="Dergi Kapak" class="dergi-img" />
        <div class="bilgiler">
          <div class="baslik">{{ dergi.title }}</div>
          <div class="satici">Satıcı: {{ dergi.satici }}</div>
          <div class="yayinevi">Yayınevi: {{ dergi.yayinevi }}</div>
          <div class="kondisyon">Kondisyon: {{ dergi.kondisyon }}</div>
          <div class="stars">⭐⭐⭐⭐☆</div>
        </div>
        <div class="fiyat-kismi">
          <div class="fiyat">{{ dergi.fiyat }} TL</div>
            <button
              class="sepete-ekle"
              @click="addToCart(dergi)"
              :disabled="dergi.isAdded"
              >
                {{ dergi.isAdded ? 'Sepete Eklendi' : 'Sepete Ekle' }}
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '~/stores/cart';

// Sepet Store'u Pinia'dan Al
const cartStore = useCartStore();

// Sepete ürün ekleme fonksiyonu
const addToCart = (item: { 
  title: string; 
  fiyat: number; 
  image: string; 
  satici: string; 
  yayinevi: string; 
  kondisyon: string;
  isAdded: boolean;
}) => {
  if (!item.isAdded) {
    cartStore.addToCart(item);
    item.isAdded = true; // Eklenme durumunu güncelle
  }
};

// Dergi verileri (örnek veriler)
const dergiler = ref([
  {
    image: '/images/dergiler/dergi1.jpg',
    title: 'AKBABA DERGİSİ. 11 NİSAN 1973. SAYI:17.',
    satici: 'Uykusuz1922',
    yayinevi: '1973',
    kondisyon: 'İyi',
    fiyat: 80,
    isAdded: false,
  },
  {
    image: '/images/dergiler/dergi2.jpg',
    title: 'Arkitekt Dergisi - Yıl: 1960 Sayı 301',
    satici: 'RetroBooks',
    yayinevi: '1960',
    kondisyon: 'Çok İyi',
    fiyat: 200,
    isAdded: false,
  },
]);

</script>
  
<style>
  
  .search-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .search-input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
  }
  .search-button {
    padding: 10px 20px;
    background-color: #800000;
    color: white;
    border: none;
    cursor: pointer;
  }
  .filters {
    margin-bottom: 20px;
  }
  .siralama {
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    background-color: #f9f9f9;
    border: 1px solid #dddddd;
    margin-top: 10px;
  }
  .seciniz{
    padding-top: 10px;
    font-size: 15px;
  }
  button {
    border-radius: 2px;
    border-color: #dadada;
    border-bottom: 3px solid #dadada;
    color: #931818;
    background-color: #ffffff;
  }
  .dergi-listesi {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .dergi-box {
    display: flex;
    justify-content: space-between;
    
    padding: 15px;
    border-radius: 5px;
    background-color: #fff;
  }
  .dergi-img {
    width: 80px;
    height: auto;
    object-fit: cover;
    padding: 5px 20px;
    border: 1px solid #ddd;
  }
  .bilgiler {
    flex: 1;
    margin-left: 15px;
  }
  .baslik {
    font-size: 16px;
    font-weight: bold;
    color: #146eb2;
  }
  .satici,
  .yayinevi,
  .kondisyon {
    margin: 5px 0;
    font-size: 14px;
    color: #333;
  }
  .fiyat-kismi {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }
  .fiyat {
    font-size: 18px;
    font-weight: bold;
    color: #146eb2
  }
  .sepete-ekle {
    padding: 5px 10px;
    background-color: #faf7ec;
    color: #800000;
    border: none;
    cursor: pointer;
  }
  .stars {
    color: #d2bd7a;
  }
  .red {
    color: #800000;
  }
  
  </style>
