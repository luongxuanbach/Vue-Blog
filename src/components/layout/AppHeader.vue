<template>

    <v-app-bar app color="primary" dark>
        <v-app-bar-title class="text-h6">My Blog</v-app-bar-title>
        <v-spacer />
        <v-btn to="/" variant="text" class="text-white">Trang chủ</v-btn>
        <v-btn to="/posts" variant="text" class="text-white">Bài viết</v-btn>
        <v-btn to="/about" variant="text" class="text-white">Giới thiệu</v-btn>
    </v-app-bar>
</template>

<script setup>
import { VAppBar, VAppBarTitle, VBtn, VSpacer } from 'vuetify/components';
import { useRouter } from 'vue-router';
const router = useRouter();
import { onMounted } from 'vue';
onMounted(() => {
    // Any setup logic can go here
});
</script>

<style scoped>
.v-app-bar {
    background-color: #1976d2;
    /* Màu chính của Vuetify */
}
</style>