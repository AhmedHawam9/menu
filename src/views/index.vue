<template>
    <NotFound v-if="found == false" />
    <div v-else-if="found == true">
      <HeaderMenu :setting="setting" />
      <Category :setting="setting" />
      <Product :setting="setting" />
    </div>
</template>

<script>
import NotFound from '@/components/error.vue'
import HeaderMenu from "@/components/header.vue";
import Category from "@/components/category.vue";
import Product from "@/components/product.vue"
import { settingData } from "@/api/setting.js";

export default {
  name: "header",
  components: {
    NotFound,
    HeaderMenu,
    Category,
    Product,
  },
  data() {
    return {
      setting: {},
      found: ""
    };
  },
  mounted() {
    settingData().then((response) => {
      this.found = response.data.status;
      this.setting = response.data.data;
      if (this.found == true) {
        this.favicon = response.data.data.image;
        const favicon = document.getElementById("favicon");
        favicon.href = this.favicon;
      }
      // console.log(this.found);
      return response;
    });
  },
};
</script>