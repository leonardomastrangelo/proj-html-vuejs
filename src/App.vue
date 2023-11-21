<template>
  <HeaderMS />
  <HeroComponent />
  <FounderSection />
</template>

<script>
import { store } from './assets/data/store.js';
import HeaderMS from './components/HeaderMS.vue'
import HeroComponent from './components/HeroComponent.vue';
import FounderSection from './components/FounderSection.vue';
export default {
  components: {
    HeaderMS,
    HeroComponent,
    FounderSection
  },
  data() {
    return {
      store,
    }
  }

}
</script>

<style lang="scss" scoped></style>