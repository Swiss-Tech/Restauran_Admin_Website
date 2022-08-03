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


return fetch("http://165.232.80.134/test/admin/Menu/category/add", requestOptions)
  .then(response => response.json())
  .then(result => {
   console.log(result)
    return result;
  })
  .catch(error => console.log('error', error));

}








export function updateCategory(category){
  console.log(category)
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

return fetch(`http://165.232.80.134/test/admin/Menu/category/edit/${categoryId}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    return result
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

 return fetch(`http://165.232.80.134/test/admin/Menu/category/delete/${id}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    return result;
  })
  .catch(error => console.log('error', error));
}