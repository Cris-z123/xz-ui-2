<template>
  <button
    class="inline-flex align-center justify-center leading-6 text-center shadow whitespace-nowrap focus:outline-none"
    :class="[
      backgroundColor,
      buttonSize,
      disabledCursor,
      shape,
      { 'animate-ripples': showClickAnimate }
    ]"
    :disabled="disabled"
    @click="onClickAnimate"
  >
    <Icon v-if="loading" size="small" name="loader-5" class="animate-spin" />
    <Icon v-else-if="icon" size="small" :name="icon" />
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, Ref, ref } from 'vue';
import Icon from 'components/Icon.vue';

const props = defineProps({
  theme: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  shape: {
    type: String,
    default: 'default'
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const showClickAnimate: Ref<boolean> = ref(false);

const disabledCursor = computed(() =>
  props.disabled || props.loading
    ? 'bg-gray-200 text-gray-300 border border-current cursor-not-allowed dark:bg-transparent dark:text-slate-700'
    : 'text-slate-700 transition ease-in-out delay-100 hover:opacity-80 duration-250 dark:text-slate-100'
);

const colorClassMap: { [key: string]: string } = {
  primary: 'bg-blue-400',
  default: 'border border-current',
  ghost: 'bg-transparent border border-current',
  success: 'bg-green-400',
  error: 'bg-red-400',
  dashed: 'outline-dashed outline-1 outline-offset-0',
  text: 'bg-transparent hover:bg-gray-100 shadow-none hover:shadow dark:hover:bg-gray-700'
};

const backgroundColor = computed(() => colorClassMap[props.theme]);

const sizeClassMap: { [key: string]: string } = {
  small: 'h-6 px-1 py-0',
  default: 'h-8 px-2 py-1',
  large: 'h-10 px-4 py-2'
};
const buttonSize = computed(() => sizeClassMap[props.size]);

const shapeMap: { [key: string]: string } = {
  default: 'rounded',
  circle: 'rounded-full'
};
const shape = computed(() => shapeMap[props.shape]);

const onClickAnimate = () => {
  if (!props.disabled && !props.loading) {
    showClickAnimate.value = !showClickAnimate.value;
    setTimeout(() => {
      showClickAnimate.value = !showClickAnimate.value;
    }, 300);
  }
};
</script>
