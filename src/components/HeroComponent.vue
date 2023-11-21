<template>
    <section id="hero" class="py-5">
        <div class="container d-flex justify-content-end align-items-center h-75">
            <div class="w-50">
                <h1>
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
    height: 85vh;
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
</style>