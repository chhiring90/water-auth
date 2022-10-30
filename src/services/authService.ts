import axios from "axios";
import { API } from "../constants";
import { userCredential } from "../context";

const BASEURL = "https://fire-auth.onrender.com";

export async function signupService(creds: userCredential) {
  return axios
    .post(BASEURL + API.SIGNUP, {
      ...creds,
    })
    .then((res) => res)
    .catch((err) => err);
}

export async function getMeService(token: string) {
  return axios
    .get(BASEURL + API.ME, {
      headers: {
        ["Authorization"]: `Bearer ${token}`,
      },
    })
    .then((res) => res)
    .catch((err) => err);
}

export async function signinService(creds: userCredential) {
  return axios
    .post(BASEURL + API.SIGNIN, {
      ...creds,
    })
    .then((res) => res)
    .catch((err) => err);
}

export async function signoutService() {
  return axios
    .post(BASEURL + API.SIGNOUT)
    .then((res) => res)
    .catch((err) => err);
}
