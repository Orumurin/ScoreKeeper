<template>
    <div class="flex flex-col items-center">
        <RouterLink 
            to="/profile" 
            class="flex flex-col text-center items-center justify-center"
        >
            <img
                class="w-12"
                src="@/assets/images/icons/person.svg"
                alt="person"
            />
            <span class="text-2xl text-gray-700 pt-4 pb-1">
                {{ userState.user.name }}
            </span>
        </RouterLink>
        <div class="h-px w-24 bg-gray-500"></div>
    </div>
</template>

<script setup>
    import {useUserStore} from "@/stores/UserStore";

    const userState = useUserStore();
</script>
