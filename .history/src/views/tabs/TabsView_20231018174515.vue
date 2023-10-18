// eslint-disable-next-line prettier/prettier
<script setup lang="ts">
import { Tabbar, TabbarItem } from "vant";
import { ref } from "vue";
//记录当前选择的tab
const active = ref("");
</script>

<template>
  <div class="center">{{ active }}</div>
  <Tabbar v-model="active">
    <TabbarItem name="home" icon="home-o">首页</TabbarItem>
    <TabbarItem name="order" icon="bars">订单</TabbarItem>
    <TabbarItem name="me" icon="contact">我的</TabbarItem>
  </Tabbar>
</template>

<style scoped>
.center {
  text-align: center;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 1px;
}
</style>
