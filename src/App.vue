<template>
  <HeaderMS />
</template>

<script>
import { store } from './assets/data/store.js';
import HeaderMS from './components/HeaderMS.vue'
export default {
  components: {
    HeaderMS,
  },
  data() {
    return {
      store,
    }
  }

}
</script>

<style lang="scss" scoped></style>