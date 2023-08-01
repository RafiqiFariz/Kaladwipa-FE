import {defineStore} from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    authErrors: [],
  }),
  getters: {
    user: (state) => state.authUser,
    errors: (state) => state.authErrors,
  },
  actions: {
    async getToken() {
      await axios.get("/sanctum/csrf-cookie");
    },
    async getUser() {
      await this.getToken();
      const user = await axios.get("/api/user");
      this.authUser = user.data;
    },
    async login(data) {
      this.authErrors = [];
      await this.getToken();


      try {
        await axios.post(`/login`, {
          email: data.email,
          password: data.password,
        });

        await this.getUser();
        await this.router.push({name: 'home'});

        alert("Login berhasil!");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async register(data) {
      this.authErrors = [];
      await this.getToken();

      try {
        await axios.post("/register", {
          name: data.name,
          email: data.email,
          password: data.password,
        });

        await this.getUser();
        await this.router.push({name: 'home'});

        alert("Pendaftaran berhasil!");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    },
    async logout() {
      try {
        const answer = confirm("Apakah Anda yakin ingin keluar?");
        if (answer) {
          await axios.post('/logout');
          await this.router.push({name: 'home'});
          this.authUser = null;
        }
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    }
  },
  persist: true,
});