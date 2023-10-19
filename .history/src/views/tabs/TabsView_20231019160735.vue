<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
const router = useRouter()
// 记录当前选择的 tab
const active = ref(route.name as string)

watch(active, (nv) => {
  router.push({
    name: nv,
  })
})
</script>

<template>
  <!-- <div class="center">{{ active }}</div> -->
  <RouterView />
  <!-- <Tabbar v-model="active">
    <TabbarItem name="home" icon="home-o">首页</TabbarItem>
    <TabbarItem name="order" icon="bars">订单</TabbarItem>
    <TabbarItem name="me" icon="contact">我的</TabbarItem>
  </Tabbar> -->
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
