<template>
    <div class="container" id="students-section">
        <h2 class="text-center display-4 fw-bold mb-5">What Students Say</h2>
        <div @mouseover="blockInterval" @mouseleave="startInterval">
            <div class="text-center py-3 position-relative w-50 m-auto">
                <img v-for=" (student, index) in store.students" :src="student.image" :alt="student.title"
                    class="px-2 rounded-circle" :class="{ 'active': activeStudent === index }" :key="index"
                    @click="setActive(index)">
                <button class="left" @click="goLeft">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
                <button class="right" @click="goRight">
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <div class="text-center py-3">
                <h3 class="fw-bold">
                    {{ store.students[activeStudent].title }}
                </h3>
                <div>
                    <i v-for="n in 5" class="fa-solid fa-star"></i>
                </div>
                <p class="w-50 m-auto py-4">
                    {{ store.students[activeStudent].description }}
                </p>
            </div>
        </div>

    </div>
</template>

<script>
import { store } from '../assets/data/store';
export default {
    name: "StudentsSection",
    data() {
        return {
            store,
            activeStudent: 0,
            swiper: ""
        }
    },
    methods: {
        setActive(index) {
            return this.activeStudent = index
        },
        startInterval() {
            this.swiper = setInterval(() => {
                if (this.activeStudent >= 0 && this.activeStudent < 2) {
                    this.activeStudent++
                } else {
                    this.activeStudent = 0
                }
            }, 5000)
        },
        blockInterval() {
            clearInterval(this.swiper)
        },
        goRight() {
            if (this.activeStudent < 2) {
                this.activeStudent++
            } else {
                this.activeStudent = 0
            }
        },
        goLeft() {
            if (this.activeStudent > 0) {
                this.activeStudent--
            } else {
                this.activeStudent = 2
            }
        }
    },
    mounted() {
        this.startInterval()
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/css/partials/variables.scss' as *;

#students-section {
    padding: 100px 0;

    i {
        color: $brand_primary;
    }

    p {
        line-height: 2.5em;
        color: $brand_secondary;
        height: 210px;
    }

    .active {
        transition: all 0.2s ease-in-out;
        transform: scale(1.2);
    }

    button {
        background-color: white;
        border: 0px;
        position: absolute;

        i {
            color: $brand_secondary;
            font-size: 2em;
        }
    }

    .left {
        left: 0;
        top: 50%;
    }

    .right {
        right: 0;
        top: 50%;
    }

}
</style>