import axios from "axios";

export const axiosInstance = axios.create({
  baseUrl: "https://travelpinapp2022.herokuapp.com/api/",
});
