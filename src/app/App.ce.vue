<template src="./App.template.html"></template>
<style lang="sass" src="./App.style.sass"></style>
<script lang="ts">
import { defineComponent } from "vue";
//import { defineCustomElement } from "vue";
import authenticateService from "@/services/authentication/authenticate.service";
import widgetExample from "../components/pages/widget/widgetExample.vue";

//const widgetexample = defineCustomElement(widgetExample);
//customElements.define("widget-example", widgetexample);

export default defineComponent({
  name: "App",
  props: {
    msg: String,
  },
  components: {
    widgetExample,
  },
  mounted() {
    authenticateService.prueba().subscribe((res) => {
      console.log("poke api", res);
    });
    //authenticateService.refreshToken()
    this.getToken();
  },
  data() {
    return {
      API_PAYMENTS: process.env.VUE_APP_TITLE,
      TestObject: { one: "buenos dias", two: "buenas tardes" },
    };
  },
  methods: {
    getToken() {
      authenticateService.refreshToken().subscribe((res) => {
        localStorage.setItem("luegopago_data_token", res.data.data.token);
        console.log("first token => ", res.data.data.token);
      });
    },
  },
});
</script>
