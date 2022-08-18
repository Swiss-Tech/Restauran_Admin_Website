import { API_ADMIN_ADD_CATEGORY, API_ADMIN_DELETE_CATEGORY, API_ADMIN_GET_CATEGORIES, API_ADMIN_UPDATE_CATEGORY, API_BASE_URL } from "./api-config";
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
    
   return fetch(API_BASE_URL+API_ADMIN_GET_CATEGORIES, requestOptions)
      .then(response => response.json())
      .then(result =>{
        
        return result;
      })
      .catch(error => console.log('error', error));


}

export function addCategory(category){
 
 

var token = authHeader();
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "categoryName": category['categoryName'],
  "isParentCategory": category['isParentCategory'],
  "parentCategory": category['parentCategory']
});


var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};


return fetch(API_BASE_URL+API_ADMIN_ADD_CATEGORY, requestOptions)
  .then(response => response.json())
  .then(result => {
   console.log(result)
    return result;
  })
  .catch(error => console.log('error', error));

}








export function updateCategory(category){
  
  var categoryId = category['id'];
  var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
var raw = JSON.stringify({
  "categoryName": category['categoryName'],
  "isParentCategory": category['isParentCategory'],
  "parentCategory": category['parentCategory']
});

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

return fetch(API_BASE_URL+API_ADMIN_UPDATE_CATEGORY+categoryId, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    return result;
  })
  .catch(error => console.log('error', error));
}



export function deleteCategory(id){
  var token = authHeader();
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");


var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

 return fetch(API_BASE_URL+API_ADMIN_DELETE_CATEGORY+id, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    return result;
  })
  .catch(error => console.log('error', error));
}