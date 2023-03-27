<template>
  <button
    class="relative rounded-full ease-in-out duration-300"
    :class="[
      backgroundColor,
      outsideSize,
      disabledCursor,
      { 'animate-ripples': showClickAnimate }
    ]"
    type="button"
    :disabled="disabled"
    @click="toggleSwitch"
  >
    <span
      class="absolute top-1 left-1 bg-white rounded-full transition-transform"
      :class="[insideSize, toggleAnimation]"
    >
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, Ref, ref } from 'vue';

const props = defineProps({
  checked: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const showClickAnimate: Ref<boolean> = ref(false);

const emits = defineEmits(['update:checked']);

const backgroundColor = computed(() =>
  props.checked ? 'bg-current' : 'bg-zinc-400'
);

const outsideSize = computed(() =>
  props.size === 'default' ? 'w-11 h-6' : 'w-7 h-4'
);

const insideSize = computed(() =>
  props.size === 'default' ? 'w-4 h-4' : 'w-2 h-2'
);

const toggleAnimation = computed(() =>
  props.checked
    ? props.size === 'default'
      ? 'translate-x-5'
      : 'translate-x-3'
    : 'translate-x-0'
);

const disabledCursor = computed(() =>
  props.disabled || props.loading ? 'cursor-not-allowed' : ''
);

const toggleSwitch = () => {
  if (!props.disabled && !props.loading) {
    showClickAnimate.value = !showClickAnimate.value;
    setTimeout(() => {
      showClickAnimate.value = !showClickAnimate.value;
    }, 300);
  }

  emits('update:checked', !props.checked);
};
</script>
