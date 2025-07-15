<template>
    <div class="container" v-if="post">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
        <router-link to="/">⬅ Quay lại trang chủ</router-link>
    </div>
    <div v-else>
        <p>Không tìm thấy bài viết.</p>
        <router-link to="/">⬅ Quay lại trang chủ</router-link>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { posts } from '@/data/posts.js'
const route = useRoute();

const post = posts.find(p => p.id === parseInt(route.params.id));
</script>

<style scoped>
.container{
    padding: 20px;
}
</style>