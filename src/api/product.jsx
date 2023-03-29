import axios from "axios";
import { base_url } from "../utils/baseUrl";


export const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);

  return response.data;
};