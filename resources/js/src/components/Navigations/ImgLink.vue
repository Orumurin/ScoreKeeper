<template>
    <RouterLink :to="path" class="m-2 cursor-pointer">
        <img class="w-10" :src="imgSrc" :alt="path" />
    </RouterLink>
</template>

<script setup>
import {RouterLink} from "vue-router/dist/vue-router"
import {onMounted, ref} from "vue";
import { getImg } from "@/helpers/ImgHelper"

const props = defineProps(['path']);
const imgSrc = ref('');

onMounted(async () => {
    imgSrc.value = await getImg(`../assets/images/icons/${props.path}.svg`);
})
</script>
