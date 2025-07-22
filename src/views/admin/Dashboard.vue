<template>
    <AdminLayout>
        <h2>📋 Quản lý bài viết</h2>
        <router-link to="/admin/create" class="create-link">➕ Thêm bài viết mới</router-link>

        <div v-if="posts.length > 0">
            <div v-for="post in posts" :key="post.id" class="post-item">
                <h3>{{ post.title }}</h3>
                <div class="actions">
                    <router-link :to="`/admin/edit/${post.id}`">📝 Sửa</router-link>
                    <button @click="deletePost(post.id)">🗑 Xoá</button>
                </div>
                <p>{{ post.content }}</p>
            </div>
        </div>
        <div v-else>
            <p>Không có bài viết nào.</p>
        </div>
    </AdminLayout>
</template>

<script setup>
import { reactive } from 'vue'
import AdminLayout from '@/layouts/AdminLayout.vue'; 
import { posts as sourcePosts } from '@/data/posts'; // Assuming you have a posts.js file with post data
import { usePosts } from '@/composables/usePosts';

const { posts, deletePost } = usePosts()

</script>

<style scoped>
.create-link {
  display: inline-block;
  margin-bottom: 20px;
  color: #2e86de;
  text-decoration: none;
}
.create-link:hover {
  text-decoration: underline;
}
.post-item {
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
}
.actions {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}
.actions button {
  background: red;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
