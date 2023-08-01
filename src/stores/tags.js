import {defineStore} from "pinia";
import axios from "axios";

export const useTagsStore = defineStore("tags", {
  state: () => ({
    data: [],
    authErrors: [],
  }),
  getters: {
    errors: (state) => state.authErrors,
    tag: (state) => state.data,
    tags: (state) => state.data,
  },
  actions: {
    async getTags() {
      const params = {
        // "pageSize": 50,
        // "includeArtworks": true,
        // "isPaginate": true,
      }

      const filters = new URLSearchParams(params);
      const data = await axios.get("/api/v1/tags?" + filters.toString());
      this.data = data.data;
    },
    async showTag(id) {
      const params = {
        // "includeArtworks": true,
      }

      const filters = new URLSearchParams(params);
      try {
        const tag = await axios.get(`/api/v1/tags/${id}?${filters.toString()}`);
        this.data = tag.data.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
});