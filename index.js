// This part defines a class called Customer. A class is like a blueprint for creating objects.

class Customer {
    // This method defines how a Customer object should be created with specific attributes like firstName, lastName, orderNumber, and order.
    constructor(firstName, lastName, orderNumber, order) {
        this.firstName = firstName; // Assigning the input firstName to the object's and so on with lastN, ordern, and order
        this.lastName = lastName;
        this.orderNumber = orderNumber;
        this.order = order;
    }

    // introduces the customer by printing a message to the console.
    introduce() {
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
}

// Here there are two instances of the Customer class with specific values.
let customer1 = new Customer('Ivan', 'Smalls', '3', 'To go');
let customer2 = new Customer('Alex', 'Winters', '2', 'Stay');

customer1.introduce();
customer2.introduce();

// This part defines a class called MenuOrder that represents a menu item.

class MenuOrder {
    // How a MenuOrder object should be created with specific attributes like flavor, confection, and quantity.
    constructor(flavor, confection, quantity) {
        this.flavor = flavor;
        this.confection = confection;
        this.quantity = quantity;
    }

    introduce() {
        console.log(`${this.flavor} ${this.confection} ${this.quantity}`);
    }
}

// An array called menuItems that holds instances of MenuOrder representing different menu items.
let menuItems = [
    new MenuOrder('pistachio', 'macaron', '3'), // Creating a menu item instance with specific values
    new MenuOrder('rose', 'macaron', '2') // Creating another menu item instance with different values
];

// here this will loop through each menu item in the array and print its details.
menuItems.forEach(item => item.introduce());

function createMenuItem(flavor, confection, quantity) { //function to create menu items and 
    const newMenuItem = new MenuOrder(flavor, confection, quantity);
    menuItems.push(newMenuItem);
}

function viewMenuItems() {
    menuItems.forEach(item => {
        item.introduce();
    });
}

function deleteMenuItem(index) { //this function is to delete menu items from the array
    if (index >= 0 && index < menuItems.length) {
        menuItems.splice(index, 1); //splice to remove menu items
        console.log("Menu item deleted successfully.");
    } else {
        console.log("Invalid menu item index.");
    }
}

createMenuItem('pistachio', 'macaron', '3');
createMenuItem('rose', 'macaron', '2');

viewMenuItems();

deleteMenuItem(1); // Delete the second menu item
