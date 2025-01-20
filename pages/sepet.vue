<template>
  <div class="sepet_con">
    <h2 style="margin-bottom: 10px;">Sepetim</h2>
    <div v-if="cartItems.length > 0" class="dergi-listesi">
      <!-- Sepet Ürünleri -->
      <div v-for="(item, index) in cartItems" :key="index" class="dergi-box">
        <img :src="item.image" alt="Dergi Kapak" class="dergi-img" />
        <div class="bilgiler">
          <div class="baslik">{{ item.title }}</div>
          <div class="satici">Satıcı: {{ item.satici }}</div>
          <div class="yayinevi">Yayınevi: {{ item.yayinevi }}</div>
          <div class="kondisyon">Kondisyon: {{ item.kondisyon }}</div>
          <div class="stars">⭐⭐⭐⭐☆</div>
        </div>
        <div class="fiyat-kismi">
          <div class="fiyat">{{ item.fiyat }} TL</div>
          <button class="kaldir-buton" @click="removeFromCart(index)">Kaldır</button>
        </div>
      </div>
      <div class="sepet-toplam">
        <div style="text-align: right;">
          <div class="toplam-fiyat">
            <span>Toplam Ürün Fiyatı:</span>
            <span>{{ totalPrice }} TL</span>
          </div>
          <div class="kargo-fiyat">
            <span>Kargo Ücreti:</span>
            <span>{{ shippingCost }} TL</span>
          </div>
          <div class="genel-toplam">
            <span>Genel Toplam:</span>
            <span>{{ totalPriceWithShipping }} TL</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="bos-sepet">
      <p>Sepetiniz boş.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '~/stores/cart';

// Pinia store'u kullan
const cartStore = useCartStore();

const shippingCost = 50;


// Store'dan getter'lara ve state'e erişim
const cartItems = computed(() => cartStore.cartItems); // Sepet ürünlerini alır
const totalPrice = computed(() => cartStore.totalPrice); // Toplam fiyatı alır
// Sepet toplamına kargo ücretini ekliyoruz
const totalPriceWithShipping = computed(() => {
  return (parseFloat(cartStore.totalPrice) + shippingCost).toFixed(2);
});

// Sepetten ürün kaldırma fonksiyonu
const removeFromCart = (index: number) => {
  cartStore.removeFromCart(index);
};
</script>

<style>
/* Dergiler_container ile aynı CSS */
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
  border: 1px solid #ddd;
}
.dergi-img {
  width: 80px;
  height: auto;
  object-fit: cover;
  padding: 5px 20px;
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
  color: #146eb2;
}
.kaldir-buton {
  padding: 5px 10px;
  background-color: #faf7ec;
  color: #800000;
  border: none;
  cursor: pointer;
  border-radius: 3px;
}
.kaldir-buton:hover {
  background-color: #ffd6d6;
}
.stars {
  color: #d2bd7a;
}
.sepet-toplam {
  display: flex;
  flex-direction: column; /* Dikey hizalama için */
  align-items: flex-end; /* Yazıları sağa yaslar */
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}
.bos-sepet {
  text-align: center;
  color: #666;
}
.sepet-toplam div {
  margin-bottom: 10px;
}
.toplam-fiyat,
.kargo-fiyat,
.genel-toplam {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.toplam-fiyat span,
.kargo-fiyat span,
.genel-toplam span {
  margin-left: 10px;
}

</style>