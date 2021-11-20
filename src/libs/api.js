import axios from "axios";

export const client = axios.create({
  baseURL: "",
});

export const getData = () => {
  try {
    const { data } = client.get("");
    return data;
  } catch (e) {
    return null;
  }
};
