<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import OpSearch from '@/components/OpSearch.vue'
import { fetchSearchData } from '@/api/search'
import type { ISearchResult } from '@/types'
interface IEmits {
  (e: 'cancel'): void
}
const emits = defineProps<IEmits>()

const searchValue = ref('')
const searchResult = ref([] as ISearchResult[])
const [INIT, DONE, DOING] = [-1, 0, 1]
const searchState = ref(INIT)
const onSearch = async (v?: string | number) => {
  console.log('====onSearch', v)
  try {
    searchState.value = DOING
    const { list } = await fetchSearchData(v as string)
    searchResult.value = list
  } finally {
    searchState.value = DONE
  }
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
      <div class="searching" v-if="searchState === DOING">~正在搜索~</div>
       <template v-if="searchState === DONE">
      <div class="result-item" v-for="v in searchResult" :key="v.label">
        <VanIcon name="search"></VanIcon>
        <div class="name">{{ v.label }}</div>
        <div class="count">约{{ v.resultCount }}个结果</div>
      </div>
      <div class="no-result" v-if="!searchResult.length">~暂无推荐~</div>
    </div>
    </
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

  &__result {
    .result-item {
      display: flex;
      align-items: center;
      font-size: 12px;
      padding: 10px;
      border-radius: 1px solid var(--van-gray-1);
      .name {
        flex: 1;
        padding-left: 6px;
      }
      .count {
        font-size: 12px;
        color: var(--van-gray-6);
      }
    }
    .no-result,
    .searching {
      font-size: 12px;
      padding: 100px 0;
      text-align: center;
      color: var(--van-gray-6);
    }
  }
}
</style>
