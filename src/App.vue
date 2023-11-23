<template>
  <div class="position-relative">
    <SettingsComponent />
    <HeaderMS />
    <HeroComponent />
    <FounderSection />
    <CoursesSection />
    <CallToAction />
    <WhyCourses />
    <InfoComponent />
    <StudentsSection />
    <FooterMS />
  </div>
</template>

<script>
import { store } from './assets/data/store.js';
import HeaderMS from './components/HeaderMS.vue'
import HeroComponent from './components/HeroComponent.vue';
import FounderSection from './components/FounderSection.vue';
import CoursesSection from './components/CoursesSection.vue'
import CallToAction from './components/CallToAction.vue';
import WhyCourses from './components/WhyCourses.vue';
import InfoComponent from './components/InfoComponent.vue';
import StudentsSection from './components/StudentsSection.vue';
import FooterMS from './components/FooterMS.vue';
import SettingsComponent from './components/SettingsComponent.vue';

export default {
  components: {
    HeaderMS,
    HeroComponent,
    FounderSection,
    CoursesSection,
    CallToAction,
    WhyCourses,
    InfoComponent,
    StudentsSection,
    FooterMS,
    SettingsComponent
  },
  data() {
    return {
      store,
    }
  }

}
</script>

<style lang="scss" scoped></style>