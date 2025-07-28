<template>
  <v-skeleton-loader v-if="posts.length === 0" type="article" class="my-6" />

  <v-card v-else-if="post" elevation="4" class="pa-6 rounded-xl">
    <!-- Breadcrumbs -->
    <v-breadcrumbs
      class="mb-6 px-4 py-2 bg-grey-lighten-4 rounded-lg"
      divider=">"
    >
      <v-breadcrumbs-item :to="{ name: 'Home' }" class="d-flex align-center">
        <v-icon start icon="mdi-home-outline" class="me-1" /> Trang chủ
      </v-breadcrumbs-item>

      <v-breadcrumbs-item :to="{ name: 'Posts' }" class="d-flex align-center">
        <v-icon start icon="mdi-file-document-outline" class="me-1" /> Bài viết
      </v-breadcrumbs-item>

      <v-breadcrumbs-item disabled class="d-flex align-center text-primary">
        <v-icon start icon="mdi-note-text-outline" class="me-1" />
        {{ post?.title || 'Đang tải...' }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>

    <!-- Thumbnail -->
    <v-img
      v-if="post.thumbnail"
      :src="post.thumbnail"
      max-height="400"
      cover
      class="mb-4 rounded-lg elevation-1"
    />

    <!-- Title -->
    <v-card-title class="text-h4 text-md-h3 text-primary font-weight-bold mb-2">
      {{ post.title }}
    </v-card-title>

    <!-- Date -->
    <v-card-subtitle class="text-grey text-subtitle-2 d-flex align-center mb-4">
      <v-icon icon="mdi-calendar-outline" size="18" class="me-1" />
      {{ formatDate(post.createdAt) }}
    </v-card-subtitle>

    <v-divider class="my-4" />

    <!-- Content -->
    <v-card-text class="text-body-1" style="line-height: 1.8; padding-bottom: 32px;">
      <div v-html="post.content" class="prose max-w-full" />
    </v-card-text>
  </v-card>

  <!-- Error Alert -->
  <v-alert v-else type="error" class="mt-4">
    Không tìm thấy bài viết.
  </v-alert>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePosts } from '@/composables/usePosts'

const route = useRoute()
const { posts, fetchPosts } = usePosts()

// Bắt buộc phải chờ fetch xong mới kiểm tra
onMounted(async () => {
  if (posts.value.length === 0) {
    await fetchPosts()
  }
})

// Đảm bảo id đúng key (dùng _id hoặc id, tùy dữ liệu bạn)
const post = computed(() => {
  const id = route.params.id
  const found = posts.value.find(p => p._id === id || p.id === id)
  console.log('🔍 Found post:', found)
  return found
})

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}
</script>

<style scoped>
.v-breadcrumbs-item {
  font-weight: 500;
  color: #555;
  transition: color 0.3s ease;
}

.v-breadcrumbs-item:hover {
  color: #1976D2;
  text-decoration: underline;
}

.v-breadcrumbs-item--disabled {
  color: #1976D2;
  font-weight: 600;
}

.prose img {
  max-width: 100%;
  border-radius: 8px;
}

.prose h1,
.prose h2,
.prose h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.prose p {
  margin-bottom: 1rem;
}
</style>
