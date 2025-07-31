<template>
  <v-card class="pa-8" max-width="400" elevation="10" rounded="lg">
    <v-card-text class="text-center">
      <v-img :src="logoUrl" width="100" class="mb-4 mx-auto" />
      <h2 class="font-weight-bold mb-6">Đăng nhập tài khoản</h2>

      <v-form @submit.prevent="handleLogin">
        <v-text-field
          v-model="email"
          label="Email"
          prepend-inner-icon="mdi-email"
          variant="outlined"
          color="primary"
          class="mb-4"
          required
        />

        <v-text-field
          v-model="password"
          label="Mật khẩu"
          type="password"
          prepend-inner-icon="mdi-lock"
          variant="outlined"
          color="primary"
          class="mb-4"
          required
        />

        <div class="d-flex justify-space-between align-center mb-4">
          <v-checkbox
            v-model="rememberMe"
            label="Ghi nhớ tôi"
            hide-details
            density="compact"
          />
          <v-btn variant="text" size="small" class="text-blue" @click="goToForgotPassword">
            Quên mật khẩu?
          </v-btn>
        </div>

        <v-btn
          type="submit"
          block
          color="primary"
          class="text-white font-weight-bold"
          size="large"
          rounded="lg"
          :loading="loading"
          prepend-icon="mdi-login"
        >
          Đăng nhập
        </v-btn>

        <v-alert v-if="error" type="error" class="mt-4">
          {{ error }}
        </v-alert>
      </v-form>

      <div class="mt-6 text-body-2">
        Chưa có tài khoản?
        <v-btn variant="text" size="small" class="text-blue" @click="goToSignup">
          Đăng ký
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import logoUrl from '@/assets/logo.png'
import { useAuth } from '@/composables/useAuth'

const { login } = useAuth()
const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const rememberMe = ref(false)

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    await login({ email: email.value, password: password.value })
    router.push('/')
  } catch (err) {
    error.value = err.message || 'Đăng nhập thất bại'
  } finally {
    loading.value = false
  }
}

const goToSignup = () => {
  router.push('/signup')
}

const goToForgotPassword = () => {
  alert('Chức năng đang phát triển...')
}
</script>

<style scoped>
.text-blue {
  color: #1976d2;
}
</style>
