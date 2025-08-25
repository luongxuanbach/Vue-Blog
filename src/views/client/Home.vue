<template>
  <v-container class="py-12">
    <!-- 🎯 Hero Section -->

    <v-row class="mb-12" align="center" justify="center">
      <v-col cols="12" md="6" class="text-center text-md-start">
        <h1 class="text-h2 font-weight-bold mb-4">
          Chào mừng đến với Blog của <strong class="text-primary">Bách Lương</strong> <span class="neon-effect">tập code 🚀</span>
        </h1>
        <p class="text-subtitle-1 mb-6">  
          Khám phá các mẹo, câu chuyện và những hiểu biết được viết bởi những người sáng tạo đầy đam mê.
        </p>
        <!-- <v-btn color="primary" size="large" @click="goToCreate">
          ✍️ Tạo bài viết mới
        </v-btn> -->
      </v-col>

      <v-col cols="12" md="6">
        <v-img src="https://chonweb.vn/hsc_content/hsc_up_dinhkem/1625816574.png" alt="Blog Hero" class="rounded-lg"
          height="300" cover />
      </v-col>
    </v-row>

    <!-- 📚 Posts Section -->
    <v-row class="mb-4">
      <v-col cols="12">
        <h2 class="text-h4 font-weight-medium mb-6">📚 Bài viết nổi bật</h2>
      </v-col>

      <PostCard v-for="post in posts" :key="post.id" :post="post" />

      <v-col cols="12" class="text-center mt-6">
        <v-btn color="primary" @click="goToPosts">
          Xem thêm
        </v-btn>
      </v-col>
    </v-row>

    <!-- Category Section -->
    <v-row class="mt-12">
      <v-col cols="12">
        <h2 class="text-h4 font-weight-medium mb-6">🏷️ Danh mục</h2>
      </v-col>

      <v-col cols="12" md="4" class="mb-4">
        <v-card class="pa-6 text-center" outlined>
          <v-icon size="48" color="primary">mdi-code-tags</v-icon>
          <h3 class="text-h6 font-weight-medium mt-4">Công nghệ</h3>
          <p class="text-body-2 mt-2">
            Những xu hướng và hiểu biết mới nhất trong thế giới công nghệ.
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" md="4" class="mb-4">
        <v-card class="pa-6 text-center" outlined>
          <v-icon size="48" color="primary">mdi-palette</v-icon>
          <h3 class="text-h6 font-weight-medium mt-4">Thiết kế</h3>
          <p class="text-body-2 mt-2">
            Những ý tưởng sáng tạo và cảm hứng cho các nhà thiết kế.
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" md="4" class="mb-4">
        <v-card class="pa-6 text-center" outlined>
          <v-icon size="48" color="primary">mdi-earth</v-icon>
          <h3 class="text-h6 font-weight-medium mt-4">Du lịch</h3>
          <p class="text-body-2 mt-2">
            Những câu chuyện và mẹo từ khắp nơi trên thế giới.
          </p>
        </v-card>
      </v-col>
    </v-row>

    <!-- Newsletter form -->
    <v-row class="mt-12" align="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="text-h4 font-weight-medium mb-4">📬 Đăng ký nhận bản tin</h2>
        <p class="text-body-1 mb-6">
          Cập nhật những bài viết mới nhất và nội dung độc quyền.
        </p>
        <v-text-field label="Nhập email của bạn" outlined class="mb-4" />
        <v-btn color="primary" size="large">
          Đăng ký
        </v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import PostCard from '@/components/PostCard.vue'
import { usePosts } from '@/composables/usePosts'

const router = useRouter()
const { posts, fetchPosts } = usePosts()

onMounted(async () => {
  try {
    const allPosts = await fetchPosts() // fetchPosts() nên return mảng bài viết
    posts.value = allPosts.slice(0, 8)   // Gán lại 6 bài mới nhất vào posts.value
  } catch (error) {
    console.error('Failed to fetch posts:', error)
  }
})
const goToPosts = () => {
  router.push('/posts')
}

const goToCreate = () => {
  router.push('/posts/create')
}
</script>

<style scoped>
.v-container {
  max-width: 1000px;
  margin: auto;
}

.neon-effect {
  color: #00e5ff; /* Màu xanh ngọc sáng */
  text-shadow:
    0 0 5px #00b8d4,  /* Lớp bóng mờ 1 */
    0 0 10px #00b8d4, /* Lớp bóng mờ 2 */
    0 0 20px #00e5ff, /* Lớp bóng mờ 3 */
    0 0 40px #00e5ff, /* Lớp bóng mờ 4 */
    0 0 80px #00e5ff; /* Lớp bóng mờ 5 */
  animation: neon-flicker 1.5s infinite alternate; /* Hiệu ứng nhấp nháy */
}

@keyframes neon-flicker {
  0%, 100% {
    opacity: 1; /* Mờ hoàn toàn */
    text-shadow:
      0 0 5px #00b8d4,
      0 0 10px #00b8d4,
      0 0 20px #00e5ff;
  }
  50% {
    opacity: 0.8; /* Mờ 80% */
    text-shadow:
      0 0 2px #00b8d4,
      0 0 5px #00b8d4,
      0 0 10px #00e5ff;
  }
}
</style>
