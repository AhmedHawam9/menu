<template>
  <section class="product_details">
    <div class="d-flex justify-content-between align-items-start">

      <div class="share">
        <div class="dropdown">
          <a
            class="btn dropdown-toggle"
            :style="{ color: color == '' ? '#000' : color }"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-solid fa-share-nodes share_icon"></i>
          </a>

          <ul class="dropdown-menu socialicon">
            <!-- Facebook share this product -->
            <li>
              <ShareNetwork
                network="facebook"
                :title="product.title"
                :url="$websiteUrl + `${url}`"
              >
                <i class="fab fa-facebook-f icon"></i>
              </ShareNetwork>
            </li>
            <!-- Facebook share this product -->

            <!-- Twitter share this product -->
            <li>
              <ShareNetwork
                network="twitter"
                :title="product.title"
                :url="$websiteUrl + `${url}`"
              >
                <i class="fab fa-twitter icon"></i>
              </ShareNetwork>
            </li>
            <!-- Twitter share this product -->

            <!-- Messenger share this product -->
            <li>
              <ShareNetwork
                network="email"
                :title="product.title"
                :url="$websiteUrl + `${url}`"
              >
                <i class="fa-solid fa-envelope icon"></i>
              </ShareNetwork>
            </li>
            <!-- Messenger share this product -->

            <!-- Whatsapp share this product -->
            <li>
              <ShareNetwork
                network="whatsapp"
                :title="product.title"
                :url="$websiteUrl + `${url}`"
              >
                <i class="fab fa-whatsapp icon"></i>
              </ShareNetwork>
            </li>
            <!-- Whatsapp share this product -->
          </ul>
        </div>
      </div>
      
      <router-link
        :to="`/${user}`"
        class="back"
        :style="{ 'background-color': color == '' ? '#000' : color }"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </router-link>
    </div>
    <img :src="product.image" :alt="product.title" />
    <h4 class="title">{{ product.title }}</h4>
    <p class="description">{{ product.description }}</p>
    <p class="calories" v-if="product?.calories != 0">{{ product.calories }} {{ $t("calories") }}</p>
    <p class="price" :style="{ 'background-color': color == '' ? '#000' : color }">
      {{ product.price }} {{ currency }}
    </p>
  </section>
</template>

<script>
import { productDetailsData } from "@/api/details_product.js";
import { settingData } from "@/api/setting.js";

export default {
  name: "product-page",
  data() {
    return {
      product: {},
      color: "",
      found: "",
      currency: ""
    };
  },
  mounted() {
    productDetailsData().then((response) => {
      this.product = response.data.data;
      //   console.log(this.categories);
      return response;
    });
    settingData().then((response) => {
      this.currency = response.data.data.currency;
      this.color = response.data.data.color;
      this.found = response.data.status;
      if (this.found == true) {
        this.favicon = response.data.data.image;
        const favicon = document.getElementById("favicon");
        favicon.href = this.favicon;
      }
      // console.log(this.color)
      return response;
    });
  },
  created() {
    this.url = window.location.pathname;
    this.user = window.location.pathname.split("/")[1];
  },
};
</script>

<style>
</style>