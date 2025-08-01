<template>
  <v-row class="mb-6 align-center justify-space-between">
    <v-col cols="12" md="6">
      <h1 class="text-h4 font-weight-bold">📄 Danh sách bài viết</h1>
    </v-col>
    <v-col cols="12" md="6" class="text-md-end text-center">
      <RouterLink to="/posts/create">
        <v-btn color="primary" prepend-icon="mdi-plus">
          Tạo bài viết mới
        </v-btn>
      </RouterLink>
    </v-col>
  </v-row>
  <div v-if="loading">Đang tải dữ liệu...</div>
  <div v-else>
    <!-- 📚 Posts Section -->
    <v-row class="mb-4">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
      <!-- Phân trang -->
      <v-pagination v-model="page" :length="totalPages" :total-visible="5" color="primary" class="my-6" />
    </v-row>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue';
import { usePosts } from '@/composables/usePosts';
import PostCard from '@/components/PostCard.vue';

const { posts, loading, fetchPosts, totalPosts } = usePosts();
const page = ref(1)
const limit = 8

const totalPages = computed(() => Math.ceil(totalPosts.value / limit))

const loadPosts = () => {
  fetchPosts(page.value, limit)
}

onMounted(loadPosts)

watch(page, loadPosts)

</script>

<style scoped>
.post-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.post-item {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  background: #f9f9f9;
}
</style>