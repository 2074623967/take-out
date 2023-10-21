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
}
const emits = defineEmits<IEmits>()

//按键触发
const onKeypress = (e: KeyboardEvent) => {
  const ENTER_CODE = 13 //回车键触发
  if (e.keyCode === ENTER_CODE) {
    e.preventDefault() //防止默认事件触发
    emits('search', props.modelValue)
  }
}
const onClear = () => {
  emits('update:modelValue', '')
  emits('clear')
}
</script>

<template>
  <div class="op-search" :class="{ 'op-search--show-action': showAction }" :style="{ background }">
    <div class="op-search__content">
      <div class="op-cell op-search__field">
        <div class="op-field__left-icon"></div>
        <div class="op-cell__value">
          <div class="op-filed__body">
            <input
              type="search"
              class="op-field__control"
              :value="modelValue"
              :placeholder="placeholder"
              @keypress="onKeypress"
              @click="emits('inputClick')"
              @input="(e) => emits('update:modelValue', (e.target as HTMLInputElement).value)"
            />
            <div v-if="$slots['right-icon']" class="op-field__right-icon">
              <slot name="right-icon"></slot>
            </div>
            <VanIcon v-else-if="modelValue" name="clear" class="op-field__clear" @click="onClear" />
          </div>
        </div>
      </div>
      <div class="op-search__action"></div>
    </div>
    <div v-if="showAction" class="op-search__action">
      <slot name="action">
        <div @click="emits('cancel')">取消</div>
      </slot>
    </div>
  </div>
</template>
