import { API_ADMIN_UPDATE_EMPLOYEE,  API_ADMIN_ADD_EMPLOYEE, API_ADMIN_DELETE_EMPLOYEE, API_ADMIN_EDIT_EMPLOYEE, API_ADMIN_GET_EMPLOYEE, API_BASE_URL } from "./api-config";
import authHeader from "./auth-header";

export async function getAllEmployees (){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
    return fetch(API_BASE_URL+API_ADMIN_GET_EMPLOYEE, requestOptions)
        .then(response => response.json())
        .then(result => 
            {
              
                return result
            })
        .catch(error => error);
}


export async function addEmployee(employee){
 
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  firstName: employee.firstName,
  lastname: employee.lastName,
  email: employee.email,
  phoneNumber:employee.phoneNumber,
  password: employee.password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};


  

return  fetch(API_BASE_URL+API_ADMIN_ADD_EMPLOYEE, requestOptions)
  .then((response) => response.json())
  .then((result) => {
  
    return result;
  })
  .catch((error) => error);
}


export async function blockEmployee(employeeId){
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

return fetch(API_BASE_URL+API_ADMIN_UPDATE_EMPLOYEE+employeeId, requestOptions)
  .then(response => response.json())
  .then(result => result)
  .catch(error => error);
}

export async function unBlockEmployee(employeeId){
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

return fetch(API_BASE_URL+API_ADMIN_UPDATE_EMPLOYEE+employeeId, requestOptions)
  .then(response => response.json())
  .then(result => result)
  .catch(error => error);
}

export async function editEmployee(id, firstName , lastName , phoneNumber, email, password){
    

   
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "firstName":firstName,
      "lastname": lastName,
      "phoneNumber":phoneNumber,
      "email": email,
      "password": password
    });
    
    var requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    return fetch ( API_BASE_URL+API_ADMIN_EDIT_EMPLOYEE+ id, requestOptions)
      .then(response => response.json())
      .then(result => result)
      .catch(error => error);
    
}

export async function deleteEmployee(employeeId){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
   
        redirect: 'follow'
      };
      
   return   fetch( API_BASE_URL+API_ADMIN_DELETE_EMPLOYEE+ employeeId, requestOptions)
        .then(response => response.json())
        .then(result => {

            return result
        })
        .catch(error => error);
}