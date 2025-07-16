<template>
    <AdminLayout>
        <h2>➕ Thêm bài viết mới</h2>

        <form @submit.prevent="handleSubmit" class="form">
            <div class="form-group">
                <label>Tiêu đề</label>
                <input v-model="form.title" required />
            </div>

            <div class="form-group">
                <label>Nội dung</label>
                <textarea v-model="form.content" rows="5" required></textarea>
            </div>

            <button type="submit">Lưu bài viết</button>
        </form>
    </AdminLayout>
</template>

<script setup>

import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import AdminLayout from '@/layouts/AdminLayout.vue';
import { posts } from '@/data/posts'; // Assuming you have a posts.js file with post data
import { usePosts } from '@/composables/usePosts';

const { addPost } = usePosts();
const router = useRouter();
const form = reactive({
    title: '',
    content: ''
});

const handleSubmit = () => {
    const newPost = {
        id: Date.now(), // Simple ID generation
        title: form.title,
        content: form.content
    }

    console.log('New Post:', newPost);
     // Call the addPost function from usePosts to add the new post
    addPost(newPost); // Add new post to the posts array
     // Reset form fields
    form.title = '';
    form.content = '';
    alert('Bài viết đã được lưu thành công!');
    // Optionally redirect to the admin dashboard or post list
    router.push('/admin'); // Redirect to admin dashboard
};

</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.form-group {
    display: flex;
    flex-direction: column;
}
.form-group label {
    margin-bottom: 0.5rem;
}
.form-group input,
.form-group textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}
button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
button:hover {
    background-color: #0056b3;
}
</style>