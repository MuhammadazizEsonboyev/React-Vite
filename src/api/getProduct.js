import axios from "axios";

export const getProduct = url => {
  return axios.get(url);
};
