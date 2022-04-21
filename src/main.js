import { createApp } from "vue";
import PrimeVue from "primevue/config";
import VueRouter from "vue-router";
import store from "./store";
import router from "./router";
import ToastService from "primevue/toastservice";

import App from "./App.vue";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.mount("#app");
