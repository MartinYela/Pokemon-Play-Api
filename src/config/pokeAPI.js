import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.URL;

const pokeApi = axios.create({
  baseURL: url,
});

export default pokeApi;
