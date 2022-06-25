import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/auth";
import {
  API_BASE_URL,
  API_ADMIN_LOGIN,
  API_ADMIN_REGISTER_URL,
} from "./api-config";

// login function

export async function login_function(admin) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: admin.email,
    password: admin.password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(API_BASE_URL + API_ADMIN_LOGIN, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        localStorage.setItem("token", JSON.stringify(result.data));
        return result;
      }

      return result;
    })
    .catch((error) => console.log("error", error));
}

// register admin
export async function register_function(user) {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      FirstName: user.firstName,
      LastName: user.lastName,
      Email: user.email,
      PhoneNumber: user.phoneNumber,
      Password: user.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return await fetch(API_BASE_URL + API_ADMIN_REGISTER_URL, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // if and else statement to store the token
        if (result.success) {
          localStorage.setItem("token", JSON.stringify(result.data));
          return result;
        }

        return result;
      })
      .catch((error) => console.log("error", error));
  } catch (e) {
    console.log(e);
  }
}

export async function logout_function() {
  localStorage.removeItem("token");
}

export async function firsttime_function() {
  console.log("first time function is called");
  localStorage.setItem("firsttime", false);
}

//
