import axios from "axios";
import { base_url } from "../utils/baseUrl";
import { config } from "../utils/axiosConfig";

export const uploadImg = async (data) => {
  const response = await axios.post(`${base_url}upload/`, data, config);
  return response.data;
};

export const deleteImg = async (id) => {
    const response = await axios.delete(
      `${base_url}upload/delete-img/${id}`,
  
      config
    );
    return response.data;
  };