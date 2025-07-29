<template>
    <v-card class="pa-8" max-width="400" elevation="10" rounded="lg">
      <v-card-text class="text-center">
        <v-img
          :src=logoUrl
          width="100"
          class="mb-4 mx-auto"
        ></v-img>
        <h2 class="font-weight-bold mb-4">Forgot your password?</h2>
        <p class="mb-6 text-body-2">
          Enter your email and we’ll send you a link to reset your password.
        </p>

        <v-form @submit.prevent="handleReset">
          <v-text-field
            v-model="email"
            label="Email"
            prepend-inner-icon="mdi-email"
            variant="outlined"
            color="primary"
            class="mb-4"
            required
          ></v-text-field>

          <v-btn
            type="submit"
            block
            color="primary"
            class="text-white font-weight-bold"
            size="large"
            rounded="lg"
          >
            Send Reset Link
          </v-btn>
        </v-form>

        <div class="mt-6 text-body-2">
          Remember your password?
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

const email = ref('')
const router = useRouter()

const handleReset = () => {
  console.log('Send reset link to:', email.value)
  // Giả sử gửi thành công
  alert('Reset link sent!')
  router.push('/login')
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
