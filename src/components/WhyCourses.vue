<template>
    <section id="why-courses">
        <div class="container">
            <h2 class="display-4 text-center mb-5">Why my Courses?</h2>
            <div class="row">
                <div class="col-12 col-xl-6" v-for="(card, index) in store.whyCourses">
                    <WhyCoursesCard :icon="card.icon" :title="card.title" :paragraph="card.paragraph" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../assets/data/store';
import WhyCoursesCard from './WhyCoursesCard.vue';
export default {
    name: "WhyCourses",
    components: {
        WhyCoursesCard,
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
#why-courses {
    padding: 100px 0;

    h2 {
        font-weight: 700;
    }
}
</style>