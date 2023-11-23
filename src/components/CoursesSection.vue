<template>
    <section id="courses-section">
        <div class="container">
            <h2>
                {{ title }}
            </h2>
            <div class="row justify-content-center">
                <div class="col-12 col-lg-5 col-xl-4" v-for="course in store.courses ">
                    <CoursesCard :image="course.image" :title="course.title" :type="course.type" :level="course.level"
                        :lectures="course.lectures" :time="course.hours" :special="course.special" :price="course.price" />
                </div>
            </div>
            <div class="text-center py-5">
                <button class="rounded-pill">
                    Load More
                </button>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../assets/data/store';
import CoursesCard from './CoursesCard.vue';
export default {
    name: "CoursesSection",
    components: {
        CoursesCard
    },
    data() {
        return {
            store,
            title: "New Courses"
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/css/partials/variables.scss' as *;

#courses-section {
    background-color: $brand_less_light;
    padding: 100px 0;

    h2 {
        font-size: 3.3em;
        font-weight: 700;
        text-align: center;
        margin-bottom: 50px;
    }

    button {
        border: 0;
        background-color: $brand_primary;
        padding: 12px 25px;
        color: $brand_light;
        font-weight: 700;
    }
}
</style>