<script setup lang="ts">
import { Tabbar, TabbarItem } from "vant";
import { ref } from "vue";
//记录当前选择的tab
const active = ref("");
export default {
  name: "App",
  data() {
    return {
      sex: '男'
    }
  },
  setup() {
    // 数据
    let name = "zhangsan";
    let age = 18;
    function sayHello() {
      console.log(`我叫${name},今年我${age}岁了`);
    }
    return {
      name,
      age,
      sayHello,
    };
  },
};
————————————————
版权声明：本文为CSDN博主「米白蓝」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_50563868/article/details/124646474
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
