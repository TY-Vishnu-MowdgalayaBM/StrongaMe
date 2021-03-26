<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
});
</script>
<style>
:root {
  /* font---style */
  --font-medium: "Poppins Medium";
  --font-regular: "Poppins Regular";
  --font-bold: "Poppins Bold";
  --font-bolder: "Poppins Bolder";
}
</style>