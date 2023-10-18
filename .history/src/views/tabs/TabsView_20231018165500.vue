<script setup lang="ts">
import { Tabbar, TabbarItem } from "vant";
import { ref } from "vue";
//记录当前选择的tab
const active = ref("");
</script>

<template>
  <Tabbar v-model="active">
    <TabbarItem na> </TabbarItem>
  </Tabbar>
</template>
