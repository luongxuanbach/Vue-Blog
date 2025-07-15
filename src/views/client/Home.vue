<template>
    <ClientLayout>
        <PostItem
            v-for="post in posts"
            :key="post.id"
            :post="post"
        />
    </ClientLayout>  
</template>

<script setup>
import ClientLayout from '@/layouts/ClientLayout.vue'
import PostItem from '@/components/PostItem.vue';
import { posts } from '@/data/posts'; // Assuming you have a posts.js file with post data

</script>