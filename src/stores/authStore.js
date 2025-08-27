import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null,
        loading: false,
        error: null,
        isAuthenticated: false,
        user: null
    }),
    actions: {
        async login({ email, password }) {
            this.loading = true
            this.error = null
            try {
                const res = await axios.post('http://localhost:5000/api/auth/login', { email, password })
                this.user = res.data.user
                this.token = res.data.token
                localStorage.setItem('token', this.token)
            } catch (error) {
                this.error = error.response?.data?.message || 'Login failed'
                throw error
            } finally {
                this.loading = false
            }
        },
        logout() {
            this.user = null
            this.token = null
            localStorage.removeItem('token')
        }
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
})