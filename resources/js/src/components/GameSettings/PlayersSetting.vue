<template>
    <div>
        <div class="m-2">
            <span class="">Players:</span>
            <select @change="updateInput" class="ml-2">
                <option
                    v-for="num in (Array(15).keys())"
                    :key="num++"
                    :selected="num === modelValue"
                    :value="num"
                >
                    {{ num++ }}
                </option>
            </select>
        </div>
        <div>
            <div class="flex flex-wrap justify-around xl:justify-center items-center mt-4">
                <div
                    class="border-indigo-700 border-2 m-1.5 flex items-center p-1 rounded-2xl"
                    v-for="player in gameState.getPlayers"
                    :key="player.id"
                >
                    <img
                        class="w-8 xl:w-12 mr-2"
                        src="@/assets/images/icons/person.svg"
                        alt="person"
                    />
                    <input
                        class="border-b-2 border-b-black ml-2 w-1/2 xl:w-40"
                        placeholder="Name"
                        v-model="player.name"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useGameStore} from "../../stores/GameStore";

defineProps({
    modelValue: Number,
})

const emit = defineEmits(['update:modelValue']);

const gameState = useGameStore();
const updateInput = event => {
    const currentCount = +event.target.value

    if (gameState.settings.countOfPlayers < currentCount) {
        gameState.addPlayer(currentCount);
    } else {
        gameState.removePlayer(currentCount);
    }

    emit('update:modelValue', currentCount)
}
</script>

<style scoped>
</style>
