import axios from "axios";
import { APIENDPOINT } from "./apis";

export const api = axios.create({
  baseURL: APIENDPOINT,
});

export const getData = async (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: any
) => {
  try {
    const res = await api.request({
      method,
      url,
      data: body,
    });

    // console.log(url, method, body, res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
