import {defineStore} from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
  }),
  getters: {
    user: (state) => state.authUser,
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
      try {
        await this.getToken();
        await axios.post(`/login`, {
          email: data.email,
          password: data.password,
        });

        await this.router.push({name: 'home'});

        alert("Login berhasil!");
      } catch (error) {
        console.log(error);
      }
    },
    async register(data) {
      try {
        await this.getToken();
        await axios.post("/register", {
          name: data.name,
          email: data.email,
          password: data.password,
        });

        await this.router.push({name: 'home'});

        alert("Pendaftaran berhasil!");
      } catch (error) {
        console.log(error);
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
        console.log(error);
      }
    }
  }
});