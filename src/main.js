import Vue from "vue";

import AppLayout from "./layout/index.vue";
import router from "./router";
import store from "./store";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { Vuelidate } from "vuelidate";

import "./mixins";
import "./plugins";
import "./thirdParty";

import "./scss/style.scss";
import "./assets/fonts/bebasneue.css";

import { Cloudinary } from "cloudinary-vue";
import cloudinaryCore from "cloudinary-core";

Vue.use(Antd);
Vue.use(Cloudinary, {
  configuration: { cloudName: "detorxu0l" },
  components: ["CldImage", "CldTransformation"],
});
Vue.prototype.$cloudinaryCore = new cloudinaryCore.Cloudinary({
  cloud_name: "detorxu0l",
});
Vue.config.productionTip = false

const commitWindowWidth = () =>
  store.commit("dom/SET_WINDOW_WIDTH", window.innerWidth);

new Vue({
  name: "Root",
  router,
  store,
  Vuelidate,
  mounted() {
    commitWindowWidth();
    window.addEventListener("resize", commitWindowWidth);
  },

  beforeDestroy() {
    window.removeEventListener("resize", commitWindowWidth);
  },
  render: (h) => h(AppLayout),
}).$mount("#app");
