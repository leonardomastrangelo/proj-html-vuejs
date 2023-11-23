<template>
    <div id="settings" class="d-flex">
        <button class="btn btn-success text-uppercase">
            back-end demo
        </button>
        <div class="my-dropdown px-2">
            <button class="bg-dark text-light border-0 px-3 py-2" type="button" @click="() => isActive = !isActive">
                <i class="fa-solid fa-bars"></i>
            </button>
            <ul class="my-dropdown-menu rounded-top-2" :class="(isActive) ? 'd-block' : 'd-none'">
                <li class="position-relative" v-for="link in menu">
                    <a class="dropdown-item" href="#">
                        <i class="fa-solid" :class="link.icon"></i>
                        <div class="external">
                            {{ link.link }}
                        </div>
                    </a>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "SettingsComponent",
    data() {
        return {
            menu: [
                {
                    link: "demo",
                    icon: "fa-database"
                },
                {
                    link: "buy $34",
                    icon: "fa-basket-shopping"
                },
                {
                    link: "documentation",
                    icon: "fa-book-bookmark"
                },
                {
                    link: "hire-us",
                    icon: "fa-hammer"
                },
                {
                    link: "click to show mobile app",
                    icon: "fa-mobile-screen"
                },

            ],
            isActive: false
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    font-size: 1.2em;
}

#settings {
    position: fixed;
    bottom: 20px;
    right: 15px;
    font-size: 0.8em;
    z-index: 999;

    .fa-solid {
        font-size: 1.8em;
    }
}

.external {
    position: absolute;
    right: 139%;
    top: 0;
    background-color: rgb(36, 35, 35);
    color: white;
    padding: 7px 40px;
    text-transform: uppercase;
    font-weight: 600;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.my-dropdown-menu {
    position: absolute;
    bottom: 100%;
    right: 4%;
    background-color: white;
    padding: 0 15px;

    li {
        padding: 10px 0;
        text-align: center;
    }
}

.dropdown-item:hover .external {
    opacity: 1;
}

.dropdown-item {
    transition: all 0.2s ease-in-out;
}

.dropdown-item:hover {
    color: rgb(71, 192, 27);
    transform: scale(1.2);
}
</style>