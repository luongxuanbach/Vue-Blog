import axios from "axios";
import { useAuthStore } from "../stores/authStore";

export function useAuth() {
    const authStore = useAuthStore();

    const login = async (email, password) => {
        try {
            const res = await axios.post('/api/login', { email, password });
            authStore.setUser(res.data.user, res.data.token);
            return true
        } catch (error) {
            console.error("Login error:", error);
            return false
        }
    }

    const register = async (name, email, password) => {
        try {
            const res = await axios.post('/api/auth/register', { name, email, password });
            authStore.setUser(res.data.user, res.data.token);
            return true
        } catch (error) {
            console.error("Registration error:", error);
            return false
        }
    }

    const logout = () => {
        authStore.clearAuth();
    }

    return {
        login,
        register,
        logout
    }
}
