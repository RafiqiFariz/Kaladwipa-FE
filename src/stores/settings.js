import {defineStore} from "pinia";
import axios from "axios";
import {useAuthStore} from "@/stores/auth.js";

const authStore = useAuthStore();

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    authErrors: [],
  }),
  getters: {
    errors: (state) => state.authErrors,
  },
  actions: {
    async updateProfile(data) {
      try {
        await axios.put(`user/profile-information`, {
          name: data.name,
          email: data.email,
        });

        await authStore.getUser();
        alert("Data profil berhasil diubah.");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async updatePassword(data) {
      try {
        await axios.put(`user/password`, data);

        alert("Password berhasil diubah.");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    }
  }
});