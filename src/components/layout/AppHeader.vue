<template>
    <v-app-bar app color="primary" dark>
        <v-container>
            <v-row align="center" justify="space-between" no-gutters>
                <!-- Logo -->
                <v-col cols="auto">
                    <v-img :src=logoUrl alt="Logo" width="120" contain></v-img>
                </v-col>

                <!-- Navigation -->
                <v-col cols="auto">
                    <v-btn to="/" variant="text" class="text-white">Trang chủ</v-btn>
                    <v-btn to="/posts" variant="text" class="text-white">Bài viết</v-btn>
                    <v-btn to="/about" variant="text" class="text-white">Giới thiệu</v-btn>
                    <v-btn to="/login" variant="text" class="text-white">Đăng nhập</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script setup>
import { VAppBar, VBtn, VImg, VContainer, VRow, VCol } from 'vuetify/components';
import { useRouter } from 'vue-router';
const router = useRouter();
import logoUrl from '@/assets/logo.png'

</script>

<style scoped>
.v-img {
    max-height: 50px;
}
</style>