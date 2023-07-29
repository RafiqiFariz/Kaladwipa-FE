import {defineStore} from "pinia";
import axios from "axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    data: [],
    authErrors: [],
  }),
  getters: {
    errors: (state) => state.authErrors,
    product: (state) => state.data,
    products: (state) => state.data,
  },
  actions: {
    async getProducts() {
      const params = {
        "pageSize": 50,
        "includeUser": true,
        "includeCategories": true,
        "includeImages": true,
        "includeFiles": true,
        "includeSoftware": true,
        "includeAffiliateLinks": true,
      }

      const filters = new URLSearchParams(params);
      const data = await axios.get("/api/v1/products?" + filters.toString());
      this.data = data.data;
    },
    async showProduct(id) {
      const params = {
        "pageSize": 50,
        "includeUser": true,
        "includeCategories": true,
        "includeImages": true,
        "includeFiles": true,
        "includeSoftware": true,
        "includeAffiliateLinks": true,
      }

      const filters = new URLSearchParams(params);
      try {
        const product = await axios.get(`/api/v1/products/${id}?${filters.toString()}`);
        this.data = product.data.data;
      } catch (e) {
        console.log(e);
      }
    }
  },
});