import { ref, computed } from 'vue'
import axios from 'axios'

const savedUserStr = localStorage.getItem('user')
const user = ref(savedUserStr && savedUserStr !== 'undefined' ? JSON.parse(savedUserStr) : null)

const token = ref(localStorage.getItem('auth_token') || null)

export function useAuth() {
    const login = async ({ email, password }) => {
        try {
            const res = await axios.get(`http://localhost:3000/users?email=${email}&password=${password}`)

            if (res.data && res.data.length > 0) {
                const foundUser = res.data[0]

                user.value = foundUser
                token.value = 'fake-token'

                localStorage.setItem('auth_token', token.value)
                localStorage.setItem('user', JSON.stringify(foundUser))

                return true
            } else {
                throw new Error('Email hoặc mật khẩu không đúng.')
            }
        } catch (error) {
            console.error('Login error:', error)
            throw new Error('Đăng nhập thất bại.')
        }
    }

    const logout = () => {
        token.value = null
        user.value = null
        localStorage.removeItem('auth_token')
        localStorage.removeItem('user')
    }

    const isAuthenticated = computed(() => !!user.value)
    const isAdmin = computed(() => user.value?.role === 'admin')

    return {
        user,
        token,
        login,
        logout,
        isAuthenticated,
        isAdmin
    }
}
