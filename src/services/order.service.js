import authHeader from "./auth-header";
import { API_BASE_URL } from "./api-config";
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
 
 return fetch("http://165.232.80.134/test/admin/Order/getall", requestOptions)
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

return fetch(`http://165.232.80.134/test/admin/order/update/status/${orderId}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    return result
  })
  .catch(error => console.log('error', error));
}




