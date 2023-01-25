import axios from "axios";
import { BASE_URL } from "../constants/system";

export const ApiGithub = {
  getByUserName: async (user: string) => {
    const response = await axios.get(`${BASE_URL}/${user}`);
    
    return response.data;
  },
};
