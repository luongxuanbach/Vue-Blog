<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card
      class="rounded-xl transition-ease-in-out"
      elevation="4"
      @click="goToDetail"
    >
      <v-img
        :src="thumbnailUrl"
        height="160"
        cover
        class="rounded-t-xl"
      />

      <v-card-title class="text-h6 font-weight-bold">
        {{ post.title }}
      </v-card-title>

      <v-card-text class="text-body-2">
        {{ shortDescription }}
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" text>Read more</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

const goToDetail = () => {
  console.log('Navigating to post detail:', props.post.id)
  router.push(`/posts/${props.post.id}`)
}

// Tạo mô tả ngắn gọn nếu post.description quá dài
const shortDescription = computed(() =>
  props.post.description?.length > 100
    ? props.post.description.slice(0, 100) + '...'
    : props.post.description || 'No description available.'
)

// Ảnh mặc định nếu không có
const thumbnailUrl = computed(() =>
  props.post.thumbnail || 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
)
</script>