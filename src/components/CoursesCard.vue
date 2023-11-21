<template>
    <div class="card my-3">
        <div class="position-relative">
            <img class="w-100" :src="image" :alt="title">
            <span class="special" v-if="special">special</span>
            <div class="overlay">
                <span> ${{ price }}</span>
            </div>
        </div>
        <div class="text-center py-5 px-5">
            <h5 class="pb-2">{{ title }}</h5>
            <span class="type"> {{ type }} </span>
        </div>
        <ul class="d-flex justify-content-between mx-3 py-3 px-2">
            <li>
                <i class="fa-solid fa-signal"></i>
                <span>{{ level }}</span>
            </li>
            <li>
                <i class="fa-solid fa-list"></i>
                <span>
                    {{ lectures }}
                    lectures
                </span>
            </li>
            <li>
                <i class="fa-regular fa-clock"></i>
                <span>
                    {{ time }}
                    hours
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: " CoursesCard",
    props: {
        image: String,
        title: String,
        type: String,
        level: String,
        lectures: Number,
        time: Number,
        special: Boolean,
        price: Number
    }
} </script>

<style lang="scss" scoped>
@use '../assets/css/partials/variables.scss' as *;

.card {
    background-color: $brand_light;
}

.special {
    position: absolute;
    right: 8px;
    top: 8px;
    text-transform: uppercase;
    border-radius: 2px;
    padding: 5px;
    color: white;
    font-size: 0.8em;
    font-weight: 600;
    background-color: $brand_primary;
}

ul {
    border-top: 1px solid $brand_tertiary;
}

.type {
    color: $brand_tertiary;
}

li span {
    color: rgb(82, 79, 79);
}

i {
    color: $brand_primary;
    padding: 0 5px;
}

h5 {
    font-weight: 600;
}

.overlay {
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.708);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    color: white;
    font-weight: 700;
    transition: all 0.4s ease-in-out;
}

.card:hover .overlay {
    opacity: 1;
}
</style>
