<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { IScrollBarInfo } from '@/types'
import { useInterval } from '@/use/useInterval'
import { useTimeout } from '@/use/useTimeout'

interface IProps {
  intervalTime?: number
  transitionTime?: number
  height?: number
  data: IScrollBarInfo[]
}
const props = withDefaults(defineProps<IProps>(), {
  intervalTime: 3000,
  transitionTime: 1000,
  height: 40,
})

const containerRef = ref()
onMounted(() => {
  //  拿到div的dom结构
  const container = containerRef.value
  const count = container.children.length
  const firstSwipeItem = container.children[0]
  container.style.height = `${count * props.height}px`
  let index = 0
  useInterval(() => {
    index++
    // 如果超过 item 个数就需要将第一个元素接到后面
    if (index >= count) {
      firstSwipeItem.style.transform = `translateY(${index * props.height}px)`
      // 第一个元素滚动动画结束之后，将整个 container 位置重置
      const timeout = setTimeout(() => {
        // 重置逻辑
        firstSwipeItem.style.transform = ''
        container.style.transform = ''
        container.style.transition = ''
        clearTimeout(timeout)
      }, props.transitionTime)
    }
    container.style.transform = `translateY(-${index * props.height}px)`
    container.style.transition = `all linear ${props.transitionTime}ms`
    index = index % count
  }, props.intervalTime)
})
</script>

<template>
  <div class="home-scroll-bar">
    <div class="home-scroll-bar__swipe">
      <div ref="containerRef">
        <div class="swipe-item" v-for="v in props.data" :key="v.type">
          <div class="scroll-bar__info" :class="`scroll-bar__info__${v.type}`">
            <span class="info-badge">{{ v.badge }}</span>
            <span class="info-detail" v-html="v.detail"></span>
            <span class="info-btn op-thin-border">{{ v.btn }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
