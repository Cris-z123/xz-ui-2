<template>
  <Header />
  <div class="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
    <div class="flex justify-center items-center">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <h1
      class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white"
    >
      XZ-UI
    </h1>
    <h2
      class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400"
    >
      一个基于Vue3.x简单好用的UI组件库
    </h2>
    <div class="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
      <router-link
        class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
        to="/doc"
      >
        开始
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from 'components/Header.vue';
</script>
