<template>
  <div class="relative rounded-xl overflow-auto p-8">
    <Button icon="add">icon</Button>
  </div>
  <div class="relative rounded-xl overflow-auto p-8">
    <Button size="small">small</Button>
    <Button size="default">default</Button>
    <Button size="large">large</Button>
  </div>
  <div class="relative rounded-xl overflow-auto p-8">
    <Button disabled>disabled</Button>
  </div>
  <div class="relative rounded-xl overflow-auto p-8">
    <Button theme="primary">primary</Button>
    <Button theme="default">default</Button>
    <Button theme="ghost">ghost</Button>
    <Button theme="success">success</Button>
    <Button theme="error">error</Button>
    <Button theme="dashed">dashed</Button>
    <Button theme="text">text</Button>
  </div>
  <div class="relative rounded-xl overflow-auto p-8">
    <Button shape="circle">circle</Button>
  </div>
  <div class="relative rounded-xl overflow-auto p-8">
    <Button :loading="true" icon="add">loading</Button>
  </div>
</template>

<script setup lang="ts">
import Button from 'components/Button.vue';
</script>
