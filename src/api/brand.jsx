import axios from "axios";
import { base_url } from "../utils/baseUrl";
import { config } from "../utils/axiosConfig";

export const getBrands = async () => {
  const response = await axios.get(`${base_url}brand/`);

  return response.data;
};
export const createBrand = async (brand) => {
  const response = await axios.post(`${base_url}brand/`, brand, config);

  return response.data;
};

export const updateBrand = async (brand) => {
  const response = await axios.put(
    `${base_url}brand/${brand.id}`,
    { title: brand.brandData.title },
    config
  );

  return response.data;
};
export const getBrand = async (id) => {
  const response = await axios.get(`${base_url}brand/${id}`, config);

  return response.data;
};

export const deleteBrand = async (id) => {
  const response = await axios.delete(`${base_url}brand/${id}`, config);

  return response.data;
};
