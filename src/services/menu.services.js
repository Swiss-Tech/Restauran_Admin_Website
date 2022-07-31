import authHeader from "./auth-header";
import { API_BASE_URL , API_ADMIN_MENUS , API_ADMIN_MENU_ADD, API_ADMIN_MENU_DELATE, API_ADMIN_MENU_UPDATE } from "./api-config";
export async function getAllMenuItem(){

    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
 return fetch(API_BASE_URL+API_ADMIN_MENUS, requestOptions)
    .then(response => response.json())
    .then((result)=>{
   
     return result;
    } )
    .catch(error => console.log('error', error));
}


export function addMenuItem(){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
var formdata = new FormData();
formdata.append("name", "Whats up");
formdata.append("price", "200");
formdata.append("calories", "100");
formdata.append("weight", "100");
formdata.append("description", "Shiro is very very good ");
formdata.append("enoughFor", "1");
formdata.append("estPrepTime", "2:00");
formdata.append("removableIngredients", "[\n\"tomato\"\n]");
formdata.append("categories", "[\n\"1\",\n\"2\"\n]");
formdata.append("foodImage1", "Deli_Rolls_Logo.png");
formdata.append("foodImage2", "Deli_Rolls_Logo.png");
formdata.append("foodImage3", "Deli_Rolls_Logo.png");
formdata.append("foodImage4", "Deli_Rolls_Logo.png");
formdata.append("status", "true");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch(API_BASE_URL+API_ADMIN_MENU_ADD, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}


export function deleteMenu(){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(API_BASE_URL+API_ADMIN_MENU_DELATE +"08da6e38-914d-46f8-8601-9cf2b74281c1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}


export function updateMenu (){
    // it is not finished
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
}

