<template>
  <Switch v-model:checked="checked" />
</template>

<script setup lang="ts">
import Switch from 'components/Switch.vue';
import { ref } from 'vue';

const checked = ref<boolean>(false);
</script>
