<template>
  <ClientLayout>
    <h2 class="text-2xl font-semibold mb-4">Thêm bài viết mới</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block font-medium">Tiêu đề</label>
        <input v-model="form.title" type="text" class="border rounded w-full p-2" required />
      </div>
      <div>
        <label class="block font-medium">Nội dung</label>
        <textarea v-model="form.content" class="border rounded w-full p-2 h-32" required></textarea>
      </div>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Thêm bài viết
      </button>
    </form>
  </ClientLayout>
</template>

<script setup>
import ClientLayout from '@/layouts/ClientLayout.vue'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  title: '',
  content: '',
})

const handleSubmit = async () => {
  try {
    await axios.post('http://localhost:3000/posts', form.value)
    router.push('/posts')
  } catch (error) {
    alert('Có lỗi khi thêm bài viết')
    console.error(error)
  }
}
</script>

<style scoped>
</style>