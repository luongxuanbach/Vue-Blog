<template>
    <div class="post-list">
    <h1>📃 Danh sách bài viết</h1>
    <router-link to="/posts/create" class="inline-block mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">➕ Tạo bài viết mới</router-link>
    <div v-if="loading">Đang tải dữ liệu...</div>
    <div v-else>
      <div v-for="post in posts" :key="post.id" class="post-item">
        <router-link :to="`/post/${post.id}`">
          <h2>{{ post.title }}</h2>
          <p>{{ post.content }}</p>
        </router-link>
        <router-link :to="`/posts/edit/${post.id}`" class="text-blue-600 hover:underline">✏️ Sửa</router-link>
        <button @click="handleDeletePost(post.id)" class="text-red-600 hover:underline">🗑️ Xoá</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { usePosts } from '@/composables/usePosts';

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