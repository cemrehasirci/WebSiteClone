import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as Array<{ title: string; 
      fiyat: number; 
      image: string; 
      satici: string; 
      yayinevi: string; 
      kondisyon: string 
    }>, // Ürünlerin tipi belirlendi
  }),
  actions: {
    addToCart(item: { title: string; 
      fiyat: number; 
      image: string; 
      satici: string; 
      yayinevi: string; 
      kondisyon: string 
    }) {
      this.cartItems.push(item);
    },
    removeFromCart(index: number) {
      this.cartItems.splice(index, 1);
    },
  },
  getters: {
    totalItems: (state) => state.cartItems.length,
    totalPrice: (state) => state.cartItems.reduce((sum, item) => sum + item.fiyat, 0).toFixed(2),
  },
});
