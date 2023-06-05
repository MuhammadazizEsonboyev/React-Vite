import axios from "axios";

export const postData = (url, obj) => {
  return axios.post(url, obj);
};
