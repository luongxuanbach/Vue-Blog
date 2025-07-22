<template>
    <div>
        <router-link to="/posts" class="text-blue-600 hover:underline">← Quay lại danh sách bài viết</router-link>
        <h2>Sửa bài viết</h2>
        <form @submit.prevent="handleSubmit">
            <div>
                <label>Tiêu đề:</label>
                <input v-model="form.title" type="text" required />
            </div>
            <div>
                <label>Nội dung:</label>
                <textarea v-model="form.content" required></textarea>
            </div>
            <button type="submit">Cập nhật bài viết</button>
        </form>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { usePosts } from '@/composables/usePosts';

const route = useRoute();
const router = useRouter();
const form = ref({
    title: '',
    content: ''
});

const { getPostById, updatePost } = usePosts();

onMounted(async () => {
    const post = await getPostById(route.params.id);

    if (post) {
        form.value.title = post.title;
        form.value.content = post.content;
    } else {
        console.error('Bài viết không tồn tại');
    }
});

// Hàm xử lý khi gửi form cập nhật bài viết
const handleSubmit = async () => {
    await updatePost(route.params.id, form.value);
    alert('Bài viết đã được cập nhật thành công!');
    // Chuyển hướng về danh sách bài viết sau khi cập nhật
    router.push('/posts');
};
</script>

<style scoped>
.container {
    padding: 20px;
}

form {
    display: flex;
    flex-direction: column;
}

form div {
    margin-bottom: 10px;
}

input, textarea {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

</style>