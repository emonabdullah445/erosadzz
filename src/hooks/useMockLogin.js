"use client";
import Cookies from "js-cookie";
import { API_URL } from "../config/index.js";

function useMockLogin(adminId, posterId) {
  const login = async (values) => {
    // console.log(values);

    const url = `${API_URL}/ad/${adminId}/${posterId}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    console.log(data);

    if (res.ok) {
      console.log("success", data);
      Cookies.set("email", data?.info?.email);
      Cookies.set("id", data?.info?._id);
    } else {
      console.log("error", data);
    }
  };

  return { login };
}

export default useMockLogin;
