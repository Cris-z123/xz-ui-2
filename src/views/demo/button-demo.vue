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
    <Button type="primary">primary</Button>
    <Button type="default">default</Button>
    <Button type="ghost">ghost</Button>
    <Button type="success">success</Button>
    <Button type="error">error</Button>
    <Button type="dashed">dashed</Button>
    <Button type="text">text</Button>
    <Button type="link">text</Button>
  </div>
  <div class="relative rounded-xl overflow-auto p-8">
    <Button shape="circle">circle</Button>
  </div>
  <div class="relative rounded-xl overflow-auto p-8">
    <Button :loading="true" icon="add">loading</Button>
    <Button :loading="true">loading</Button>
    <Button :loading="false">loading</Button>
  </div>
</template>

<script setup lang="ts">
import Button from 'components/Button.vue';
</script>
