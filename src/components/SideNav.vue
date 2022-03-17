<template>
  <div
    class="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto"
  >
    <nav class="lg:text-sm lg:leading-6 relative">
      <ul>
        <li class="mt-12 lg:mt-8">
          <h5
            class="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200"
          >
            基础组件
          </h5>
          <ul
            class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800"
          >
            <li>
              <router-link
                class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                to="/doc/switch"
              >
                Switch
              </router-link>
            </li>
            <li>
              <router-link
                class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                to="/doc/button"
              >
                Button
              </router-link>
            </li>
            <li>
              <router-link
                class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                to="/doc/dialog"
              >
                Dialog
              </router-link>
            </li>
            <li>
              <router-link
                class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                to="/doc/tabs"
              >
                Tabs
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>
