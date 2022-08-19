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
      
    return fetch("http://165.232.80.134/test/admin/employee/getall", requestOptions)
        .then(response => response.json())
        .then(result => 
            {
              
                return result
            })
        .catch(error => console.log('error', error));
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


  

return  fetch("http://165.232.80.134/test/admin/employee/add", requestOptions)
  .then((response) => response.json())
  .then((result) => {
  
    return result;
  })
  .catch((error) => console.log("error", error));
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

return fetch(`http://165.232.80.134/test/admin/employee/update/status/${employeeId}`, requestOptions)
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
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

return fetch(`http://165.232.80.134/test/admin/employee/update/status/${employeeId}`, requestOptions)
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));
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
    
    fetch(`http://165.232.80.134/test/admin/employee/update/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    
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
      
   return   fetch(`http://165.232.80.134/test/admin/Employee/delete/${employeeId}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            return result
        })
        .catch(error => console.log('error', error));
}