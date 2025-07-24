<template>
  <v-container class="mt-5">
    <h1 class="text-h4 mb-6">Giải pháp toàn diện cho Ecommerce</h1>
    <v-parallax src="https://blog.dktcdn.net/files/web-crawler-la-gi-4.png"></v-parallax>

    <v-row>
      <v-col cols="12" md="12" class="mt-10 text-center">
        <h2 class="text-h5 ">Features</h2>
        <p>Save thousands to millions of bucks by using single tool for different amazing and great useful admin</p>
        <v-col cols="12" md="4" class="text-center">
          <v-icon large>mdi-account-multiple</v-icon>
          <h3>Quản lý người dùng</h3>
          <p>Quản lý người dùng dễ dàng với các tính năng như đăng ký, đăng nhập và phân quyền.</p>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <v-icon large>mdi-file-document</v-icon>
          <h3>Quản lý bài viết</h3>
          <p>Thêm, sửa, xoá bài viết một cách nhanh chóng và dễ dàng.</p>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <v-icon large>mdi-chart-bar</v-icon>
          <h3>Báo cáo thống kê</h3>
          <p>Xem báo cáo và thống kê về người dùng, bài viết và hoạt động trên trang.</p>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { VContainer } from 'vuetify/components';

</script>

<style scoped>
.v-container {
  max-width: 1000px;
  margin: auto;
}
</style>
