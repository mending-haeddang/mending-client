import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:4000/",
});

export const getQuestions = async () => {
  try {
    const data = await client.get("leader");
    return data;
  } catch (e) {
    return null;
  }
};

export const getAnswers = async () => {
  try {
    const data = await client.get("melting");
    return data;
  } catch (e) {
    return null;
  }
};
