import axios, { AxiosRequestConfig } from "axios";

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers["app-id"] = "613879ff03cffe1711ca5de6";
  return config;
});

// TODO: typing axios and responses respectively

const BASE_URL = "https://dummyapi.io/data/v1/";

export async function fetchUsers(paginationStep: number) {
  return await axios.get(`${BASE_URL}user?page=` + paginationStep);
}

export async function fetchUserDetails(userId: string) {
  return await axios.get(`${BASE_URL}user/${userId}`);
}
