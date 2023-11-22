<template>
    <div id="info-component" class="parallax-container" @scroll="handleScroll" @mouseover="increaseNums">
        <ul class="content d-flex">
            <li v-for="info in store.infos" class="d-flex px-4">
                <div class="d-flex align-items-center px-4">
                    <i class="fa-solid" :class="info.icon"></i>
                </div>
                <div>
                    <h2>
                        {{ info.number }}
                    </h2>
                    <h3>
                        {{ info.title }}
                    </h3>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { store } from '../assets/data/store.js';
export default {
    name: "InfoComponent",
    data() {
        return {
            store,
            max: 50
        }
    },
    methods: {
        handleScroll(event) {
            const scrollTop = event.target.scrollTop;
            this.$refs.parallaxContainer.style.backgroundPositionY = `${-scrollTop}px`;
        },
        increaseNums() {
            store.infos.forEach((info) => {
                if (info.number < info.max) {
                    const intervalId = setInterval(() => {
                        if (info.number < info.max) {
                            info.number++;
                        } else {
                            clearInterval(intervalId);
                        }
                    }, 10);
                }
            });
        }

    },

}
</script>

<style lang="scss" scoped>
@use '../assets/css/partials/variables.scss' as *;

.parallax-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    overflow: auto;
    background-image: url('/images/counter-1919x1101.jpg');
    background-size: cover;
    background-attachment: fixed;

    i {
        font-size: 3.5em;
        color: $brand_light;
    }

    h2 {
        font-size: 40px;
        color: $brand_primary;
        font-weight: 700;
    }

    h3 {
        font-size: 18px;
        font-weight: 800;
        color: $brand_light;
    }
}
</style>