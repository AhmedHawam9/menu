<template>
  <div class="App">
    <router-view></router-view>
  </div>
</template>

<script>
require("../src/assets/scss/style.min.css");
require("../src/assets/scss/style_ar.min.css");

export default {
  name: 'App',
  created() {
    const html = document.documentElement; // returns the html tag
    html.setAttribute("lang", this.$i18n.locale);

    document.addEventListener("contextmenu", (event) => event.preventDefault());
    document.onkeydown = function (e) {
      if (event.keyCode == 123) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
        return false;
      }
      if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
        return false;
      }
    };
  },
}
</script>