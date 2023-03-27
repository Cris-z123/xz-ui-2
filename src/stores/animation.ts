import { defineStore } from 'pinia';

export const useAnimation = defineStore('animation', {
  state: () => {
    return {
      menuVisible: true
    };
  },

  getters: {},

  actions: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
  }
});
