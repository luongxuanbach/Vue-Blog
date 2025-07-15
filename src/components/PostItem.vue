<template>
  <div class="post" @click="goToDetail">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <hr />
  </div>
</template>

<script setup>

import { useRouter } from 'vue-router'

const props = defineProps({
  post: Object
})

const router = useRouter()

const goToDetail = () => {
  router.push(`/post/${props.post.id}`)
}

</script>

<style scoped>
.post {
  margin-bottom: 20px;
  cursor: pointer;
}
h2 {
  margin: 0 0 10px;
}
</style>
