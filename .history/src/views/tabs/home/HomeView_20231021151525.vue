<script setup lang="ts">
import TheTop from './components/TheTop.vue'
import SearchView from '@/views/search/SearchView.vue'
import { useToggle } from '@/use/useToggle'
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
const [isSearchViewShown, toggleSearchView] = useToggle(false)
</script>

<template>
  <div class="home-page">
    <Transition></Transition>
    <SearchView v-if="isSearchViewShown" @cancel="toggleSearchView" />
    <TheTop :recomments="recomments" @searchClick="toggleSearchView" />
  </div>
</template>

<style scoped>
.test {
  font-size: 39px;
}
</style>
