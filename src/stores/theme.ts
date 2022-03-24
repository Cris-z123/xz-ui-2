import { defineStore } from 'pinia';

export const useTheme = defineStore('theme', {
  state: () => {
    return {
      theme: 'sun'
    };
  },

  getters: {},

  actions: {
    setTheme(theme: string) {
      if (this.theme === 'sun') {
        document.documentElement.classList.add('dark');
        this.theme = 'dark';
      } else if (this.theme === 'dark') {
        document.documentElement.classList.remove('dark');
        this.theme = 'sun';
      } else {
        this.theme = theme;
      }
    },

    getTheme() {
      const { theme } = JSON.parse(localStorage.theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'theme',
        storage: localStorage
      }
    ]
  }
});
