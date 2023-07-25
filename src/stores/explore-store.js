import {defineStore} from "pinia";
import axios from "axios";

export const useExploreStore = defineStore("explore-store", {
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
    async getToken() {
      await axios.get("/sanctum/csrf-cookie");
    },
    async getArtworks() {
      const params = {
        "pageSize": 50,
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
      const artwork = await axios.get(`/api/v1/artworks/${id}?${filters.toString()}`);
      this.data = artwork.data.data;
    }
  },
  persist: true,
});