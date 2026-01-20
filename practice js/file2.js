// Task 1: The "Order Status"
// Goal: Practice basic resolve and reject logic.
// ● The Scenario: Create a function checkOrderStatus(orderId).
// ● The Logic: * If the orderId is a number, resolve after 1 second with
// "Order Shipped".
// ○ If the orderId is not a number (e.g., a string or null), reject with
// "Invalid Order ID".

// ● The Requirement: Use an async function with try/catch to call this
// and log the result

const checkOrderStatus = (orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof orderId === 'number') {
                resolve("Order Shipped");
            } else {
                reject("Invalid Order ID");
            }
        }, 1000);
    });
};

const getOrderStatus = async (orderId) => {
    try {
        const status = await checkOrderStatus(orderId);
        console.log(status);
    } catch (error) {
        console.log(error);
    }
};



getOrderStatus(123);

// The "Multi-Step" Authentication
// Goal: Practice "Chaining" or sequential awaits (One thing after another).
// ● The Scenario: A user logs in. You need to find the user first, then check their
// subscription.
// ● The Functions:
// 1. getUser(username): Resolves with { name: "Rahul", type:
// "Premium" } after 1.5s.
// 2. checkSubscription(user): Takes the user object. If type is "Premium",
// resolve with "Access Granted to Netflix". Otherwise, reject with
// "Please Subscribe".

// ● The Requirement: Create a "Consumer" function that calls getUser first, then passes
// that result into checkSubscription.

const getUser = (username) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Rahul", type: "Premium" });
        }, 1500);
    });
};

const checkSubscription = (user) => {
    return new Promise((resolve, reject) => {
        if (user.type === "Premium") {
            resolve("Access Granted to Netflix");
        } else {
            reject("Please Subscribe");
        }
    });
};

const authenticateUser = async (username) => {
    try {
        const user = await getUser(username);
        const accessMessage = await checkSubscription(user);
        console.log(accessMessage);
    } catch (error) {
        console.log(error);
    }
};

getOrderStatus(123);
getOrderStatus("abc");

// Task 3 : Smart-Shop Dashboard

// Goal: Create a script that simulates a user logging in and seeing their "Delivered" orders with a
// "Premium Discount."

// A .Write two functions that return Promises:
// ● fetchUser(id): Resolves in 1s with { name: "Rahul", isPremium: true }.
// ● fetchOrders(id): Resolves in 2s with: [{ item: "Laptop", price: 1000,
// status: "delivered" }, { item: "Phone", price: 500, status:
// "pending" }].
// B. Create an async function displayDashboard(id) that:
// 1. Awaits both functions.
// 2. Filters the array to keep only "delivered" orders.
// 3. Maps the data to apply a 10% discount to the price only if isPremium is true.
// 4. Prints a greeting and the final total of the delivered items.

// ** Wrap everything in a try...catch block to handle potential errors.

const fetchUser = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Rahul", isPremium: true });
        }, 1000);
    });
};

const fetchOrders = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { item: "Laptop", price: 1000, status: "delivered" },
                { item: "Phone", price: 500, status: "pending" }
            ]);
        }, 2000);
    });
};

const displayDashboard = async (id) => {
    try {
        const user = await fetchUser(id);
        const orders = await fetchOrders(id);

        const deliveredOrders = orders.filter(order => order.status === "delivered");

        const finalOrders = deliveredOrders.map(order => {
            if (user.isPremium) {
                return { ...order, price: order.price * 0.9 };
            }
            return order;
        });

        const total = finalOrders.reduce((acc, order) => acc + order.price, 0);

        console.log(`Hello, ${user.name}! Your total for delivered items is $${total}.`);
    } catch (error) {
        console.log("Error fetching dashboard data:", error);
    }
};

displayDashboard(1);