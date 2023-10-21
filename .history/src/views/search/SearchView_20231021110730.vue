<script setup lang="ts">
interface IEmits {
  (e: 'cancel'): void
}
const emits = defineProps<IEmits>()
</script>

<template>
  <div class="search-view" @click="emits('cancel')">搜索页</div>
</template>

<style lang="scss">
.search-view {
   position: absolute;
   top: 0;
   bottom: 0;
}
</style>
