class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Order {
    constructor(customerId, productList) {
        this.customerId = customerId;
        this.productList = productList;
    }
}

class Drone {
    constructor(capacity, consumption) {
        this.capacity = capacity;
        this.consumption = consumption;
        this.speed = parseFloat(capacity) / parseFloat(consumption);
    }
}

class DroneType {
    constructor(capacity, consumption) {
        this.capacity = capacity;
        this.consumption = consumption;
    }
}

class ProgramOutput {
    constructor(powerOn, minutes) {
        this.powerOn = powerOn;
        this.minutes = minutes;
    }
}

class ProgramMinutes {
    constructor(program, real) {
        this.program = program;
        this.real = real;
    }
}

function calculateDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function calculateDeliveryTime(warehouses, customers, orders, drone) {
    let totalTime = 0;

    for (const order of orders) {
        const distanceToCustomer = calculateDistance(warehouses[0], customers[order.customerId - 1]);
        const deliveryTime = Math.floor(distanceToCustomer / drone.speed); // Assuming constant drone speed
        totalTime += deliveryTime;
    }

    return totalTime;
}

function calculateAverageDeliveryTime(warehouses, customers, orders, typesOfDrones) {
    let totalDeliveryTime = 0;
    const totalOrders = orders.length;

    for (const droneType of typesOfDrones) {
        const drone = new Drone(droneType.capacity, droneType.consumption);
        totalDeliveryTime += calculateDeliveryTime(warehouses, customers, orders, drone);
    }

    return totalDeliveryTime / totalOrders;
}

// Input data
const mapTopRightCoordinate = new Point(280, 280);
const warehouses = [new Point(100, 100), new Point(200, 200)];
const customers = [new Point(10, 10), new Point(213, 187), new Point(108, 15)];
const orders = [
    new Order(1, { 'tomatoes': 5, 'cucumber': 5, 'cheese': 1, 'milk': 2 }),
    new Order(1, { 'eggs': 10, 'cucumber': 2, 'cheese': 1, 'ham': 2 }),
    new Order(2, { 'eggs': 10, 'tomatoes': 2, 'bananas': 5, 'carrots': 15, 'bread': 2, 'onion': 6 }),
    new Order(3, { 'eggs': 5, 'cucumber': 5, 'cheese': 1, 'tomatoes': 2 }),
    new Order(3, { 'eggs': 10, 'tomatoes': 2, 'ham': 1, 'bananas': 2 }),
    new Order(2, { 'bananas': 10, 'carrots': 2, 'onion': 5, 'cucumber': 15, 'cheese': 2, 'bread': 6 })
];
const typesOfDrones = [
    new DroneType('500W', '1W'),
    new DroneType('1kW', '3W'),
    new DroneType('2kW', '5W')
];

// Simulate program output in real-time
const output = new ProgramOutput(true, new ProgramMinutes(10, 400));
console.log("Program output in real-time:");
console.log(`Powered On: ${output.powerOn}`);
console.log(`Program Minutes: ${output.minutes.program}, Real Minutes: ${output.minutes.real}`);

// Calculate delivery time for each type of drone
for (const droneType of typesOfDrones) {
    const drone = new Drone(droneType.capacity, droneType.consumption);
    const totalTime = calculateDeliveryTime(warehouses, customers, orders, drone);
    console.log(`Total time needed for drone with capacity ${droneType.capacity} and consumption ${droneType.consumption}: ${totalTime} minutes`);
}

// Add a new order during program execution
orders.push(new Order(2, { 'cheese': 3, 'bread': 4 }));

// Calculate average delivery time per order
const averageDeliveryTime = calculateAverageDeliveryTime(warehouses, customers, orders, typesOfDrones);
console.log(`Average delivery time per order: ${averageDeliveryTime} minutes`);