export default class OrderModel{
    constructor(id,customer,customerId,menus,itemCount,totalPayment,orderType,orderTime,orderedOn,status,customerRequest){
        this.id= id;
        this.customer=customer;
        this.customerId= customerId;
        this.menus=menus;
        this.itemCount= itemCount;
        this.totalPayment=totalPayment;
        this.orderType=orderType;
        this.orderTime = orderTime;
        this.orderedOn= orderedOn;
        this.status= status;
        this.customerRequest= customerRequest;
    }
}