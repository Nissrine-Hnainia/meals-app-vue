<template>
    <the-header> </the-header>
    <div class="recipes-container">
        <router-view> </router-view>
    </div>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
    name: "App",
    components: {
        TheHeader,
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@700&family=Lato:wght@400;700&family=Oswald&family=Raleway:wght@300&display=swap");
* {
    font-family: "Barlow", sans-serif;
}
.recipes-container {
    margin: 4%;
}
</style>
