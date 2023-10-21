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
</script>

<style lang="scss">
</@at-root