import { API_ADMIN_GET_ALL_CUSTOMER, API_ADMIN_UPDATE_CUSTOMER, API_ADMIN_UPDATE_CUSTOMER_STATUS, API_BASE_URL } from "./api-config";
import authHeader from "./auth-header";

export async function getAllCustomers(){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

 return fetch(API_BASE_URL+API_ADMIN_GET_ALL_CUSTOMER, requestOptions)
  .then(response => response.json())
  .then(result => {
    
    return result;
  })
  .catch(error => error);
}


export async function blockCustomer(customerId ){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "status": 1
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
   return fetch(API_BASE_URL+API_ADMIN_UPDATE_CUSTOMER+customerId, requestOptions)
      .then(response => response.json())
      .then(result => {
        
        return result;
      })
      .catch(error =>error);

}


export async function unBlockCustomer(customerId ){
  var token = authHeader();
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "status": 0
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
 return fetch(API_BASE_URL+API_ADMIN_UPDATE_CUSTOMER_STATUS+customerId, requestOptions)
    .then(response => response.json())
    .then(result => {
      
      return result;
    })
    .catch(error => error);
}
