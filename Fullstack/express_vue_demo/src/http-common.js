import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:38080/api",
    headers: {
        "Content-type": "application/json"
    }
});