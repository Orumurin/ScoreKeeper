<template>
    <Main>
        <div class="flex flex-col justify-between h-full w-full">
            <div>
                <section class="border-b-2 border-b-gray-400">
                    <h1 class="text-2xl pl-4">Game Settings</h1>
                </section>
                <section class="my-4 text-md xl:text-lg">
                    <NameSetting />
                    <RoundsSetting />
                    <PlayersSetting />
                </section>
            </div>
            <section class="text-center">
                <button class="w-8/12 bg-indigo-400 py-2 rounded-2xl">Start</button>
            </section>
        </div>
    </Main>
</template>

<script setup>
import Main from "@/layouts/Main.vue";
import NameSetting from "../../components/GameSettings/NameSetting.vue";
import RoundsSetting from "../../components/GameSettings/RoundsSetting.vue";
import PlayersSetting from "../../components/GameSettings/PlayersSetting.vue";
</script>

<style scoped>

</style>
