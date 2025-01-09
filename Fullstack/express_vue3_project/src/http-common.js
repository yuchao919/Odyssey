import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:58080/api",
    headers: {
        "Content-type": "application/json"
    }
});