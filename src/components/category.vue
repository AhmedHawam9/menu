<template>
  <div class="category" :class="{defalut: scrollPosition < 400, fixed: scrollPosition > 400}">
    <a :href="'#category_'+category.id" class="category_item" v-for="(category, index) in categories" :key="index">
        <img :src="category.image" class="category_image" :alt="category.title" :style="{'background-color': setting.color}">
        <p class="category_title">{{category.title}}</p>
    </a>
  </div>
</template>

<script>
import { categoryData } from "@/api/category.js";

export default {
  name: "header",
  props: ["setting"],
  data() {
    return {
      categories: [],
      scrollPosition: null
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    categoryData().then((response) => {
      this.categories = response.data.data;
    //   console.log(this.categories);
      return response;
    });
    window.addEventListener('scroll', this.updateScroll);
  },
};
</script>

<style>
</style>