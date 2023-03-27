import axios from "axios";
import { base_url } from "../utils/baseUrl";

export const getUsers = async () => {
    const response = await axios.get(`${base_url}user/all-users`);
  
    return response.data;
  };