// find displacement
const timeElapsed = 60; // seconds (t)
const initialPosition = 0; // meters (x0)
const initialVelocity = 0; // meters / second (v0)
const acceleration = 20; // meters / second ^ 2 (a)

// require utils
const {getDisplacement} = require("./utils/getDisplacement");

// call function
const displacement = getDisplacement(timeElapsed, initialPosition, initialVelocity, acceleration);

// display displacement
console.log(`displacement: ${displacement} m`);