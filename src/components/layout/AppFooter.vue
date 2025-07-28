<template>
  <v-footer class="bg-grey-lighten-3 text-center py-4" app>
    <v-container>
      <span class="text-grey-darken-1">
        © {{ new Date().getFullYear() }} Bcommy. All rights reserved.
      </span>
    </v-container>
  </v-footer>
</template>

<script setup>
import { VFooter, VContainer } from 'vuetify/components';
import { onMounted } from 'vue';
</script>

<style scoped>
.v-footer {
  background-color: #f5f5f5; /* Light grey background */
  color: #333; /* Dark text color */
}
</style>