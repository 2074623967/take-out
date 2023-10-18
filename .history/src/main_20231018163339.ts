import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());
createApp(App).mount("#app");
