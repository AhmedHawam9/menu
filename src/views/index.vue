<template>
    <HeaderMenu :setting="setting" />
    <Category :setting="setting" />
    <Product :setting="setting" />
</template>

<script>
import HeaderMenu from "@/components/header.vue";
import Category from "@/components/category.vue";
import Product from "@/components/product.vue"
import { settingData } from "@/api/setting.js";

export default {
  name: "header",
  components: {
    HeaderMenu,
    Category,
    Product,
  },
  data() {
    return {
      setting: {},
    };
  },
  mounted() {
    settingData().then((response) => {
      this.setting = response.data.data;
      this.favicon = response.data.data.image;
      const favicon = document.getElementById("favicon");
      favicon.href = this.favicon;
      // console.log(this.setting);
      return response;
    });
  },
};
</script>