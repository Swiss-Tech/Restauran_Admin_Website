import { API_ADMIN_ADD_CATEGORY, API_ADMIN_DELETE_CATEGORY, API_ADMIN_GET_CATEGORIES, API_ADMIN_UPDATE_CATEGORY, API_BASE_URL } from "./api-config";
import authHeader from "./auth-header";



export async function getAllCategory(){

    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
   try {
    const response = await fetch(API_BASE_URL + API_ADMIN_GET_CATEGORIES, requestOptions);
    const result_2 = await response.json();
    return result_2;
  } catch (error) {
    return error;
  }


}

export async function addCategory(category){
 
 console.log(category)

var token = authHeader();
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "categoryName": category['categoryName'],
  "isParentCategory": category['isParentCategory'],
  "parentCategory": category['parentCategory'] ? category['parentCategory'] :null
});


var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};


  try {
    const response = await fetch(API_BASE_URL + API_ADMIN_ADD_CATEGORY, requestOptions);
    const result_2 = await response.json();
    
    return result_2;
  } catch (error) {
    return error;
  }

}








export async function updateCategory(category){
  
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

  try {
    const response = await fetch(API_BASE_URL + API_ADMIN_UPDATE_CATEGORY + categoryId, requestOptions);
    const result_2 = await response.json();
    return result_2;
  } catch (error) {
    return error;
  }
}



export async function deleteCategory(id){
  var token = authHeader();
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");


var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

 try {
    const response = await fetch(API_BASE_URL + API_ADMIN_DELETE_CATEGORY + id, requestOptions);
    const result_2 = await response.json();
 
    return result_2;
  } catch (error) {
    return error;
  }
}