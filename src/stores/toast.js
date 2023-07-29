import {defineStore} from "pinia";

export const useToastStore = defineStore("toast", {
  state: () => ({
    type: '',
    isToastVisible: false,
    toastMessage: '',
  }),
  getters: {
    isVisible: (state) => state.isToastVisible,
    message: (state) => state.toastMessage,
  },
  actions: {
    showToast(type, message) {
      this.isToastVisible = !this.isToastVisible;
      this.type = type;
      this.toastMessage = message;

      setTimeout(() => {
        this.isToastVisible = !this.isToastVisible;
      }, 3000);
    },
    setIsVisible(val) {
      this.isToastVisible = val;
    }
  },
});