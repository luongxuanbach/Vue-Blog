<template>
    <AdminLayout>
        <h2>📝 Chỉnh sửa bài viết</h2>

        <div v-if="post">
            <form @submit.prevent="handleSubmit" class="form">
                <div class="form-group">
                    <label>Tiêu đề</label>
                    <input v-model="form.title" required />
                </div>
                <div class="form-group">
                    <label>Nội dung</label>
                    <textarea v-model="form.content" rows="5" required></textarea>
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

const route = useRoute();
const router = useRouter();

const postId = Number(route.params.id);
const post = ref(posts.find(p => p.id === postId));



</script>

<style></style>