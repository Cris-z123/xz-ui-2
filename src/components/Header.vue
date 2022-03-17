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
            class="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
            to="/"
          >
            <img
              src="../assets/logo.png"
              alt="xz-ui"
              class="inline w-auto h-5"
            />
            <span class="text-slate-900 dark:text-white w-auto h-5">
              xz-ui-2
            </span>
          </router-link>
          <div class="relative hidden lg:flex items-center ml-auto">
            <nav
              class="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200"
            >
              <ul class="flex space-x-8">
                <li>
                  <router-link
                    class="hover:text-sky-500 dark:hover:text-sky-400"
                    to="/doc/"
                  >
                    文档
                  </router-link>
                </li>
              </ul>
            </nav>
            <div
              class="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800"
            >
              <button>切换</button>
              <a
                href="https://github.com/Cris-z123/xz-ui-2"
                target="_black"
                class="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light';

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark';

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme');
</script>
