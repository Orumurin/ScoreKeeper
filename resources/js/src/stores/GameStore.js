import {defineStore} from 'pinia'

export const useGameStore = defineStore('game', {
    state: () => ({
        settings: {
            name: '',
            rounds: 1,
            countOfPlayers: 1,
            players: [
                {
                    id: Date.now(),
                    name: '',
                    points: 0,
                }
            ],
        }
    }),
    getters: {
        getPlayers: state => state.settings.players
    },
    actions: {
        addPlayer(currentCount) {
            const countOfNewPlayers = currentCount - this.settings.countOfPlayers;

            for (let i = 0; i < countOfNewPlayers; i++) {
                this.settings.players.push({
                    id: Date.now(),
                    name: '',
                    points: 0,
                })
            }
        },
        removePlayer(currentCount) {
            this.settings.countOfPlayers = currentCount;
            this.settings.players.length = currentCount;
        }
    }
})
