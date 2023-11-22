<template>
  <HeaderMS />
  <HeroComponent />
  <FounderSection />
  <CoursesSection />
  <CallToAction />
  <WhyCourses />
</template>

<script>
import { store } from './assets/data/store.js';
import HeaderMS from './components/HeaderMS.vue'
import HeroComponent from './components/HeroComponent.vue';
import FounderSection from './components/FounderSection.vue';
import CoursesSection from './components/CoursesSection.vue'
import CallToAction from './components/CallToAction.vue';
import WhyCourses from './components/WhyCourses.vue';

export default {
  components: {
    HeaderMS,
    HeroComponent,
    FounderSection,
    CoursesSection,
    CallToAction,
    WhyCourses
  },
  data() {
    return {
      store,
    }
  }

}
</script>

<style lang="scss" scoped></style>