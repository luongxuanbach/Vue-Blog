<template>
    <v-app-bar app color="primary" dark>
        <v-container>
            <v-row align="center" justify="space-between" no-gutters>
                <!-- Logo -->
                <v-col cols="auto">
                    <router-link to="/">
                        <v-img :src="logoUrl" alt="Logo" width="120" contain></v-img>
                    </router-link>
                </v-col>

                <!-- Navigation -->
                <v-col cols="auto">
                    <v-btn to="/" variant="text" class="text-white">Trang chủ</v-btn>
                    <v-btn to="/posts" variant="text" class="text-white">Bài viết</v-btn>
                    <v-btn to="/about" variant="text" class="text-white">Giới thiệu</v-btn>
                    <template v-if="isAuthenticated">
                        <span class="text-white mr-2">👋 Xin chào, <strong>{{ user?.name }}</strong></span>
                        <v-btn @click="handleLogout" variant="text" class="text-white">Đăng xuất</v-btn>
                    </template>
                    <template v-else>
                        <v-btn to="/login" variant="text" class="text-white">Đăng nhập</v-btn>
                    </template>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
import logoUrl from '@/assets/logo.png'
import { useAuth } from '@/composables/useAuth';

const { isAuthenticated, logout } = useAuth();

const handleLogout = async () => {
    await logout()
    router.push('/login')
}

</script>

<style scoped>
.v-img {
    max-height: 50px;
}
</style>