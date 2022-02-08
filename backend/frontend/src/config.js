import axios from "axios";

export const axiosInstance = axios.create({
  baseUrl: "https://travelpinapp22.herokuapp.com/api/",
});
