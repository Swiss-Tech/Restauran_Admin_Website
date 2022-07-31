import authHeader from "./auth-header";



export function getAllCategory(){

    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
   return fetch("http://165.232.80.134/test/admin/Menu/category/getall", requestOptions)
      .then(response => response.json())
      .then(result =>{
        
        return result;
      })
      .catch(error => console.log('error', error));


}

export function addCategory(){
  
var token = authHeader();
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "categoryName": "Piza"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};


fetch("http://165.232.80.134/test/admin/Menu/category/add", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}


export function updateCategory(){
  var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
var raw = JSON.stringify({
  "categoryName": "Whats up"
});

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://165.232.80.134/test/admin/Menu/category/edit/88e05722-70f1-489e-b0c6-f352aa7c92fe", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

export function deleteCategory(){
  var token = authHeader();
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "categoryName": "Whats up"
});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://165.232.80.134/test/admin/Menu/category/delete/88e05722-70f1-489e-b0c6-f352aa7c92fe", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}