import {defineStore} from "pinia";
import axios from "axios";

export const useArticleStore = defineStore("article", {
  state: () => ({
    data: [],
    authErrors: [],
  }),
  getters: {
    errors: (state) => state.authErrors,
    article: (state) => state.data,
    articles: (state) => state.data,
  },
  actions: {
    async getArticles() {
      const params = {
        "pageSize": 50,
        // "userId": 1,
        "includeUser": true,
      }

      const filters = new URLSearchParams(params);
      const data = await axios.get("/api/v1/articles?" + filters.toString());
      this.data = data.data;
    },
    async showArticle(id) {
      const params = {
        "includeUser": true,
      }

      const filters = new URLSearchParams(params);
      try {
        const article = await axios.get(`/api/v1/articles/${id}?${filters.toString()}`);
        this.data = article.data.data;
      } catch (e) {
        console.log(e);
      }
    }
  },
});