<script setup lang="ts">
import TheTop from './components/TheTop.vue'

const recomments = [
  {
    value: 1,
    lable: '牛腩',
  },
   {
    value: 2,
    lable: '',
  },
]
</script>

<template>
  <div class="home-page">
    <TheTop />
  </div>
</template>

<style scoped>
.test {
  font-size: 39px;
}
</style>
