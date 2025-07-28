<template>
  <v-container class="py-12">
    <!-- 🎯 Hero Section -->
    <v-row align="center" justify="center" class="mb-12">
      <v-col cols="12" md="6" class="text-center text-md-start">
        <h1 class="text-h2 font-weight-bold mb-4">
          Welcome to Our Blog
        </h1>
        <p class="text-subtitle-1 mb-6">
          Explore tips, stories, and insights written by passionate creators.
        </p>
        <v-btn color="primary" size="large" @click="goToCreate">
          ✍️ Create New Post
        </v-btn>
      </v-col>

      <v-col cols="12" md="6">
        <v-img src="https://chonweb.vn/hsc_content/hsc_up_dinhkem/1625816574.png" alt="Blog Hero" class="rounded-lg" height="300" cover />
      </v-col>
    </v-row>

    <!-- 📚 Posts Section -->
    <v-row class="mb-4">
      <v-col cols="12">
        <h2 class="text-h4 font-weight-medium mb-6">📚 Latest Posts</h2>
      </v-col>

      <PostCard v-for="post in posts" :key="post.id" :post="post" />

      <v-col cols="12" class="text-center mt-6">
        <v-btn color="primary" @click="goToPosts">
          See More
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
</style>
