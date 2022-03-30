<template>
  <button
    class="inline-flex align-center justify-center leading-6 text-center shadow whitespace-nowrap rounded border border-current focus:outline-none"
    :class="[backgroundColor, buttonSize, disabledCursor]"
    :disabled="disabled"
  >
    <Icon v-if="icon" size="small" :name="icon" />
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
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
  }
});

const disabledCursor = computed(() =>
  props.disabled
    ? 'bg-transparent text-gray-300 dark:text-slate-700 cursor-not-allowed'
    : 'text-slate-700 dark:text-slate-400 transition ease-in-out delay-100 hover:opacity-80 duration-250'
);

const colorClassMap: { [key: string]: string } = {
  primary: '',
  default: '',
  ghost: 'bg-transparent',
  success: 'bg-green-400',
  error: 'bg-red-400'
};

const backgroundColor = computed(() => colorClassMap[props.theme]);

const sizeClassMap: { [key: string]: string } = {
  small: 'h-6 px-1 py-0',
  default: 'h-8 px-2 py-1',
  large: 'h-10 px-4 py-2'
};
const buttonSize = computed(() => sizeClassMap[props.size]);
</script>
