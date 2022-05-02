import axios from "axios";
export const API_URL = `http://localhost:5000/items`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export const getItems = () => axios.get(API_URL);
export const createItem = (item) => axios.post(API_URL, item);

export default $api;
