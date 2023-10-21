<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import OpSearch from '@/components/OpSearch.vue'
import { fetchSearchData } from '@/api/search'
interface IEmits {
  (e: 'cancel'): void
}
const emits = defineProps<IEmits>()

const searchValue = ref('')
const searchResult = ref([])
const onSearch = async (v?: string | number) => {
  console.log('====onSearch', v)
  const { list } = await fetchSearchData(v as string)
  searchResult.value = list
}
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
    <div class="search-view__result">
      <div class="result-item" v-for="v in searchResult" :key="v.label">
        <VanIcon name="search"></VanIcon>
        <div class="name">{{ v.label }}</div>
        <div class="count">约{{ v.resultCount }}个结果</div>
      </div>
    </div>
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
