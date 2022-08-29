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
            localStorage.setItem('auth', JSON.stringify({
                token: this.token,
                name: this.name
            }))
        },
        logout() {
            this.isAuthentication = false
            this.token = ''
            this.name = ''
            localStorage.removeItem('auth')   
        },
        start() {
            if(localStorage.getItem('auth')) {
                const data = JSON.parse(localStorage.getItem('auth') as string)
                this.token = data.token
                this.name = data.name
                this.isAuthentication = true
            }
        }

    }
})
