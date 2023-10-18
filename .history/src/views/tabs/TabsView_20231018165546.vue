<script setup lang="ts">
import { Tabbar, TabbarItem } from "vant";
import { ref } from "vue";
//记录当前选择的tab
const active = ref("");
</script>

<template>
  <Tabbar v-model="active">
    <TabbarItem name="home" icon="home-o">首页</TabbarItem>
     <TabbarItem name="order" icon="home-o">订单</TabbarItem>
  </Tabbar>
</template>
