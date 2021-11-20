import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:4000/",
});

export const getQuestions = () => {
  try {
    const data = client.get("leader");
    return data;
  } catch (e) {
    return null;
  }
};

export const getAnswers = () => {
  try {
    const data = client.get("melting");
    return data;
  } catch (e) {
    return null;
  }
};
