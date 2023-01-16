<template>
  <NotFound v-if="found == false" />
  <div v-else-if="found == true">
    <HeaderMenu :setting="setting" />
    <Offers :setting="setting" />
    <Category :setting="setting" />
    <Product :setting="setting" />
  </div>
</template>

<script>
import NotFound from "@/components/error.vue";
import HeaderMenu from "@/components/header.vue";
import Offers from "@/components/offers.vue";
import Category from "@/components/category.vue";
import Product from "@/components/product.vue";
import { settingData } from "@/api/setting.js";

export default {
  name: "header",
  components: {
    NotFound,
    HeaderMenu,
    Offers,
    Category,
    Product,
  },
  data() {
    return {
      setting: {},
      found: "",
      metaInfo: {
        title: "",
      },
    };
  },
  mounted() {
    settingData().then((response) => {
      this.found = response.data.status;
      this.setting = response.data.data;
      this.seller_title = response.data.data.seller_title;
      if (this.found == true) {
        this.favicon = response.data.data.image;
        const favicon = document.getElementById("favicon");
        favicon.href = this.favicon;
      }
      const titleEl = document.querySelector("head title");
      titleEl.textContent = this.seller_title;
      // console.log(this.found);
      return response;
    });
  },
  created() {
  },
};
</script>