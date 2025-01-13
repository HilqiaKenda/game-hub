import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5a28edfe903d4b56966b0bb1d7a80468",
  },
});
