<template>
    <section id="call-to-action" @mousemove="handleMouseMove">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-5 text-center">
                    <h2>{{ title }}</h2>
                    <p>{{ paragraph }}</p>
                    <img :src="callImg" alt="buy-amazon">
                </div>
                <div class="col-12 col-lg-7" id="book">
                    <img src="/images/book.png" alt="book" ref="book" :style="bookStyle">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CallToAction",
    data() {
        return {
            title: "Get My Investing Book just for $19.50",
            paragraph:
                "Vestibulum imentum eu urna vel cursus. Aenan vehicula quam quam. vitae pellentesque urna elementum cursus.",
            callImg: "/images/amazon.png",
            mouseX: 0,
            mouseY: 0,
        };
    },
    computed: {
        bookStyle() {
            const translateX = this.mouseX / -60;
            const translateY = this.mouseY / -60;

            return {
                transform: `translate(${translateX}px, ${translateY}px)`,
            };
        },
    },
    methods: {
        handleMouseMove(event) {
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
        },
    },
};
</script>

<style lang="scss" scoped>
@use '../assets/css/partials/variables.scss' as *;

#call-to-action {
    padding-top: 120px;
    background-image: url('/images/slider_1-1917x607-1914x606.jpg');
    background-size: cover;
    overflow: hidden;

    #book {
        transform: translateY(20px);
    }
}

h2 {
    font-size: 3em;
    color: $brand_primary;
    font-weight: 700;
}

p {
    font-size: 1.6em;
    line-height: 1.9em;
    padding: 30px 30px;
    color: $brand_light;
    font-style: italic;
    font-weight: 600;
}
</style>
