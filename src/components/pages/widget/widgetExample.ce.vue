<template src="./widgetExample.template.html"></template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "widgetExample",
  props: {
    send: String,
  },
});
</script>
<style lang="sass" src="./widgetExample.style.sass"></style>
