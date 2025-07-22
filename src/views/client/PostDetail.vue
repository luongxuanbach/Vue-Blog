<template>
    <div class="container" v-if="post">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
        <router-link to="/posts">⬅ Quay lại trang chủ</router-link>
    </div>
    <div v-else>
        <p>Không tìm thấy bài viết.</p>
        <router-link to="/posts">⬅ Quay lại trang chủ</router-link>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const post = ref(null);

onMounted(async () => {
    const res = await axios.get(`http://localhost:3000/posts/${route.params.id}`);
    post.value = res.data || null;
    if (!post.value) {
        console.error('Bài viết không tồn tại hoặc đã bị xoá.');
    }
    else {
        console.log('Bài viết đã tải thành công:', post.value);
    }
});

</script>

<style scoped>
.container{
    padding: 20px;
}
</style>