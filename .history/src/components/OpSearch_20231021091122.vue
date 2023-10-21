<script setup lang="ts">
interface IProps {
  showAction?: boolean //是否显示
  background?: string //背景
  placeholder?: string //默认提示输入文字
  shape?: string //组件默认外轮廓
  modelValue?: string | number //输入框默认值
}

const props = defineProps<IProps>()

interface IEmits {
  (e: 'search', v?: string | number): void
  (e: 'cancel'): void
  (e: 'clear'): void
  (e: 'update:modelValue', v?: string | number): void
  (e: 'inputClick'): void
}
const emits = defineEmits<IEmits>()

</script>
