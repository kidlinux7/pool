import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';



createApp(App).use(router).use(store).use(VueToast,{position:'bottom-right'}).mount("#app");

