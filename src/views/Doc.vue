<template>
  <Header />
  <div class="content max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
    <SideNav />
    <Content />
  </div>
</template>

<script setup lang="ts">
import Header from '@/layout/Header.vue';
import SideNav from '@/layout/SideNav.vue';
import Content from '@/layout/Content.vue';
</script>
