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
  export const deleteProductCategory = async (id) => {
    const response = await axios.delete(`${base_url}category/${id}`, config);
  
    return response.data;
  };

export const updateProductCategory = async (category) => {
    console.log(category);
    const response = await axios.put(
      `${base_url}category/${category.id}`,
      { title: category.pCatData.title },
      config
    );
  
    return response.data;
  };