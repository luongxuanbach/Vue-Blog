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
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const posts = ref([]);
const loading = ref(true);

onMounted(async () => {
    try  {
        const res = await axios.get('http://localhost:3000/posts');
        posts.value = res.data;
    } catch (error) {
        console.error('Lỗi khi tải bài viết:', error);
    }
    finally {
        loading.value = false;
    }
})

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