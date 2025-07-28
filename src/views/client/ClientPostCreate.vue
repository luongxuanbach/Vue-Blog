<template>
  <v-card elevation="3" class="pa-6 rounded-xl">
    <v-card-title class="text-center text-h5 font-weight-bold mb-4 blue--text text--darken-2">
      ✍️ Tạo bài viết mới
    </v-card-title>

    <v-form @submit.prevent="submitPost" class="d-flex flex-column gap-4">
      <v-text-field v-model="form.title" label="Tiêu đề bài viết" prepend-inner-icon="mdi-format-title" variant="outlined"
        density="comfortable" hide-details />

      <v-textarea v-model="form.excerpt" label="Mô tả ngắn" prepend-inner-icon="mdi-text-short" variant="outlined"
        rows="2" auto-grow hide-details />

      <v-file-input v-model="form.thumbnailFile" label="Ảnh đại diện" accept="image/*" prepend-icon="mdi-image-outline"
        show-size variant="outlined" @change="previewImage" />

      <!-- Ảnh preview -->
      <div v-if="previewUrl" class="text-center mt-2">
        <v-img :src="previewUrl" max-width="250" class="mx-auto rounded-lg" />
      </div>

      <v-textarea v-model="form.content" label="Nội dung bài viết" prepend-inner-icon="mdi-notebook-edit-outline"
        variant="outlined" rows="5" auto-grow hide-details />

      <v-btn type="submit" color="primary" size="large" class="mt-4" prepend-icon="mdi-send" block>
        Đăng bài
      </v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { usePosts } from '@/composables/usePosts'

const { addPost } = usePosts()

const form = ref({
  title: '',
  excerpt: '',
  content: '',
  thumbnailFile: null
})

const previewUrl = ref('')

const previewImage = () => {
  const file = form.value.thumbnailFile
  if (file && file instanceof File) {
    previewUrl.value = URL.createObjectURL(file)
  } else {
    previewUrl.value = ''
  }
}

const submitPost = async () => {
  try {
    await addPost({
      title: form.value.title,
      excerpt: form.value.excerpt,
      content: form.value.content,
      thumbnail: form.value.thumbnailFile
    })

    alert('✅ Đăng bài thành công!')
    form.value = {
      title: '',
      excerpt: '',
      content: '',
      thumbnailFile: null
    }
    previewUrl.value = ''
  } catch (err) {
    console.error(err)
    alert('❌ Có lỗi khi đăng bài.')
  }
}
</script>
<style scoped></style>