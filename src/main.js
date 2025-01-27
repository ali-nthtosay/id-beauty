import { createApp } from "vue";
import "../node_modules/flowbite-vue/dist/index.css";
// Vuetify
import "vuetify/styles";
import router from "./router";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "./index.css";
// Components
import App from "./App.vue";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount("#app");
