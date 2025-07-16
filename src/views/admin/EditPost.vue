<template>
    <AdminLayout>
        <h2>📝 Chỉnh sửa bài viết</h2>

        <div v-if="post">
            <form @submit.prevent="handleUpdate" class="form">
                <div class="form-group">
                    <label>Tiêu đề</label>
                    <input v-model="post.title" required />
                </div>
                <div class="form-group">
                    <label>Nội dung</label>
                    <textarea v-model="post.content" rows="5" required></textarea>
                </div>
                <button type="submit">Cập nhật bài viết</button>
            </form>
        </div>
        <div v-else>
            <p>Không tìm thấy bài viết.</p>
            <router-link to="/admin">⬅ Quay lại trang quản lý</router-link>
        </div>
    </AdminLayout>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
import { posts } from '@/data/posts'; // Assuming you have a posts.js file with post data
import { usePosts } from '@/composables/usePosts';

const { getPostById, updatePost } = usePosts();
const route = useRoute();
const router = useRouter();

const postId = route.params.id;
const post = getPostById(postId);

const handleUpdate = () => {
    updatePost(postId, post);
    router.push('/admin');
};

</script>

<style scoped>
.form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.form-group label {
  font-weight: bold;
}
input, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
button {
  background: #27ae60;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background: #1e874b;
}
</style>