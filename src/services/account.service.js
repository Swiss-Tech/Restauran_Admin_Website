import { API_BASE_URL , API_ADMIN_RESTAURANTINFORMATION  , API_RESTAURANT_INFO_STATUS} from "./api-config";
import authHeader from "./auth-header";
export async function editAdmin(){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "email": "wbilihatu@gmail.com",
    "firstName": "Woyn",
    "lastname": "Bilu",
    "phoneNumber": "0909090909",
    "password": "test1234"
  });
  
  var requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
 return fetch("http://165.232.80.134/test/admin/Auth/admin/update", requestOptions)
    .then(response => response.json())
    .then(result =>{
        console.log(result)
        return result;
    })
    .catch(error => console.log('error', error));
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
      
     return fetch(`http://165.232.80.134/test/admin/Auth/days/detete/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
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
      
     return fetch(`http://165.232.80.134/test/admin/Auth/cost/detete/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            return result;
        })
        .catch(error => console.log('error', error));
}
export async function addWorkingDays(){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify([
    {
      "day": "monday"
    }
  ]);
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
 return fetch("http://165.232.80.134/test/admin/Auth/days/add", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result)
        return result;
    })
    .catch(error => console.log('error', error));

}
export async function addSharedCost (){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify([
        {
          "itemName": "Vating",
          "isPercent": true,
          "value": 15
        }
      ],
      );
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("http://165.232.80.134/test/admin/Auth/cost/add", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
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

return fetch("http://165.232.80.134/test/admin/Auth/update/restaurant", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    return result;
  })
  .catch(error => console.log('error', error));
}

export async function restaurant_information_function(name, location, phoneNumber,email,description, logoUrl, image1, image2, image3, image4, days, sharedCosts){
   
    var token = authHeader();
     var myHeaders = new Headers();
     myHeaders.append("Authorization", `Bearer ${token}`);
    var formdata = new FormData();
    
 
    
     var dayList = days.days.map((day)=>({"day":day}));
     var sharedcosts = sharedCosts.map((sharedcost,inde)=>({
        "itemName":sharedcost.itemName ,
        "isPercent":sharedcost.isPercent,
        "value":parseInt(sharedcost.value)

    }));
  

formdata.append("restaurantName", name);
formdata.append("restaurantLocation", location);
formdata.append("restaurantPhoneNumber", phoneNumber);
formdata.append("restaurantEmail", email);
formdata.append("restaurantShortDescription", description);
formdata.append("restaurantLogoPhoto", logoUrl);
formdata.append("WorkingDays", dayList);
formdata.append("workingHour", "10");
formdata.append("image1", image1);
formdata.append("image2", image2);
formdata.append("image3", image3);
formdata.append("image4", image4);
formdata.append("SharedCosts", sharedcosts);


var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow',
  headers: myHeaders,
};

try{
   return await fetch(API_BASE_URL+API_ADMIN_RESTAURANTINFORMATION, requestOptions)
    .then(response => response.json())
    .then(result => {
  
     if(result.success){
        return result;
     }
     console.log(result);
     return result;
    
    })
    .catch(error => console.log('error',error));
}catch(e){
    console.log(e);
}
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
      
    return  fetch("http://165.232.80.134/test/admin/dash/get", requestOptions)
        .then(response => response.json())
        .then(result => {
      
            return result;
        })
        .catch(error => console.log('error', error));


}


export const restaurantInfoStatus =async ()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
     try {
        const response = await fetch("http://165.232.80.134/test/admin/Auth/checkstatus", requestOptions);
        const result_1 = await response.text();
        return result_1;
    } catch (error) {
        return console.log('error', error);
    }
    // var requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow'
    //   };
      
    //  return fetch(API_BASE_URL+API_RESTAURANT_INFO_STATUS, requestOptions)
    //     .then(response => response.json())
    //     .then(result => {
              
        
    //           return result;
    

    //     })
    //     .catch(error => {
    //         console.log('error', error);
    //     });
}




