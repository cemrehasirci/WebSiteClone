<template>
    <div>
        <div class="top-buttons">
            <div class="top-buttons-left">
                <button @click="navigateTo('blog')">Blog</button>
                <button @click="navigateTo('help')">Yardım</button>
            </div>
    
            <div class="top-buttons-right">
                <button @click="navigateTo('language')">English</button>
                <button @click="navigateTo('instagram')">
                  <img src="/images/slider/insta.png" alt="Instagram" />
                </button>
                <button @click="navigateTo('twitter')">
                  <img src="/images/slider/x.png" alt="Twitter" />
                </button>
            </div>
        </div>

        <div class="carousel-container">
          <button class="arrow left" @click="prevImage">&#x276E;</button>
          <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <img v-for="(s_image, index) in s_images" :key="index" :src="s_image" alt="Carousel Image" />
          </div>
          <button class="arrow right" @click="nextImage">&#x276F;</button>
        </div>
    
        <div class="campaign-banner">
            <img src="/images/slider/kampanyalar.jpg" alt="Kampanyalar" />
        </div>
    </div>
</template>


<script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "Slider",
    
    data() {
        return {
            s_images: [
                "images/slider/image1.jpg",
                "images/slider/image2.jpg",
                "images/slider/image3.jpg",
                "images/slider/image4.jpg",
                "images/slider/image5.jpg",
                "images/slider/image6.jpg",
                "images/slider/image7.jpg",
                "images/slider/image8.jpg",
            ],
        currentIndex: 0,
        autoSlideInterval: null as NodeJS.Timeout | null,
        };
    },
    
    mounted() {
      this.startAutoSlide();
    },
    beforeUnmount() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval);
      }
    },
    methods: {
      nextImage(): void {
        this.currentIndex = (this.currentIndex + 1) % this.s_images.length;
      },
      prevImage(): void {
        this.currentIndex =
          (this.currentIndex - 1 + this.s_images.length) % this.s_images.length;
      },
      startAutoSlide(): void {
        this.autoSlideInterval = setInterval(() => {
          this.nextImage();
        }, 5000); // 5 sn
      },
      navigateTo(destination: string): void {
        switch (destination) {
          case "blog":
            window.location.href = "/blog";
            break;
          case "help":
            window.location.href = "/help";
            break;
          case "language":
            window.location.href = "/language";
            break;
          case "instagram":
            window.open("https://instagram.com", "_blank");
            break;
          case "twitter":
            window.open("https://twitter.com", "_blank");
            break;
          default:
            break;
        }
      },
    },
  });
</script>
  
<style scoped>
  
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
  
    .top-buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
    
    }

    .top-buttons-left,
    .top-buttons-right {
        display: flex;
        gap: 20px; /* Butonlar arası boşluk */
    }


    .top-buttons-right {
      justify-content: flex-end;
    }
  
    /* Butonlar */
    .top-buttons-left button,
    .top-buttons-right button {
        padding: 8px 12px;
        background-color: transparent;
        color: rgb(0, 0, 0); 
        border: 2px solid black;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
    }
  
    .top-buttons-left button:hover,
    .top-buttons-right button:hover {
        background-color: #00000000;
        color: #0a0a0a; 
    }
  
    /* insta twiter fotosunun Boyutları */
    .top-buttons-left img,
    .top-buttons-right img {
        width: 18px;
        height: 18px;
        filter: invert(1);
    }
  
    .carousel-container {
        position: relative;
        width: 850px;
        margin: 20px auto 20px;
        overflow: hidden;
        border-radius: 2px;
    }
  
    .carousel {
        display: flex;
        transition: transform 0.5s ease-in-out;
    }

    .carousel-item {
        flex: 0 0 100%;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

    .carousel-item.active {
        opacity: 1;
    }
  
  .carousel img {
    width: 100%;
    flex-shrink: 0;
    height: auto;
    display: block;
  }
  
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
  }
  
  .arrow.left {
    left: 10px;
  }
  
  .arrow.right {
    right: 10px;
  }
 
  
</style>
  