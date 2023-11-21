<template>
  <HeaderMS />
  <HeroComponent />
</template>

<script>
import { store } from './assets/data/store.js';
import HeaderMS from './components/HeaderMS.vue'
import HeroComponent from './components/HeroComponent.vue';
export default {
  components: {
    HeaderMS,
    HeroComponent
  },
  data() {
    return {
      store,
    }
  }

}
</script>

<style lang="scss" scoped></style>