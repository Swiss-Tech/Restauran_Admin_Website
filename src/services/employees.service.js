import authHeader from "./auth-header";

export async function getAllEmployees (){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

//    implement get all Employyes  logic here
}


export async function addEmployee(employee){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
//    implement add employye here
}


export async function editEmployee(employee){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    // implement edit employee
    
}

export async function deleteEmployee(employee){
    var token = authHeader();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    //  implemen dellete employee here
}