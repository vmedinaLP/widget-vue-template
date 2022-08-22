/*import { createApp } from "vue";
import App from "./app/App.vue";

createApp(App).mount("#app");
*/

import { defineCustomElement } from "vue";
import App from "./app/App.ce.vue";

const app = defineCustomElement(App);

customElements.define("widget-vue", app);
