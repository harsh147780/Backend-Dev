const rawUsers = [
{ id: 1, name: "Rahul", password: "fb_password", role: "admin" },
{ id: 2, name: "Sanya", password: "123_password", role: "user" },
{ id: 3, name: "Amit", password: "secret_password", role: "user" }
];

const safeUsers = rawUsers.map(({ password, ...safeData }) => safeData);

// console.log(safeUsers);
// Output:
// [
//   { id: 1, name: "Rahul", role: "admin" },
//   { id: 2, name: "Sanya", role: "user" },
//   { id: 3, name: "Amit", role: "user" }
// ]

const admin  = rawUsers.filter(({role})=> role==="admin");
// console.log(admin);
// Output:
// [ { id: 1, name: "Rahul", password: "fb_password", role: "admin" } ]

const cart = [
{ item: "Laptop", price: 50000, quantity: 1, inStock: true },
{ item: "Mouse", price: 1500, quantity: 2, inStock: true },
{ item: "Keyboard", price: 3000, quantity: 1, inStock: false }
];
// TASK:
// 1. Check if "every" item is inStock. Print "Ready to Ship" or "Wait".
// 2. Filter out the items that are NOT in stock.
// 3. Use .reduce() on the filtered list to find the final 'Total Bill'.

const inStockCheck = cart.every(({inStock}) => inStock);
if(inStockCheck){
    console.log("Ready to Ship");
}else{
    console.log("Wait");
}
const itemNotInStock = cart.filter(({inStock}) => !inStock);
console.log(itemNotInStock);
// Output:
// [ { item: "Keyboard", price: 3000, quantity: 1, inStock: false } ]

const totalBill = cart
.filter(({inStock}) => inStock)
.reduce((acc,{price,quantity}) => acc +price*quantity ,0);
console.log(totalBill);