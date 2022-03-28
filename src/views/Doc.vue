<template>
  <Header />
  <div class="content">
    <SideNav />
    <Content />
  </div>
</template>

<script setup lang="ts">
import Header from '@/layout/Header.vue';
import SideNav from '@/layout/SideNav.vue';
import Content from '@/layout/Content.vue';
</script>
