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

//Task 3
// Declare an array cartItems with three product names
let cartItems = ["Helmets", "Footballs", "Cleats"];

// Add a new product to the cart
cartItems.push("Gloves");

// Remove the last item
cartItems.pop();

// Add an item at the beginning
cartItems.unshift("Kneepads");

// Remove the first item
cartItems.shift();

// Log the final array to the console
console.log(cartItems);

// Task 4
// Declare an prices array
let prices = [25, 75, 125];

// Apply a 10% discount to each price
let discountedPrices = prices.map(price => price * 0.9);

// Log the new discounted prices to the console
console.log(discountedPrices);
