<template>
    <v-container class="mt-10">
    <h1 class="text-h4 mb-6">Chào mừng đến với trang chủ!</h1>
    <p>Đây là nội dung chính của trang chủ.</p>

    <!-- Ví dụ hiển thị danh sách bài viết -->
    <ClientPostList />
  </v-container>
</template>

<script setup>
import ClientPostList from '@/views/client/ClientPostList.vue';
</script>