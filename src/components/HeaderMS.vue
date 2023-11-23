<template>
    <div class="container py-3">
        <div class="row">
            <!-- logo -->
            <div class="col-3 align-items-center justify-content-center d-none d-xl-flex">
                <img src="/images/MasterStudy-1.svg" alt="logo">
            </div>
            <div class="col-3 d-flex align-items-center justify-content-center d-xl-none">
                <img id="mini-logo" src="/images/favicon.ico" alt="logo">
            </div>
            <!-- links -->
            <div class="col-9 d-flex justify-content-end align-items-center">
                <ul class="justify-content-end align-items-center d-none d-xl-flex">
                    <!-- courses -->
                    <li :class="{ 'active': isActive('courses') }" @click="selectLink('courses')">
                        <a href="#">
                            {{ store.headerLinks.firstLink }}
                        </a>
                        <div v-if="isActive('courses')" class="active-bar"></div>
                    </li>
                    <!-- courses-formats -->
                    <li :class="{ 'active': isActive('courses-formats') }" @click="selectLink('courses-formats')"
                        id="courses-formats">
                        <a href="#">
                            {{ store.headerLinks.secondLink }}
                        </a>
                        <div v-if="isActive('courses-formats')" class="active-bar"></div>
                        <ul class="sub-nav">
                            <!-- subnav courses-formats -->
                            <li v-for="link in store.headerLinks.subLinksFormats" class="py-2">
                                <a href="#">
                                    {{ link }}
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!-- add course -->
                    <li :class="{ 'active': isActive('add-course') }" @click="selectLink('add-course')">
                        <a href="#">
                            {{ store.headerLinks.thirdLink }}
                        </a>
                        <div class="text-uppercase badge text-bg-danger">
                            new
                        </div>
                        <div v-if="isActive('add-course')" class="active-bar"></div>
                    </li>
                    <!-- pages -->
                    <li :class="{ 'active': isActive('pages') }" @click="selectLink('pages')" id="pages">
                        <a href="#">
                            {{ store.headerLinks.fourthLink }}
                        </a>
                        <ul class="sub-nav">
                            <!-- subnav pages -->
                            <li v-for="link in store.headerLinks.subLinkPages" class="py-2">
                                <a href="#">
                                    {{ link }}
                                </a>
                            </li>
                        </ul>
                        <div v-if="isActive('pages')" class="active-bar"></div>
                    </li>
                    <!-- demo -->
                    <li :class="{ 'active': isActive('demo') }" @click="selectLink('demo')" id="demo">
                        <a href="#">
                            {{ store.headerLinks.finthLink }}
                        </a>
                        <div v-if="isActive('demo')" class="active-bar"></div>
                        <ul class="sub-nav">
                            <!-- subnav demo -->
                            <li v-for="link in store.headerLinks.subLinksDemo" class="py-2">
                                <a href="#">
                                    {{ link }}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <!-- dropdown -->
                <div class="dropdown d-xl-none">
                    <button class="bg-light border-0 fs-3 dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Courses</a></li>
                        <li><a class="dropdown-item" href="#">Courses-formats</a></li>
                        <li><a class="dropdown-item" href="#">Add-Course</a></li>
                        <li><a class="dropdown-item" href="#">Pages</a></li>
                        <li><a class="dropdown-item" href="#">Demo</a></li>

                    </ul>
                </div>
                <!-- socials -->
                <ul class="justify-content-end align-items-center ps-5 d-none d-xl-flex">
                    <li v-for="social in store.headerLinks.headerSocials" class="p-2">
                        <a href="#">
                            <i :class="`fa-brands fa-${social}`"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../assets/data/store';
export default {
    name: "HeaderMS",
    data() {
        return {
            store,
            activeLink: null,
        }
    },
    methods: {
        selectLink(link) {
            this.activeLink = link;
        },
        isActive(link) {
            return this.activeLink === link;
        },
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/css/partials/variables.scss' as *;

.container {
    font-family: 'Roboto Slab';

    li {
        position: relative;
        padding: 15px 35px;

        a {
            color: $brand_dark;
            font-size: 1.2em;
            font-weight: 600;
            transition: all 0.3s ease-in-out;

            &:hover {
                color: $brand_primary;
            }
        }
    }
}

#mini-logo {
    width: 30px;
}

.badge {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.7em;
}

.active-bar {
    width: 100%;
    height: 4px;
    background-color: $brand_primary;
    position: absolute;
    bottom: 0;
    left: 0;
}

.sub-nav {
    width: 250px;
    padding: 15px 0;
    background-color: $brand_less_light;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.344);
    display: flex;
    opacity: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 93%;
    left: -10%;
    z-index: 2;
    border-top: 4px solid $brand_primary;
    transform: translateY(10px);
    transition: all 0.3s ease-in-out;

    li a {
        font-weight: 400;
        font-size: 0.94em;
    }
}


#courses-formats:hover .sub-nav {
    opacity: 1;
    transform: translateY(0px);
}

#pages:hover .sub-nav {
    opacity: 1;
    transform: translateY(0px);
}

#pages:hover .sub-nav {
    opacity: 1;
    transform: translateY(0px);
}

#demo:hover .sub-nav {
    opacity: 1;
    transform: translateY(0px);
}

.dropdown-toggle::after {
    display: none !important;
}
</style>