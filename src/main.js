import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router/router.js";
import axios from "axios";
import FlagIcon from "vue-flag-icon";
import VueSocialSharing from 'vue-social-sharing';

function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}
let lang = "en";
if (localStorage.getItem("lang")) {
  lang = localStorage.getItem("lang");
}

const i18n = createI18n({
  locale: lang, // set locale
  allowComposition: true, // you need to specify that!
  fallbackLocale: lang, // set fallback locale
  messages: loadLocaleMessages(), // set locale messages
});

const app = createApp(App);
app.use(VueSocialSharing);
app.use(FlagIcon);
app.use(i18n);
app.use(router);
const newLocal = lang;
axios.defaults.headers.common["Accept-Language"] = newLocal;
app.config.globalProperties.$websiteUrl = "https://elmenu.crazyideaco.com";
axios.defaults.baseURL = "https://elmenu-portal.crazyideaco.com/api";
app.config.globalProperties.axios = axios;

app.mount("#app");
