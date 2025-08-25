<template>
  <v-app-bar app color="primary" dark>
    <v-container>
      <v-row align="center" justify="space-between" no-gutters>
        <!-- Logo -->
        <v-col cols="auto">
          <router-link to="/">
            <v-img :src="logoUrl" alt="Logo" width="120" contain class="header-logo" />
          </router-link>
        </v-col>

        <!-- Desktop Navigation -->
        <v-col cols="auto" class="d-none d-md-flex align-center">
          <v-btn to="/" variant="text" class="text-white" exact>Trang chủ</v-btn>
          <v-btn to="/posts" variant="text" class="text-white">Bài viết</v-btn>
          <v-btn to="/about" variant="text" class="text-white">Giới thiệu</v-btn>
          <v-btn v-if="isAdmin" to="/admin" variant="text" class="text-white">Quản trị</v-btn>

          <v-btn v-if="!isAuthenticated" to="/login" variant="text" class="text-white">
            Đăng nhập
          </v-btn>
          <v-btn v-if="isAuthenticated" @click="logout" variant="text" class="text-white">
            Đăng xuất
          </v-btn>

          <v-avatar
            v-if="user?.name"
            color="white"
            size="32"
            class="ms-2 text-primary font-weight-bold"
          >
            {{ user.name.charAt(0).toUpperCase() }}
          </v-avatar>
        </v-col>

        <!-- Mobile Menu Button -->
        <v-col cols="auto" class="d-flex d-md-none">
          <v-app-bar-nav-icon @click="drawer = !drawer" />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <!-- Mobile Navigation Drawer -->
  <v-navigation-drawer v-model="drawer" temporary location="right">
    <v-list>
      <v-list-item to="/" @click="drawer = false">Trang chủ</v-list-item>
      <v-list-item to="/posts" @click="drawer = false">Bài viết</v-list-item>
      <v-list-item to="/about" @click="drawer = false">Giới thiệu</v-list-item>
      <v-list-item v-if="isAdmin" to="/admin" @click="drawer = false">Quản trị</v-list-item>
      <v-list-item v-if="!isAuthenticated" to="/login" @click="drawer = false">Đăng nhập</v-list-item>
      <v-list-item v-if="isAuthenticated" @click="logout">Đăng xuất</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import logoUrl from '@/assets/logo.png'
import { useAuth } from '@/composables/useAuth'
import { ref } from 'vue'

const { user, logout, isAuthenticated, isAdmin } = useAuth()
const drawer = ref(false)
</script>

<style scoped>
.header-logo {
  max-height: 50px;
}
</style>
