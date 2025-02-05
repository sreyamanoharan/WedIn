import axios from "axios";

const Axios = axios.create({
  baseURL: "https://wedding-wi9l.onrender.com", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;