<template>
    <v-card class="pa-8" max-width="500" elevation="10" rounded="lg">
        <v-card-text class="text-center">
            <v-img :src=logoUrl width="100" class="mb-4 mx-auto"></v-img>
            <h2 class="font-weight-bold mb-6">Create your account</h2>

            <v-form @submit.prevent="handleSignup">
                <v-text-field v-model="name" label="Full Name" prepend-inner-icon="mdi-account" variant="outlined"
                    color="primary" class="mb-4" required></v-text-field>

                <v-text-field v-model="email" label="Email" prepend-inner-icon="mdi-email" variant="outlined"
                    color="primary" class="mb-4" required></v-text-field>

                <v-text-field v-model="password" label="Password" prepend-inner-icon="mdi-lock" type="password"
                    variant="outlined" color="primary" class="mb-2" required></v-text-field>

                <v-btn type="submit" block color="primary" class="text-white font-weight-bold" size="large" rounded="lg">
                    Sign Up
                </v-btn>
            </v-form>

            <div class="mt-6 text-body-2">
                Already have an account?
                <v-btn variant="text" size="small" class="text-blue" @click="goToLogin">
                    Log in
                </v-btn>
            </div>
        </v-card-text>
    </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logoUrl from '@/assets/logo.png'

const name = ref('')
const email = ref('')
const password = ref('')

const router = useRouter()

const handleSignup = () => {
    console.log({ name: name.value, email: email.value, password: password.value })
    // Giả sử đăng ký thành công
    router.push('/dashboard')
}

const goToLogin = () => {
    router.push('/login')
}
</script>

<style scoped>
.text-blue {
    color: #1976d2;
}
</style>
