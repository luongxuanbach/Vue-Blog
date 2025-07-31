<template>
  <v-card class="pa-8" max-width="500" elevation="10" rounded="lg">
    <v-card-text class="text-center">
      <v-img :src="logoUrl" width="100" class="mb-4 mx-auto" />

      <h2 class="font-weight-bold mb-6">Tạo tài khoản mới</h2>

      <v-form @submit.prevent="handleSignup">
        <v-text-field
          v-model="name"
          label="Tên đầy đủ"
          prepend-inner-icon="mdi-account"
          variant="outlined"
          color="primary"
          class="mb-4"
          required
        />

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

        <v-btn
          type="submit"
          block
          color="primary"
          class="text-white font-weight-bold"
          size="large"
          rounded="lg"
          :loading="loading"
          prepend-icon="mdi-account-plus"
        >
          Đăng ký
        </v-btn>

        <v-alert v-if="error" type="error" class="mt-4">
          {{ error }}
        </v-alert>
      </v-form>

      <div class="mt-6 text-body-2">
        Đã có tài khoản?
        <v-btn variant="text" size="small" class="text-blue" @click="goToLogin">
          Đăng nhập
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import logoUrl from '@/assets/logo.png'

const name = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const router = useRouter()

const handleSignup = async () => {
  error.value = ''
  loading.value = true

  try {
    // Kiểm tra email đã tồn tại
    const res = await axios.get(`http://localhost:3000/users?email=${email.value}`)
    if (res.data.length > 0) {
      error.value = 'Email này đã được đăng ký.'
      return
    }

    // Đăng ký người dùng mới
    await axios.post('http://localhost:3000/users', {
      name: name.value,
      email: email.value,
      password: password.value,
      role: 'user'
    })

    alert('✅ Đăng ký thành công! Bạn có thể đăng nhập ngay.')
    router.push('/login')
  } catch (err) {
    console.error(err)
    error.value = 'Đã xảy ra lỗi khi đăng ký.'
  } finally {
    loading.value = false
  }
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
