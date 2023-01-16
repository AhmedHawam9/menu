<template>
  <div class="header_cover">
    <img :src="setting.cover" class="header_img" :alt="setting.id" />
    <!-- Start lang canvas -->
    <div class="d-flex justify-content-between align-items-start mt-1">
      <button
        class="btn lang"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
        :style="{ color: setting.color }"
      >
        <i class="fa-solid fa-angle-down"></i>
        <span v-if="langStorage == 'en'">
          {{ $t("english") }}
        </span>
        <span v-else-if="langStorage == 'ar'">
          {{ $t("arabic") }}
        </span>
        <span v-else>
          {{ $t("english") }}
        </span>
        <i class="fa-solid fa-earth-europe"></i>
      </button>
      <div class="share">
        <div class="dropdown">
          <a
            class="btn dropdown-toggle"
            :style="{ color: setting.color }"
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
                :title="setting.seller_title"
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
                :title="setting.seller_title"
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
                :title="setting.seller_title"
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
                :title="setting.seller_title"
                :url="$websiteUrl + `${url}`"
              >
                <i class="fab fa-whatsapp icon"></i>
              </ShareNetwork>
            </li>
            <!-- Whatsapp share this product -->
          </ul>
        </div>
      </div>
    </div>
    <div
      class="offcanvas offcanvas-bottom"
      tabindex="-1"
      id="offcanvasBottom"
      aria-labelledby="offcanvasBottomLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">
          {{ $t("choose_language") }}
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body small">
        <ul>
          <li
            class="lang-item"
            v-for="entry in languages"
            :key="entry.title"
            @click="changeLocale(entry.language)"
            :iso="entry.flag"
            v-bind:squared="false"
          >
            <span class="lang_title">
              <flag :iso="entry.flag" v-bind:squared="false" />
              {{ entry.title }}
            </span>
            <i
              class="fa-solid fa-check"
              v-if="entry.language == langStorage"
            ></i>
          </li>
        </ul>
      </div>
    </div>
    <!-- End lang canvas -->
    <img :src="setting.image" :alt="user" class="logo_img" />
  </div>
  <div class="header_data">
    <h4 class="name" style="color">{{ setting.seller_title }}</h4>
    <div class="social_media">
      <a :href="setting.facebook" target="_blank" class="link">
        <i class="fa-brands fa-facebook"></i>
      </a>
      <a :href="setting.twitter" target="_blank" class="link">
        <i class="fa-brands fa-twitter"></i>
      </a>
      <a :href="setting.whatsapp" target="_blank" class="link">
        <i class="fa-brands fa-whatsapp"></i>
      </a>
      <a :href="setting.instagram" target="_blank" class="link">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a :href="setting.google_link" target="_blank" class="link">
        <i class="fa-solid fa-location-dot"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["setting"],
  data() {
    return {
      langStorage: localStorage.getItem("lang"),
      languages: [
        { flag: "us", language: "en", title: this.$i18n.t("english") },
        { flag: "eg", language: "ar", title: this.$i18n.t("arabic") },
      ],
    };
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      const html = document.documentElement; // returns the html tag
      html.setAttribute("lang", locale);
      localStorage.setItem("lang", locale);
      location.reload();
      // console.log(locale);
    },
  },
  created() {
    this.url = window.location.pathname;
    this.user = window.location.pathname.split("/")[1];
  },
};
</script>