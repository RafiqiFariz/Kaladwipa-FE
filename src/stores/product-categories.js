import {defineStore} from "pinia";
import axios from "axios";

export const useProductCategories = defineStore("product-categories", {
  state: () => ({
    data: [],
    authErrors: [],
  }),
  getters: {
    errors: (state) => state.authErrors,
    productCategory: (state) => state.data,
    productCategories: (state) => state.data,
  },
  actions: {
    async getProductCategories() {
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
      const data = await axios.get("/api/v1/product-categories?" + filters.toString());
      this.data = data.data;
    },
    async showProductCategory(id) {
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
        const product = await axios.get(`/api/v1/product-categories/${id}?${filters.toString()}`);
        this.data = product.data.data;
      } catch (e) {
        console.log(e);
      }
    }
  },
});