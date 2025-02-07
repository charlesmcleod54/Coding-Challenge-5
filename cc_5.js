// Task 1
// Declare the customer object
const customer = {
    name: "Chuck Jones",
    age: 25,
    email: "chuckj25@gmail.com"
};

//Log each property 
console.log('Name: ${customer.name}');
console.log('Age: ${customer.age}');
console.log('Email: ${customer.email}');

//Task 2
//Declare the object order
const order = {
    orderId: 47308,
    totalAmount: 275,
    status: "Processing",

    //Add the method displayOrder()
    displayOrder: function() {
        console.log('Order ID: ${this.orderId}');
        console.log('Total Amount: $${.totalAmount}');
        console.log('Status: ${this.status}');
    }
};

//Call the method and log the details
order.displayOrder();
