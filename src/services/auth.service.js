
import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/auth";
import axios from "axios";

import {
  API_BASE_URL,
  API_ADMIN_LOGIN,
  API_ADMIN_REGISTER_URL,
  API_RESTAURANT_INFO_STATUS,
  API_ADMIN_STATUS,
} from "./api-config";

// check admin status

export async function checkAdminStatus(){

  axios({
    url:API_BASE_URL+API_ADMIN_STATUS,
    method:'GET',
  
  }).then((response)=>{
     localStorage.setItem("adminExist",JSON.stringify(response.data));
  }).catch();
}
// login function
export async function checkRestaurantStatus(){


  axios({
    url:API_BASE_URL+API_RESTAURANT_INFO_STATUS,
    method:'GET',
  
  }).then((response)=>{
   
     localStorage.setItem("restaurantExist",JSON.stringify(response.data));
   
  }).catch();

//   var myHeaders = new Headers();
//   var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
//   };
  
//  return fetch("http://165.232.80.134/test/admin/Auth/checkstatus", requestOptions)
//     .then(response => response.json())
//     .then(result => {
//       console.log(result);
//       return result;
//     })
//     .catch(error => console.log('error', error));
}
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
    credentials: "include",
    body: raw,
    redirect: "follow",
  };

  return fetch(API_BASE_URL + API_ADMIN_LOGIN, requestOptions)
    .then((response) => response.json())
    .then((result) => {
     
      if (result.success) {

        localStorage.setItem("isRefreshCalled", false);
        localStorage.setItem("token", JSON.stringify(result.data));
        localStorage.setItem("expires", JSON.stringify(result.expires));
        localStorage.setItem("logintime",JSON.stringify(Date()));
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
          
          localStorage.setItem("isRefreshCalled", false);
          localStorage.setItem("token", JSON.stringify(result.data));
          localStorage.setItem("expires", JSON.stringify(result.expires));
          localStorage.setItem("logintime",JSON.stringify(Date()));
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
  localStorage.removeItem("type");
  localStorage.removeItem("token");
  localStorage.removeItem("isRefreshCalled");
  localStorage.removeItem("expires");
  localStorage.removeItem("logintime");
   localStorage.removeItem("restaurantExist");
   localStorage.removeItem("adminExist");
}




export async function refresh_token(){

}