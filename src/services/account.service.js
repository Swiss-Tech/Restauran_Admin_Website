import {  } from "../actions/types";
import { API_BASE_URL , API_ADMIN_RESTAURANTINFORMATION ,API_ADMIN_GET_ADMIN , API_RESTAURANT_INFO_STATUS, API_ADMIN_UPDATE, API_ADMIN_DELETE_DAYS, API_ADMIN_DELETE_SHAREDCOST, API_ADMIN_ADD_WORKING_DAYS, API_ADMIN_ADD_SHAREDCOST, API_ADMIN_GET_ALL_DASHBOARD_DATA, API_ADMIN_GET_ALL_RESTAURANT_INFORMATION_DATA, API_ADMIN_GET_DASHBOARD_DATA, API_ADMIN_UPDATE_RESTURANT_INFORMATION} from "./api-config";
import authHeader from "./auth-header";



export async function getAdminInfo(){
  var token = authHeader();
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
 return fetch(API_BASE_URL+API_ADMIN_GET_ADMIN, requestOptions)
    .then(response => response.json())
    .then(result => {
     
      return result
    })
    .catch(error => {

    });
}

export async function editAdmin(admin){
   
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "email":`${admin.email}`,
    "firstName": `${admin.firstName}`,
    "lastname": `${admin.lastname}`,
    "phoneNumber":`${admin.phoneNumber}`,
    "password": `${admin.password}`
  });
  
  var requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
 return fetch(API_BASE_URL+API_ADMIN_UPDATE, requestOptions)
    .then(response => response.json())
    .then(result =>{
        console.log(result)
        return result;
    })
    .catch(error => {console.log('error', error)});
}





export async function deleteDays(id){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };
      
     return fetch( API_BASE_URL+API_ADMIN_DELETE_DAYS+id, requestOptions)
        .then(response => response.json())
        .then(result => {

            return result;
        })
        .catch(error => console.log('error', error));
}
export async function deleteCostSharing(id){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
      };
      
     return fetch(API_BASE_URL+API_ADMIN_DELETE_SHAREDCOST+id, requestOptions)
        .then(response => response.json())
        .then(result => {
          
            return result;
        })
        .catch(error =>{

        });
}
export async function addWorkingDays(days){


  console.log(days);
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(days
  );
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
 return fetch(API_BASE_URL+API_ADMIN_ADD_WORKING_DAYS, requestOptions)
    .then(response => response.json())
    .then(result => {
        
        return result;
    })
    .catch(error => console.log('error', error));

}
export async function addSharedCost (sharedCost){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify([
        {
          "itemName": sharedCost.itemName,
          "isPercent": sharedCost.isPercent,
          "value": sharedCost.value
        }
      ],
      );
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
    return  fetch(API_BASE_URL+API_ADMIN_ADD_SHAREDCOST, requestOptions)
        .then(response => response.json())
        .then(result => {
          return result
        })
        .catch(error =>{
          
        });
}




export async function editRestaurantInfo(){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
var formdata = new FormData();
formdata.append("restaurantName", "yo");
formdata.append("restaurantEmail", "wbilihatu@gmail.com");
formdata.append("restaurantLogoPhoto", "bananas-1354785_1920.jpg");
formdata.append("restaurantLocation", "Addis Ababa");
formdata.append("restaurantShortDescription", "very nice");
formdata.append("restaurantPhoneNumber", "09090909");
formdata.append("WorkingHour", "20");

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

return fetch(API_BASE_URL+API_ADMIN_UPDATE_RESTURANT_INFORMATION, requestOptions)
  .then(response => response.json())
  .then(result => {
    return result;
  })
  .catch(error => error);
}

export async function restaurant_information_function(name, location, phoneNumber,email,description, logoUrl, image1, image2, image3, image4, days, sharedCosts, openAt, closeAt){
   
    var token = authHeader();
     var myHeaders = new Headers();
     myHeaders.append("Authorization", `Bearer ${token}`);
    var formdata = new FormData();
    
 
    
     var dayList = days.days.map((day)=>({day}));
     
        for(var i=0 ; i<days.days.length ; i++){
          formdata.append("WorkingDays",days.days[i]);
        } 
 
formdata.append("restaurantName", name);
formdata.append("restaurantLocation", location);
formdata.append("restaurantPhoneNumber", phoneNumber);
formdata.append("restaurantEmail", email);
formdata.append("restaurantShortDescription", description);
formdata.append("restaurantLogoPhoto", logoUrl);
formdata.append("workingHour", `${openAt} - ${closeAt}`);
formdata.append("image1", image1);
formdata.append("image2", image2);
formdata.append("image3", image3);
formdata.append("image4", image4);
formdata.append("SharedCosts", JSON.stringify(sharedCosts));





var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow',
  headers: myHeaders,
};



return fetch(API_BASE_URL+API_ADMIN_RESTAURANTINFORMATION, requestOptions)
    .then(response => response.json())
    .then(result => {
  
    
     console.log(result);
      return result;
    
    })
    .catch(error => error);

}

export async function get_restaurant_information(){
 
  var token = authHeader();
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
 return fetch(API_BASE_URL+API_ADMIN_GET_ALL_RESTAURANT_INFORMATION_DATA, requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => 
      {

      });
}



export async function dashboardData   (){

    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
       
        redirect: 'follow'
      };
      
    return  fetch(API_BASE_URL+API_ADMIN_GET_DASHBOARD_DATA, requestOptions)
        .then(response => response.json())
        .then(result => {
      
            return result;
        })
        .catch(error => console.log('error', error));


}






