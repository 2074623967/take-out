<script setup lang="ts">
import OpSearch from '@/components/OpSearch.vue'
interface IEmits {
  (e: 'cancel'): void
}
const emits = defineProps<IEmits>()
</script>

<template>
  <div class="search-view" @click="emits('cancel')">
    <OpSearch
      show-action
      v-model="searchValue"
      shape="round"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="emits('cancel')"
    ></OpSearch>
  </div>
</template>

<style lang="scss">
.search-view {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
}
</style>
