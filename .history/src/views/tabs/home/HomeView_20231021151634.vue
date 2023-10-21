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
    <!-- 内置组件,实现动画效果 -->
    <Transition name="fade">
      <SearchView v-if="isSearchViewShown" @cancel="toggleSearchView" />
    </Transition>
    <TheTop :recomments="recomments" @searchClick="toggleSearchView" />
  </div>
</template>

<style lang="scss" scoped>
.test {
  font-size: 39px;
}
</style>
