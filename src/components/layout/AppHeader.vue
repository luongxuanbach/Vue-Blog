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

        <!-- Navigation desktop -->
        <v-col
          cols="auto"
          class="d-none d-md-flex align-center"
        >
          <v-btn to="/" variant="text" class="text-white" exact>Trang chủ</v-btn>
          <v-btn to="/posts" variant="text" class="text-white">Bài viết</v-btn>
          <v-btn to="/about" variant="text" class="text-white">Giới thiệu</v-btn>
          <v-btn v-if="isAdmin" to="/admin" variant="text" class="text-white">Quản trị</v-btn>

          <v-btn
            v-if="!isAuthenticated"
            to="/login"
            variant="text"
            class="text-white"
          >
            Đăng nhập
          </v-btn>

          <v-btn
            v-if="isAuthenticated"
            @click="logout"
            variant="text"
            class="text-white"
          >
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

        <!-- Navigation mobile -->
        <v-col
          cols="auto"
          class="d-flex d-md-none"
        >
          <v-menu
            location="bottom end"
            transition="scale-transition"
          >
            <template #activator="{ props }">
              <v-btn icon v-bind="props">
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item to="/" exact>Trang chủ</v-list-item>
              <v-list-item to="/posts">Bài viết</v-list-item>
              <v-list-item to="/about">Giới thiệu</v-list-item>
              <v-list-item v-if="isAdmin" to="/admin">Quản trị</v-list-item>
              <v-list-item v-if="!isAuthenticated" to="/login">Đăng nhập</v-list-item>
              <v-list-item v-if="isAuthenticated" @click="logout">Đăng xuất</v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import logoUrl from '@/assets/logo.png'
import { useAuth } from '@/composables/useAuth'

const { user, logout, isAuthenticated, isAdmin } = useAuth()
</script>

<style scoped>
.header-logo {
  max-height: 50px;
}
</style>