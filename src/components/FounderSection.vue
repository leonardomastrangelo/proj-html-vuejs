<template>
    <section class="container mt-5" id="founder-section">
        <div class="row justify-content-center">
            <!-- left-col -->
            <div class="col-12 col-lg-5">
                <h2>
                    {{ title }}
                </h2>
                <div class="text-center py-5">
                    <img :src="sign" alt="sign">
                </div>
            </div>
            <div class="col-12 col-lg-5">
                <p>
                    {{ paragraph }}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "FounderSection",
    data() {
        return {
            title: "Hey there, my name is John Doe. I'm the founder of the Brain Academy.",
            sign: "/images/sign.jpg",
            paragraph: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary"
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    padding-top: 230px;
    padding-bottom: 100px;

    h2 {
        font-size: 2.5em;
        font-weight: 700;
        line-height: 1.4em;
    }

    p {
        font-size: 1em;
        line-height: 2.3em;
    }
}
</style>