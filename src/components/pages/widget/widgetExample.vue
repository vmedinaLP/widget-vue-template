<template src="./widgetExample.template.html"></template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import templateOne from "@/components/shared/templates/templateOne.vue";
import { Saludos } from "@/models/saludo";

export default defineComponent({
  name: "widgetExample",
  props: {
    send: { type: Object as () => PropType<Saludos>, required: true },
  },
  components: {
    templateOne,
  },
});
</script>
<style lang="sass" src="./widgetExample.style.sass"></style>
