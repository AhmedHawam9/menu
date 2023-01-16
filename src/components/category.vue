<template>
  <div
    class="category"
    :class="{ defalut: scrollPosition < 800, fixed: scrollPosition > 800 }"
  >
    <swiper
      :slidesPerView="4"
      :spaceBetween="30"
      :slidesPerGroup="1"
      :loop="true"
      :loopFillGroupWithBlank="true"
      :navigation="true"
      :modules="modules"
      :breakpoints="{
        300: {
          slidesPerView: 3,
          // slidesPerGroup: 1,
          loopFillGroupWithBlank: false,
        },
      }"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(category, index) in categories"
        :key="index"
      >
        <a
          :href="'#category_' + category.id"
          class="category_item"
        >
          <img
            :src="category.image"
            class="category_image"
            :alt="category.title"
            :style="{ 'background-color': setting.color == '' ? '#000' : setting.color }"
          />
          <p class="category_title">{{ category.title }}</p>
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { categoryData } from "@/api/category.js";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);
import { ref } from "vue";

export default {
  name: "header",
  props: ["setting"],
  data() {
    return {
      categories: [],
      scrollPosition: null,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
  mounted() {
    categoryData().then((response) => {
      this.categories = response.data.data;
      //   console.log(this.categories);
      return response;
    });
    window.addEventListener("scroll", this.updateScroll);
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
      modules: [Navigation],
    };
  },
};
</script>

<style>
</style>