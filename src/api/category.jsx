import axios from "axios";
import { base_url } from "../utils/baseUrl";
import { config } from "../utils/axiosConfig";

export const getProductCategories = async () => {
  const response = await axios.get(`${base_url}category/`);

  return response.data;
};

export const createCategory = async (category) => {
    const response = await axios.post(`${base_url}category/`, category, config);
  
    return response.data;
  };

 export const getProductCategory = async (id) => {
    const response = await axios.get(`${base_url}category/${id}`, config);
  
    return response.data;
  };