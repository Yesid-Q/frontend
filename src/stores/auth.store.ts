import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthentication: false,
        token: '',
        name: ''
    }),
    actions: {
        setAuthentication(token: string, name: string) {
            this.isAuthentication = true;
            this.token = token
            this.name = name
        }
    }
})
