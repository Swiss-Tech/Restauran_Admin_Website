import authHeader from "./auth-header";
// import url here
export async function getAllOrders (){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

//   implement the get all orders logic here
}

export async function acceptOrder (orderId){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

//   implement accept order logic here
}

export async function rejectOrder (orderId){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
//    implement reject order here
}