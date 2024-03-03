<template>
  <section class="products">
    <div class="line" :style="{ 'background-color': setting.color == '' ? '#000' : setting.color }"></div>
    <div
      class="category_product"
      :id="'category_'+category.id"
      v-for="(category, index) in products"
      :key="index"
    >
      <h5 class="title_category">{{ category.title }}</h5>
      <router-link
        :to="`/${user}/product/${product.id}`"
        class="product_card"
        v-for="(product, item) in category.products"
        :key="item"
      >
        <div class="description_product">
            <p class="title_product">{{ product.title }}</p>
            <p v-html="product.description.substring(0,50) +' ...'" class="text_product"></p>
            <p class="price" :style="{ 'background-color': setting.color == '' ? '#000' : setting.color }">{{ product.price }} {{currency}}</p>
            <p class="calories" v-if="product?.calories != 0">{{ product.calories }} {{$t("calories")}}</p>
        </div>
        <img :src="product.image" :alt="product.title" class="image_product" :style="{ 'background-color': setting.color == '' ? '#000' : setting.color }">
      </router-link>
    </div>
  </section>
</template>

<script>
import { productData } from "@/api/product.js";
import { settingData } from "@/api/setting.js";

export default {
  props: ["setting"],
  data() {
    return {
      products: [],
      currency: ""
    };
  },
  mounted() {
    productData().then((response) => {
      this.products = response.data.data;
      //   console.log(this.categories);
      return response;
    });
    settingData().then((response) => {
      this.currency = response.data.data.currency;
      // console.log(this.color)
      return response;
    });
  },
  created() {
    this.user = window.location.pathname.split("/")[1];
  },
};
</script>

<style>
body .App .share:hover .socialicon {
  top: 1.5rem;
}
</style>