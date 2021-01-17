export const API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_BACK_URL || "https://devopstpfinal-front.herokuapp.com/api"
    : "http://localhost:2020/api";
export default API_URL;
