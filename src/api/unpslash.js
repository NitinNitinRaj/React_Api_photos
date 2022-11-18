import axios from "axios";

const KEY = "9kK8rfRzczn34BqXtXf98z4QQUqBZGvkK2BhcWMZ_Hc";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID " + KEY,
  },
});
