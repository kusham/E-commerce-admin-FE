import axios from "axios";
import { base_url } from "../utils/baseUrl";
import { config } from "../utils/axiosConfig";

const getProductCategories = async () => {
  const response = await axios.get(`${base_url}category/`);

  return response.data;
};

const createCategory = async (category) => {
    const response = await axios.post(`${base_url}category/`, category, config);
  
    return response.data;
  };