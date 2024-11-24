// find velocity
const timeElapsed = 60; // seconds (t)
const initialPosition = 0; // meters (x0)
const finalPosition = 36000; // meters (x)
const initialVelocity = 0; // meters / second (v0)
const acceleration = 20; // meters / second ^ 2 (a)

// require utils
const {getAvgVelocity} = require("./utils/getAvgVelocity");
const {getVelocity} = require("./utils/getVelocity");

// call functions
const avgVel = getAvgVelocity(timeElapsed, initialPosition, finalPosition);
const vel = getVelocity(timeElapsed, initialVelocity, acceleration);


// display avg velocity and velocity
console.log(`average velocity: ${avgVel} m/s`);
console.log(`final velocity: ${vel} m/s`);