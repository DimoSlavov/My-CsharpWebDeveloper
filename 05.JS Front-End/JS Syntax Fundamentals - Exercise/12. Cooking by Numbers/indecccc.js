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
        this.status = 'to be delivered'; // New field to track order status
    }
}
 
class Drone {
    constructor(capacity, consumption) {
        this.capacity = capacity;
        this.consumption = consumption;
        this.speed = parseFloat(capacity) / parseFloat(consumption);
        this.currentLoad = 0; // New field to track current load
    }
 
    calculatePowerConsumption(distance) {
        // Power consumption is calculated based on both distance covered and carried load
        const loadInKg = Math.ceil(this.currentLoad / 1000); // Convert current load to kilograms, rounding up
        return (loadInKg * this.consumption * distance); // Power consumption = load (kg) * consumption (W/kg) * distance (minutes)
    }
}
 
class DroneType {
    constructor(capacity, consumption) {
        this.capacity = capacity;
        this.consumption = consumption;
    }
}
 
class ChargingStation {
    constructor(location, type) {
        this.location = location;
        this.type = type;
        this.isOccupied = false; // New field to track if the station is currently charging a drone
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
let orders = [
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
 
const chargingStations = []; // Array to hold charging station objects
 
// Function to add charging stations from input data
function addChargingStations(stations) {
    for (const station of stations) {
        chargingStations.push(new ChargingStation(station.location, station.type));
    }
}
 
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
console.log(`Average delivery time per order: ${averageDeliveryTime.toFixed(2)} minutes`);
 
// Function to add new orders
function addNewOrders(newOrders) {
    for (const order of newOrders) {
        orders.push(new Order(order.customerId, order.productList));
    }
}
 
// Function to output order statuses
function outputOrderStatuses(frequency) {
    setInterval(() => {
        for (const order of orders) {
            console.log(`Order ID: ${order.customerId}, Status: ${order.status}`);
        }
    }, frequency * 60000); // Convert frequency from minutes to milliseconds
}
 
// Function to handle drone charging
function handleDroneCharging(weightPerProduct, consumptionPerKg) {
    for (const order of orders) {
        for (const product in order.productList) {
            const weight = order.productList[product] * weightPerProduct; // Weight of each product in grams
            for (const droneType of typesOfDrones) {
                if (droneType.capacity >= weight) {
                    const drone = new Drone(droneType.capacity, droneType.consumption);
                    drone.currentLoad = weight; // Set current load of drone
                    const powerConsumption = drone.calculatePowerConsumption(1); // Assuming 1 minute flight time
                    console.log(`Power consumption for delivering ${product}: ${powerConsumption}W`);
                }
            }
        }
    }
}
 
// Function to handle charging stations network
function handleChargingStations(droneLocations, droneTypes, chargingStationsData) {
    // Add charging stations
    addChargingStations(chargingStationsData);
 
    // Assign drones to charging stations
    for (let i = 0; i < droneLocations.length; i++) {
        const location = droneLocations[i];
        const type = droneTypes[i];
        for (const station of chargingStations) {
            if (station.type === type && !station.isOccupied) {
                console.log(`Drone at location (${location.x}, ${location.y}) is charging at station located at (${station.location.x}, ${station.location.y})`);
                station.isOccupied = true; // Mark station as occupied
                break;
            }
        }
    }
}
 
// Add new orders
addNewOrders([
    new Order(4, { 'eggs': 8, 'bread': 2 }),
    new Order(5, { 'cheese': 3, 'milk': 1, 'tomatoes': 4 })
]);
 
// Output order statuses every 5 minutes
outputOrderStatuses(5);
 
// Handle drone charging
handleDroneCharging(1000, 0.1); // Assuming each product weighs 1000 grams and consumes 0.1W per kg per minute
 
// Handle charging stations network
handleChargingStations(
    [new Point(150, 150), new Point(250, 250)], // Drone locations
    ['500W', '2kW'], // Drone types
    [{ location: new Point(120, 120), type: 'normal' }, { location: new Point(220, 220), type: 'fast' }] // Charging stations data
);