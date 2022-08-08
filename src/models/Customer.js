export default class Customer {
    constructor(id,customer,customerId,activeOrders, totalPayment, status){
        this.id = id;
        this.customer = customer;
        this.customerId = customerId;
        this.activeOrders = activeOrders;
        this.totalPayment = totalPayment;
        this.status = status;
        
    }
}