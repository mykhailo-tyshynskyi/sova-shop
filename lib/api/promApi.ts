import "server-only";
import axios from "axios";

const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

if (!API_URL || !API_TOKEN) {
  throw new Error("API_URL or API_TOKEN is not defined");
}

const promApi = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
    "X-LANGUAGE": "uk",
  },
});

export default promApi;