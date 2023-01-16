<template>
  <div class="offers">
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :slidesPerGroup="1"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :loopFillGroupWithBlank="true"
      :modules="modules"
      :breakpoints="{
        300: {
          slidesPerView: 1,
          // slidesPerGroup: 1,
          loopFillGroupWithBlank: false,
        },
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="(offer, index) in offers" :key="index">
        <img :src="offer.image" :alt="offer.id" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { offerstData } from "@/api/offers.js";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

// import Swiper core and required modules
import SwiperCore, { Autoplay, FreeMode, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Thumbs]);
import { ref } from "vue";

export default {
  name: "offers-product",
  data() {
    return {
      offers: [],
      thumbsSwiper: null,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    offerstData().then((response) => {
      this.offers = response.data.data;
      //   console.log(this.categories);
      return response;
    });
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
  setup() {
    const visibleRef = ref(false);
    const indexRef = ref(0); // default 0
    const imgsRef = ref([]);
    // Img Url , string or Array of string
    // ImgObj { src: '', title: '', alt: '' }
    // 'src' is required
    // allow mixing
    const onShow = () => {
      visibleRef.value = true;
    };
    const showMultiple = () => {
      imgsRef.value = [];
      indexRef.value = 0; // index of imgList
      onShow();
    };
    const onHide = () => (visibleRef.value = false);
    return {
      visibleRef,
      indexRef,
      imgsRef,
      showMultiple,
      onHide,
      modules: [Autoplay],
    };
  },
};
</script>

<style>
</style>