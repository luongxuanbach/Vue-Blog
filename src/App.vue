<template>
  <ClientLayout>
    <slot />
  </ClientLayout>
</template>

<script setup>
  import ClientLayout from '@/layouts/ClientLayout.vue';
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  font-family: sans-serif;
}
</style>
