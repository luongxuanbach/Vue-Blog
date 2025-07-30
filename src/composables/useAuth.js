import { ref, computed, watch } from 'vue'

const user = ref(localStorage.getItem('auth_token') ? { email: 'admin@example.com' } : null)
const token = ref(localStorage.getItem('auth_token') || null)

export function useAuth() {
    const login = async ({ email, password }) => {
        // Giả lập API login
        if (email === 'admin@bcommy.com' && password === '123456') {
            const fakeUser = { name: 'Admin', email }
            localStorage.setItem('auth_token', 'fake-token')
            token.value = 'fake-token'
            user.value = fakeUser
            return true
        } else {
            throw new Error('Sai tài khoản hoặc mật khẩu')
        }
    }

    const logout = () => {
        localStorage.removeItem('auth_token')
        token.value = null
        user.value = null
    }

    const isAuthenticated = ref(!!user.value)

    // Theo dõi user để cập nhật isAuthenticated reactive
    watch(user, () => {
        isAuthenticated.value = !!user.value
    })

    return {
        user,
        login,
        logout,
        isAuthenticated
    }
}