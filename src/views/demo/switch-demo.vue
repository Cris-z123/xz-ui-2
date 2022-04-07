<template>
  <div class="relative rounded-xl overflow-auto p-8">
    <Switch v-model:checked="checked" />
  </div>

  <div class="relative rounded-xl overflow-auto p-8">
    <Switch v-model:checked="checked" disabled />
  </div>

  <div class="relative rounded-xl overflow-auto p-8">
    <Switch v-model:checked="checked" size="small" />
  </div>

  <div class="relative rounded-xl overflow-auto p-8">
    <Switch v-model:checked="checked" :loading="true">a</Switch>
  </div>
</template>

<script setup lang="ts">
import Switch from 'components/Switch.vue';
import { ref } from 'vue';

const checked = ref<boolean>(false);
</script>
