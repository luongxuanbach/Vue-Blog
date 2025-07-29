<template>
    <v-card class="pa-8" max-width="400" elevation="10" rounded="lg">
        <v-card-text class="text-center">
            <v-img :src=logoUrl width="100" class="mb-4 mx-auto"></v-img>
            <h2 class="font-weight-bold mb-6">Log into your account</h2>

            <v-form @submit.prevent="handleLogin">
                <v-text-field v-model="email" label="Email" prepend-inner-icon="mdi-email" variant="outlined"
                    color="primary" density="comfortable" class="mb-4" required></v-text-field>

                <v-text-field v-model="password" label="Password" prepend-inner-icon="mdi-lock" type="password"
                    variant="outlined" color="primary" density="comfortable" class="mb-2" required></v-text-field>

                <div class="d-flex justify-space-between align-center mb-4">
                    <v-checkbox v-model="rememberMe" label="Remember me" hide-details density="compact"></v-checkbox>
                    <v-btn variant="text" size="small" @click="goToForgotPassword" class="text-blue">
                        Forgot password?
                    </v-btn>
                </div>

                <v-btn type="submit" block color="primary" class="text-white font-weight-bold" size="large" rounded="lg">
                    Log In
                </v-btn>
            </v-form>

            <div class="mt-6 text-body-2">
                Don’t have an account?
                <v-btn variant="text" size="small" class="text-blue" @click="goToSignup">
                    Sign up
                </v-btn>
            </div>
        </v-card-text>
    </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logoUrl from '@/assets/logo.png'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)

const router = useRouter()

const handleLogin = () => {
    // Xử lý logic đăng nhập ở đây
    console.log({ email: email.value, password: password.value, rememberMe: rememberMe.value })
    // Giả sử đăng nhập thành công → điều hướng
    router.push('/dashboard')
}

const goToSignup = () => {
    router.push('/signup')
}

const goToForgotPassword = () => {
    router.push('/forgot-password')
}
</script>

<style scoped>
.text-blue {
    color: #1976d2;
}
</style>