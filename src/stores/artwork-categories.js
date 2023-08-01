import {defineStore} from "pinia";
import axios from "axios";

export const useArtworkCategoriesStore = defineStore("artwork-categories", {
  state: () => ({
    data: [],
    authErrors: [],
  }),
  getters: {
    errors: (state) => state.authErrors,
    category: (state) => state.data,
    categories: (state) => state.data,
  },
  actions: {
    async getArtworkCategories() {
      const params = {
        // "pageSize": 50,
        // "includeArtworks": true,
        // "isPaginate": false,
      }

      const filters = new URLSearchParams(params);
      const data = await axios.get("/api/v1/artwork-categories?" + filters.toString());
      this.data = data.data;
    },
    async showArtworkCategory(id) {
      const params = {
        // "includeArtworks": true,
      }

      const filters = new URLSearchParams(params);
      try {
        const artworkCategory = await axios.get(`/api/v1/artwork-categories/${id}?${filters.toString()}`);
        this.data = artworkCategory.data.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
});