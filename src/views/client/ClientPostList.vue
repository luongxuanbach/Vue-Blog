<template>
  <v-row>
    <v-col cols="12 md-6 mb-4 text-center d-flex justify-space-between align-center">
      <h1 class="text-h3 font-weight-bold mb-4">📄 Danh sách bài viết</h1>
      <RouterLink to="/posts/create">
        <v-btn color="primary" prepend-icon="mdi-plus" class="mb-4">
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
    </v-row>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { usePosts } from '@/composables/usePosts';
import PostCard from '@/components/PostCard.vue';

const { posts, loading, fetchPosts, deletePost } = usePosts();

onMounted(() => {
  fetchPosts();
});


const handleDeletePost = async (id) => {
  if (confirm('Bạn có chắc chắn muốn xoá bài viết này?')) {
    await deletePost(id);
    alert('Bài viết đã được xoá thành công!');
  }
};

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