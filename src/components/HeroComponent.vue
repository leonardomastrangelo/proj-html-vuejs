<template>
    <section id="hero" class="py-5">
        <div class="container d-flex justify-content-end align-items-center h-75">
            <div class="intro">
                <h1 class="display-3 fw-bold">
                    Start your Human <span>Revolution</span> today
                </h1>
                <p>
                    {{ paragraph }}
                </p>
            </div>
        </div>

        <TimerComponent :initialTime="70 * 24 * 60 * 60" />
    </section>
</template>

<script>
import TimerComponent from './TimerComponent.vue'
export default {
    name: 'HeroComponent',
    components: {
        TimerComponent
    },
    data() {
        return {
            paragraph: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart."
        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
@use '../assets/css/partials/variables.scss' as *;

#hero {
    height: 84.6vh;
    width: 100%;
    background-image: url('/images/slide-1.jpg');
    background-size: cover;
}

h1 span {
    color: $brand_primary;
}

.container p {
    font-size: 1.2em;
    padding: 20px 0;
}

.intro {
    width: 100%;
}

@media screen and (min-width: 992px) {
    .intro {
        width: 50%;
    }
}
</style>