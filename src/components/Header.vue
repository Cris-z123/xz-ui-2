<template>
  <div
    class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
  >
    <div class="max-w-8xl mx-auto">
      <div
        class="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0"
      >
        <div class="relative flex items-center">
          <router-link
            class="mr-3 ml-10 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
            to="/"
          >
            <img
              src="../assets/logo.png"
              alt="xz-ui"
              class="inline w-auto h-7"
            />
            <span class="text-slate-900 dark:text-white text-lg">
              xz-ui-2
            </span>
          </router-link>
          <div class="relative lg:flex items-center ml-auto">
            <router-link
              class="flex space-x-8 items-center text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400"
              to="/doc/"
            >
              文档
            </router-link>
            <div
              class="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800"
            >
              <button @click="toggleDarkMode">
                <Icon v-if="themeIcon === 'sun'" name="sun" />
                <Icon v-else-if="themeIcon === 'moon'" name="moon" />
              </button>
              <a
                href="https://github.com/Cris-z123/xz-ui-2"
                target="_black"
                class="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              >
                <Icon name="github" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex items-center p-4 border-b border-slate-900/10 lg:hidden dark:border-slate-50/[0.06]"
      >
        <button
          type="button"
          class="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        >
          <Icon name="menu" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from 'components/Icon.vue';
import { useTheme } from '@/stores/theme';
import { storeToRefs } from 'pinia';
import { computed, onMounted } from 'vue';

const themeStore = useTheme();
const { theme } = storeToRefs(themeStore);

const themeIcon = computed(() => (theme.value === 'sun' ? 'sun' : 'moon'));

onMounted(() => themeStore.getTheme());

const toggleDarkMode = () => {
  themeStore.setTheme(theme);
};

onMounted(() => themeStore.getTheme());
</script>
