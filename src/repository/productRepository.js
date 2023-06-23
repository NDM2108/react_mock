import axios from "axios";
import { apiPaths } from "../constant/apiPaths";

export const productRepository = {
  getAllProducts: async () => {
    const response = await axios.get(apiPaths.getProducts);
    return response.data;
  },
  getProductById: async (id) => {
    const response = await axios.get(apiPaths.getProducts + id);
    return response.data;
  },
  searchProducts: async (keyword) => {
    const response = await axios.get(apiPaths.search, {
      params: {
        keyword: keyword,
      },
    });
    return response.data;
  },
};
