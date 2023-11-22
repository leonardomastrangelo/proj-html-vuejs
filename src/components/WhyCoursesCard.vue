<template>
    <div class="d-flex my-card">
        <div class="px-5 py-4">
            <i class="fa-solid" :class="icon"></i>
        </div>
        <div class="p-4 me-5">
            <h3>
                {{ title }}
            </h3>
            <p>
                {{ paragraph }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "WhyCoursesCard",
    props: {
        icon: String,
        title: String,
        paragraph: String
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/css/partials/variables.scss' as *;

i {
    font-size: 3.8em;
    color: $brand_primary;
}

h3 {
    font-family: 'Roboto Slab';
    font-weight: 600;
    font-size: 1.7em;
    margin-bottom: 20px;
}

p {
    color: $brand_tertiary;
    line-height: 2em;
}

.my-card {
    border-left: 5px solid $brand_primary;
    margin: 40px 0;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.141);
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: $brand_primary;
    }

    &:hover i {
        color: $brand_light;
    }

    &:hover p {
        color: rgba(0, 0, 0, 0.772);
    }
}
</style>