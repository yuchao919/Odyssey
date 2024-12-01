import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:60801/api",
  headers: {
    "Content-type": "application/json"
  }
});
