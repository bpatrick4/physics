// find acceleration
const timeElapsed = 60; // seconds (t)
const initialPosition = 0; // meters (x0)
const finalPosition = 36000; // meters (x)
const initialVelocity = 0; // meters / second (v0)

// require utils
const {getAcceleration} = require("./utils/getAcceleration");

// call function
const accel = getAcceleration(timeElapsed, initialPosition, finalPosition, initialVelocity);

// display acceleration
console.log(`acceleration: ${accel} m/s^2`);