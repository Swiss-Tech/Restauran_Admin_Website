export default function authHeader() {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {

//     var myHeaders = new Headers();
// myHeaders.append("Authorization", `Bearer ${token}`);
    return token;
    
  } else {
    return {};
  }
}
