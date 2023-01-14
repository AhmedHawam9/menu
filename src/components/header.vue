<template>
  <div class="header_cover">
    <img :src="setting.cover" class="header_img" :alt="setting.id" />
    <!-- Start lang canvas -->
    <button
      class="btn lang"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasBottom"
      aria-controls="offcanvasBottom"
      :style="{color: setting.color}"
    >
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
    <div
      class="offcanvas offcanvas-bottom"
      tabindex="-1"
      id="offcanvasBottom"
      aria-labelledby="offcanvasBottomLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">
          {{$t("choose_language")}}
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
            <flag :iso="entry.flag" v-bind:squared="false" />
            {{ entry.title }}
          </li>
        </ul>
      </div>
    </div>
    <!-- End lang canvas -->
    <img :src="setting.image" :alt="user" class="logo_img" />
  </div>
  <div class="header_data">
    <h4 class="name" style="color">{{ user }}</h4>
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
    this.user = window.location.pathname.split("/")[1];
    const html = document.documentElement; // returns the html tag
    html.setAttribute("lang", this.$i18n.locale);
  },
}
</script>