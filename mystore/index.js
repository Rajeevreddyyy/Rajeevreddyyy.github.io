const cart = {}
const addtocart = (id) => {
    cart[id] = 1;
    showcart();
};
const increment = (id) => {
    cart[id] = cart[id] + 1;
    showcart();
};
const decrement = (id) => {
    cart[id] = cart[id] - 1;
    showcart();
};
const showcart = () => {
    let str = "";
    products.map((value) => {
        if (cart[value.id]) { 
            str += `<div>${value.id} - ${value.name} - ${value.price}<button onclick = "decrement(${value.id})">-</button> ${cart[value.id]} <button onclick = "increment(${value.id})">+</button> - ${value.price * cart[value.id]} <button onclick="delete()">Delete</button>`
        }
    });
    divcart.innerHTML = str
};
const products = [
    { id: 1, name: "Product 1", price: 50 },
    { id: 2, name: "Product 2", price: 40 },
    { id: 3, name: "Product 3", price: 70 },
];
const showproducts = () => {
    let str = ""
    products.map((value) => {
        str += `<div>${value.id} - ${value.name} - ${value.price} <button onclick="addtocart(${value.id})">Add</button></div>`
    });
    divproducts.innerHTML = str
};