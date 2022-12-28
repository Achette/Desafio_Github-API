import axios from "axios";
import { BASE_URL } from "../constants/system";

export const getGithubUser = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    headers: { "Content-type": "application/json" },
  });

  return instance;
};

export const api = getGithubUser(String(`${BASE_URL}`));
