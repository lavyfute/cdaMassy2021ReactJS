import axios from "axios";

const customAxios = axios.create({
  baseURL: 'http://localhost:8080/api/',

  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
  },
})

export default customAxios;