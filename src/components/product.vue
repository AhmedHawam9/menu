<template>
  <section class="products">
    <div class="line" :style="{'background-color': setting.color}"></div>
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
        <div class="desctiption_product">
            <p class="title_product">{{ product.title }}</p>
            <p class="price" :style="{'background-color': setting.color}">{{ product.price }} {{$t("sar")}}</p>
            <p class="calories">{{ product.calories }} {{$t("calories")}}</p>
        </div>
        <img :src="product.image" :alt="product.title" class="image_product">
      </router-link>
    </div>
  </section>
</template>

<script>
import { productData } from "@/api/product.js";

export default {
  props: ["setting"],
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    productData().then((response) => {
      this.products = response.data.data;
      //   console.log(this.categories);
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