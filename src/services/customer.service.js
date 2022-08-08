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

 return fetch("http://165.232.80.134/test/admin/Customer/getcustomerdata", requestOptions)
  .then(response => response.json())
  .then(result => {
   
    return result;
  })
  .catch(error => console.log('error', error));
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
    
   return fetch(`http://165.232.80.134/test/admin/customer/update/status/${customerId}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        return result;
      })
      .catch(error => console.log('error', error));

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
  
 return fetch(`http://165.232.80.134/test/admin/customer/update/status/${customerId}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      return result;
    })
    .catch(error => console.log('error', error));
}
