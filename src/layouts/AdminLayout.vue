<!-- src/layouts/AdminLayout.vue -->
<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar color="indigo-darken-4" dark>
      <v-app-bar-title>Admin Panel</v-app-bar-title>
      <v-spacer />
      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Navigation Drawer (Sidebar) -->
    <v-navigation-drawer app color="grey-lighten-4" width="240">
      <v-list dense>
        <v-list-item to="/admin" prepend-icon="mdi-view-dashboard" title="Dashboard" />
        <v-list-item to="/admin/create" prepend-icon="mdi-pencil" title="Tạo bài viết" />
        <v-list-item to="/admin/posts" prepend-icon="mdi-post" title="Danh sách bài viết" />
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main class="pa-4">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app padless color="grey-lighten-4">
      <v-col class="text-center text-caption py-2">
        © 2025 Bcommy Admin
      </v-col>
    </v-footer>
  </v-app>
</template>

<script setup>
import { useAuth } from '@/composables/useAuth'
const { logout } = useAuth()
</script>
