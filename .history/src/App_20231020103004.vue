<script setup lang="ts">
import { RouterView } from 'vue-router'
//import TabsView from './views/tabs/TabsView.vue'

import { fetchTest } from '@/api/test'
fetchTest()
</script>

<template>
  <RouterView />
  <!-- <TabsView /> -->
</template>

<style scoped>
@import 'normalize.css';

#app {
/**字体 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing:grayscale;
}
</style>
