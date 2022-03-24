<template>
  <span class="text-dark-600 dark:text-dark-900" :class="iconSize">
    <span class="iconify" :data-icon="symbolId" :data-line="props.isLine" />
  </span>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  suffix: {
    type: String,
    default: 'line',
    validator: function (value: string) {
      return ['line', 'fill'].indexOf(value) !== -1;
    }
  },
  isLine: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'default'
  }
});

const symbolId = computed(() => `ri:${props.name}-${props.suffix}`);

const iconSize = computed(() => iconSizeEnum[props.size]);

const iconSizeEnum: { [key: string]: string } = reactive({
  small: 'text-2xl',
  default: 'text-3xl',
  large: 'text-4xl'
});
</script>
