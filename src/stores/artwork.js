import {defineStore} from "pinia";
import axios from "axios";
import {useAuthStore} from "@/stores/auth.js";

const authStore = useAuthStore();

export const useArtworkStore = defineStore("artwork", {
  state: () => ({
    data: [],
    authErrors: [],
  }),
  getters: {
    errors: (state) => state.authErrors,
    artwork: (state) => state.data,
    artworks: (state) => state.data,
  },
  actions: {
    async getArtworks() {
      const params = {
        "pageSize": 200,
        "includeTags": true,
        "includeImages": true,
        "includeLikes": true,
        "includeUser": true,
        "includeCategories": true,
      }

      const filters = new URLSearchParams(params);
      const data = await axios.get("/api/v1/artworks?" + filters.toString());
      this.data = data.data;
    },
    async showArtwork(id) {
      const params = {
        "includeTags": true,
        "includeImages": true,
        "includeLikes": true,
        "includeUser": true,
        "includeCategories": true,
      }

      const filters = new URLSearchParams(params);
      try {
        const artwork = await axios.get(`/api/v1/artworks/${id}?${filters.toString()}`);
        this.data = artwork.data.data;
      } catch (e) {
        console.log(e);
      }
    },
    async storeArtwork(data) {
      try {
        let newData = data;
        newData.software_used = newData.software_used.software_used;
        newData.categories = newData.categories.categories;
        newData.tags = newData.tags.tags;

        await axios.post(
            "/api/v1/artworks", newData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
        );

        // await this.router.push({name: 'home'});
        alert("Upload Karya berhasil!");
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors;
        }
      }
    }
  },
});