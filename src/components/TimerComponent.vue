<template>
    <div class="container rounded-3 mt-5">
        <div class="row">
            <div class="col-6">
                <h2>
                    <span>
                        Limited Sale:
                    </span>
                    All Courses with {{ discount }}% off
                </h2>
                <div class="position-relative">
                    <input type="text" class="form-control p-3 rounded-pill" placeholder="Enter your E-mail">
                    <button class="my-btn rounded-pill">
                        subscribe
                    </button>
                </div>
            </div>
            <div class="col-6">
                <div class="row h-100 align-items-center text-center">
                    <div class="col-3">
                        <span>{{ days }}</span>
                        <h4>Days</h4>
                    </div>
                    <div class="col-3">
                        <span>{{ hours }}</span>
                        <h4>Hours</h4>
                    </div>
                    <div class="col-3">
                        <span>{{ minutes }}</span>
                        <h4>Minutes</h4>
                    </div>
                    <div class="col-3">
                        <span>{{ seconds }}</span>
                        <h4>Seconds</h4>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        initialTime: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            discount: 55,
            countdownTime: this.initialTime,
            countdownInterval: null,

        }
    },
    computed: {
        days() {
            return Math.floor(this.countdownTime / (24 * 60 * 60));
        },
        hours() {
            return Math.floor((this.countdownTime % (24 * 60 * 60)) / 3600);
        },
        minutes() {
            return Math.floor((this.countdownTime % 3600) / 60);
        },
        seconds() {
            return this.countdownTime % 60;
        },
    },
    methods: {
        startCountdown() {
            this.countdownInterval = setInterval(() => {
                if (this.countdownTime > 0) {
                    this.countdownTime--;
                } else {
                    clearInterval(this.countdownInterval);
                }
            }, 1000);
        },
    },
    mounted() {
        this.startCountdown();
    },
    beforeDestroy() {
        clearInterval(this.countdownInterval);
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/css/partials/variables' as *;

h2 {
    font-weight: 600;
    padding-bottom: 25px;

    span {
        color: white;
    }
}

.container {
    background-color: $brand_primary;
    padding: 60px;

    .col-3 {
        font-size: 4em;
        color: $brand_light;
        font-weight: 600;

        h4 {
            color: $brand_dark;
            font-weight: 600;
            font-size: 0.3em;
        }
    }
}

.my-btn {
    border: 0;
    background-color: $brand_secondary;
    height: 100%;
    padding: 0 30px;
    position: absolute;
    right: 0;
    top: 0;
    text-transform: uppercase;
    color: $brand_light;
    font-weight: 600;
}
</style>