<template>
  <div class="fixed w-full h-full bg-white z-40"></div>
  <div class="fixed top-2/4 left-2/4 shadow z-50">
    <header class="flex items-center justify-between px-4 py-3 border-b">
      <h3>标题</h3>
      <Button icon="close" type="text" />
    </header>
    <main class="px-4 py-3">内容</main>
    <footer class="text-right px-4 py-3 border-t">
      <Button size="small">确认</Button>
      <Button type="default" size="small">取消</Button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Button from './Button.vue';
</script>
