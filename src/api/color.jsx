import axios from "axios";
import { base_url } from "../utils/baseUrl";
import { config } from "../utils/axiosConfig";

export const getColors = async () => {
  const response = await axios.get(`${base_url}color/`);

  return response.data;
};

export const createColor = async (color) => {
  const response = await axios.post(`${base_url}color/`, color, config);

  return response.data;
};

export const updateColor = async (color) => {
    const response = await axios.put(
      `${base_url}color/${color.id}`,
      { title: color.colorData.title },
      config
    );
  
    return response.data;
  };

  export const getColor = async (id) => {
    const response = await axios.get(`${base_url}color/${id}`, config);
  
    return response.data;
  };