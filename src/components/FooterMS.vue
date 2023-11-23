<template>
    <footer>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-6 col-lg-4 col-xl-3 mb-5" id="about">
                    <h4>
                        {{ store.footerLinks[0].title }}
                    </h4>
                    <ul>
                        <li v-for="link in store.footerLinks[0].subLinks">
                            {{ link }}
                        </li>
                    </ul>
                    <ul class="d-flex py-3">
                        <li v-for="social in store.footerLinks[0].icons">
                            <i class="fa-brands pe-3 fs-5" :class="social"></i>
                        </li>
                    </ul>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                    <h4>
                        {{ store.footerLinks[1].title }}
                    </h4>
                    <ul>
                        <li class="py-1" v-for="link in store.footerLinks[1].subLinks">
                            {{ link }}
                        </li>
                    </ul>
                </div>
                <div class="col-6 col-lg-4 col-xl-3" id="pages">
                    <h4>
                        {{ store.footerLinks[2].title }}
                    </h4>
                    <ul class="d-flex flex-wrap">
                        <li v-for="link in store.footerLinks[2].subLinks" class="w-50 py-2">
                            <a href="#">{{ link }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-6 col-lg-4 col-xl-3">
                    <h4>
                        {{ store.footerLinks[3].title }}
                    </h4>
                    <div class="blogs d-flex py-3" v-for="blog in store.footerLinks[3].blogs">
                        <div class="blog-img">
                            <img class="w-100" :src="blog.image" :alt="blog.title">
                        </div>
                        <div class="ps-4">
                            <h5 class="blog-title m-0">
                                {{ blog.title }}
                            </h5>
                            <span class="release pt-1">
                                <div class="line"></div>
                                {{ blog.release }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { store } from '../assets/data/store';
export default {
    name: "FooterMS",
    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/css/partials/variables.scss' as *;

footer {
    background-color: $brand_primary;
    padding: 70px 0;
}

h4 {
    text-transform: uppercase;
    font-weight: 700;
    font-family: 'Roboto Slab';
    margin-bottom: 25px;
}

h5 {
    transition: all 0.3s ease-in-out;
}

ul {
    padding-right: 20px;
}

#about i:hover {
    color: white;
}

#pages {
    ul {
        list-style: disc;
    }

    a {
        color: $brand_dark;
        text-transform: capitalize;
        transition: all 0.3s ease-in-out;
    }

    li:hover a {
        color: white;
    }
}

.blog-img {
    width: 200px;
}

.blog-title {
    font-size: 1.2em;
    font-weight: 700;
}

.release {
    font-size: 0.9em;
    color: $brand_secondary;
    display: flex;
    align-items: center;

    .line {
        width: 13px;
        height: 1px;
        background-color: $brand_secondary;
        margin-right: 5px;
    }

}

.blogs:hover h5 {
    color: white;
}
</style>