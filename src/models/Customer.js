export default class Customer {
    constructor(id,customer,customerId,activeOrders, totalPayment, status,lifeTimeOrder){
        this.id = id;
        this.customer = customer;
        this.customerId = customerId;
        this.activeOrders = activeOrders;
        this.totalPayment = totalPayment;
        this.status = status;
        this.lifeTimeOrder = lifeTimeOrder;
        
    }
}