import http from "./httpService";

import jwtDecode from "jwt-decode";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/auth";
const jwtTokenKey = "token";

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(jwtTokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(jwtTokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(jwtTokenKey);
    return jwtDecode(jwt);
  } catch (error) {}
}

export function loginWithJwt(headers) {
  localStorage.setItem(jwtTokenKey, headers["x-auth-token"]);
}

export function getJwt() {
  return localStorage.getItem("token");
}

http.setJwt(getJwt());

const auth = {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
};

export default auth;
