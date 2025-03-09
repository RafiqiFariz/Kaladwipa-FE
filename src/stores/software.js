import {defineStore} from "pinia";
import axios from "axios";

export const useSoftwareStore = defineStore("software", {
  state: () => ({
    data: [],
    authErrors: [],
  }),
  getters: {
    errors: (state) => state.authErrors,
    software: (state) => state.data,
  },
  actions: {
    async getSoftware() {
      const params = {
        // "pageSize": 50,
        // "includeArtworks": true,
      }

      const filters = new URLSearchParams(params);
      const data = await axios.get("/api/v1/software?" + filters.toString());
      this.data = data.data;
    },
    async showSoftware(id) {
      const params = {
        "includeArtworks": true,
      }

      const filters = new URLSearchParams(params);
      try {
        const software = await axios.get(`/api/v1/software/${id}?${filters.toString()}`);
        this.data = software.data.data;
      } catch (e) {
        console.log(e);
      }
    },
    async storeSoftware(data) {
      try {
        await axios.post(
            "/api/v1/software", data,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
        );

        // await this.router.push({name: 'home'});
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    }
  },
});