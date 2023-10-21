<script setup lang="ts">
import TheTop from './components/TheTop.vue'
import  {}
const recomments = [
  {
    value: 1,
    lable: '牛腩',
  },
  {
    value: 2,
    lable: '色拉',
  },
]
</script>

<template>
  <div class="home-page">
    <TheTop :recomments="recomments" />
  </div>
</template>

<style scoped>
.test {
  font-size: 39px;
}
</style>
