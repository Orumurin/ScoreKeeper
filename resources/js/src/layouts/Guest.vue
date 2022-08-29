<template>
    <div class="main flex">
        <!--Start Logo-->
        <div class="md:w-1/2"></div>
        <!--End Logo-->
        <div class="w-full md:w-1/2 flex items-center justify-center text-center">
            <div class="w-96 bg-indigo-400/40 rounded-2xl py-8 px-4 m-4">
                <nav class="flex justify-center items-center">
                    <ImgLink path="login"/>
                    <ImgLink path="register"/>
                    <ImgLink path="reset"/>
                </nav>
                <div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import ImgLink from "@/components/Navigations/ImgLink.vue";
</script>

<style scoped>
    .main {
        width: 100vw;
        height: 100vh;
        background: conic-gradient(from 98.68deg at 50% 50%, rgba(27, 149, 188, 0.21) 0deg, #6417E1 18.28deg, rgba(68, 77, 209, 0.662513) 186.95deg, rgba(27, 149, 188, 0.21) 360deg, rgba(27, 149, 188, 0.21) 360deg);
    }
</style>
