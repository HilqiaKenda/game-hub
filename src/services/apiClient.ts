import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c7b18323a47d40c394ea5b019646b1f5",
    // key: "4ae631315a9d4a2ba36d8385054f2023",
    // 0bc84af3a33e48f4a73f8089ac026106
  },
});
