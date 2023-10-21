<script setup lang="ts">
import TheTop from './components/TheTop.vue'
import SearchView from '@/views/search/SearchView.vue'
import OpLoadingView from '@/components/OpLoadingView.vue'
import { useToggle } from '@/use/useToggle'
import { useAsync } from '@/use/useAsync'
import { fetchHomePageData } from '@/api/home'
// const recomments = [
//   {
//     value: 1,
//     lable: '牛腩',
//   },
//   {
//     value: 2,
//     lable: '色拉',
//   },
// ]
const [isSearchViewShown, toggleSearchView] = useToggle(false)

const { data, pending } = useAsync(fetchHomePageData, {
  banner: [],
  searchRecomments: [],
  transformer: [],
  scrollBarInfoList: [],
  countdown: {} as ICountdown,
  activities: [],
} as IHomeInfo)
</script>

<template>
  <div class="home-page">
    <!-- 内置组件,实现动画效果 -->
    <Transition name="fade">
      <SearchView v-if="isSearchViewShown" @cancel="toggleSearchView" />
    </Transition>
    <div v-show="!isSearchViewShown">
      <TheTop :recomments="data.searchRecomments" @searchClick="toggleSearchView" />
      <OpLoadingView :loading="pending" type="skeleton">
        <div>{{ data }}</div>
      </OpLoadingView>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
