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




export function addMenuItem(menu){

var categoryList = menu['category'].map((category)=>(category.id))

var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
var formdata = new FormData();

formdata.append("name", menu['itemName']);
formdata.append("price", menu['price']);
formdata.append("calories", menu['calories']);
formdata.append("weight", menu['weight']);
formdata.append("description",menu['description']);
formdata.append("enoughFor", menu['enoughFor']);
formdata.append("estPrepTime",menu['estimatedTime']);
formdata.append("removableIngredients", menu['removableIngredient']);
formdata.append("categories", categoryList);

formdata.append("foodImage1",menu['foodImage1']);
formdata.append("foodImage2", menu['foodImage2']);
formdata.append("foodImage3",menu['foodImage3']);
formdata.append("foodImage4", menu['foodImage4']);
formdata.append("status", menu['status']);


var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};
return fetch("http://165.232.80.134/test/admin/Menu/add", requestOptions)
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));

}



export function updateMenu (menu){
  
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    var categoryList = menu['category'].map((category)=>(category.id))
  
var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
var formdata = new FormData();
var menuId  = menu['id'];
console.log(menuId)
formdata.append("name", menu['itemName']);
formdata.append("price", menu['price']);
formdata.append("calories", menu['calories']);
formdata.append("weight", menu['weight']);
formdata.append("description",menu['description']);
formdata.append("enoughFor", menu['enoughFor']);
formdata.append("estPrepTime",menu['estimatedTime']);
formdata.append("removableIngredients", menu['removableIngredient']);
formdata.append("categories", categoryList);
formdata.append("foodImage1",menu['foodImage1']);
formdata.append("foodImage2", menu['foodImage2']);
formdata.append("foodImage3",menu['foodImage3']);
formdata.append("foodImage4", menu['foodImage4']);
formdata.append("status", menu['status']);

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};


return fetch(`http://165.232.80.134/test/admin/Menu/update/${menuId}`, requestOptions)
  .then(response => response.json())
  .then(result => {
   console.log(result)
 return result;
  })
  .catch(error =>error);


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



