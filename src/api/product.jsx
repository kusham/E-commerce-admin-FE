import axios from "axios";
import { base_url } from "../utils/baseUrl";
import { config } from "../utils/axiosConfig";


export const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);

  return response.data;
};

export const createProduct = async (product) => {
    const response = await axios.post(`${base_url}product/`, product, config);
  
    return response.data;
  };