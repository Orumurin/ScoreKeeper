<template>
    <Main>
        <div class="flex flex-col justify-between h-full w-full">
            <div>
                <section class="border-b-2 border-b-gray-400">
                    <h1 class="text-2xl pl-4">Game Settings</h1>
                </section>
                <section class="my-4 text-md xl:text-lg">
                    <NameSetting v-model="gameStore.settings.name"/>
                    <RoundsSetting v-model="gameStore.settings.rounds"/>
                    <PlayersSetting v-model="gameStore.settings.countOfPlayers"/>
                </section>
            </div>
            <section class="text-center">
                <button
                    class="w-8/12 bg-indigo-400 py-2 rounded-2xl"
                    @click="playGame"
                >
                    Start
                </button>
            </section>
            <ErrorToast
                title="Players name is empty!"
                modalId="players-validate"
            />
        </div>
    </Main>
</template>

<script setup>
    import Main from "@/layouts/Main.vue";
    import NameSetting from "../../components/GameSettings/NameSetting.vue";
    import RoundsSetting from "../../components/GameSettings/RoundsSetting.vue";
    import PlayersSetting from "../../components/GameSettings/PlayersSetting.vue";
    import {useGameStore} from "../../stores/GameStore";
    import {minLength, required, maxLength} from "@vuelidate/validators";
    import {useVuelidate} from "@vuelidate/core";
    import {reactive, toRefs} from "vue";
    import {pushToast} from "../../helpers/ToastHelper";

    const gameStore = useGameStore();
    const settings = reactive({
        name: '',
        rounds: 1,
        players: [],
        countOfPlayers: 1,
    })
    const rules = {
        name: {
            required
        },
        rounds: {
            required,
            minLength: minLength(1),
            maxLength: maxLength(15)
        },
    };
    const validate = useVuelidate(rules, toRefs(settings));

    const playGame = () => {
        validate.value.$validate();

        if(playersValidate()) {
            // go to the game!
        }else {
            pushToast('players-validate');
        }
    }

    const playersValidate = () => {
        const players = gameStore.getPlayers;

        return !players.filter(player => {
            return player.name === ''
        }).length
    }
</script>
