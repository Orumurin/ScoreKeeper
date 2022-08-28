import {defineStore} from 'pinia'
import axios from "axios";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || null
    }),
    actions: {
        authUser(userData) {
            return axios.post('/api/login', userData)
                .then(response => {
                    this.token = response.data.token
                    this.user = response.data.user

                    localStorage.setItem('user', JSON.stringify(this.user))
                    localStorage.setItem('token', this.token)
                })
        }
    }
})
