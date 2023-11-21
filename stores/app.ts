import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    return {
      isDarkTheme: false,
    }
  },
  actions: {
  },
  persist: true,
})
