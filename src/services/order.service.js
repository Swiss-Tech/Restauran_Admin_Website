import authHeader from "./auth-header";
import { API_ADMIN_GET_ALL_ORDER, API_ADMIN_UPDATE_ORDER, API_BASE_URL } from "./api-config";
// import url here
export async function getAllOrders (){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
 
 return fetch(API_BASE_URL+API_ADMIN_GET_ALL_ORDER, requestOptions)
  .then(response => response.json())
  .then(result => {
   
    return result;
  })
  .catch(error => console.log('error', error));
}


export  async function updateStatus(orderId, status){
  var token = authHeader();
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "status": status
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

return fetch(API_BASE_URL+API_ADMIN_UPDATE_ORDER+orderId, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    return result
  })
  .catch(error => console.log('error', error));
}




