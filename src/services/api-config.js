export const API_BASE_URL = "http://165.232.80.134/test/admin";
export const API_ADMIN_REGISTER_URL = "/Auth/reg/restaurantadmin";
export const API_ADMIN_LOGIN = "/Auth/login";
export const API_ADMIN_CHECKSTATUS = "/Auth/checkstatus";
export const API_ADMIN_RESTAURANTINFORMATION ="/Auth/reg/restaurantinfo";
export const API_RESTAURANT_INFO_STATUS ="/Auth/checkstatus";

//  menu related link
export const API_ADMIN_MENUS ="/Menu/getall";
export const API_ADMIN_MENU_DELETE = "/Menu/delete/";
export const API_ADMIN_MENU_UPDATE="/Menu/update/";
export const API_ADMIN_MENU_ADD="/Menu/add";


//  categories related link


export const API_ADMIN_GET_CATEGORIES ="/Menu/category/getall";
export const API_ADMIN_ADD_CATEGORY ="/Menu/category/add"
export const API_ADMIN_UPDATE_CATEGORY ="/Menu/category/edit/";
export const API_ADMIN_DELETE_CATEGORY ="/Menu/category/delete/";

// admin related link

export const API_ADMIN_UPDATE ="/Auth/admin/update";
export const API_ADMIN_DELETE_DAYS ="/Auth/days/delete/";
export const API_ADMIN_DELETE_SHAREDCOST ="/Auth/cost/delete/";
export const API_ADMIN_ADD_WORKING_DAYS ="/Auth/days/add";
export const API_ADMIN_ADD_SHAREDCOST ="/Auth/cost/add";
export const API_ADMIN_GET_ADMIN ="/Auth/admin/get";


// dashboard related link
 export const API_ADMIN_GET_DASHBOARD_DATA ="/dash/get";



// restaurant related link

export const API_ADMIN_GET_ALL_RESTAURANT_INFORMATION_DATA ="/Auth/getrestinfo";
export const API_ADMIN_UPDATE_RESTURANT_INFORMATION ="/Auth/update/restaurant";

//  order related link

export const API_ADMIN_GET_ALL_ORDER = "/Order/getall";
export const API_ADMIN_UPDATE_ORDER ="/order/update/status/";


// customer related link

export const API_ADMIN_GET_ALL_CUSTOMER="/Customer/getcustomerdata";
export const API_ADMIN_UPDATE_CUSTOMER="/customer/update/status/";
export const API_ADMIN_UPDATE_CUSTOMER_STATUS ="/customer/update/status/";



