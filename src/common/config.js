export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://devoptpfinal.herokuapp.com/"
    : "http://localhost:2020/api";
export default API_URL;
