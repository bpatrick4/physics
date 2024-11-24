// find displacement, avg velocity, final velocity & acceleration
const timeElapsed = 60; // seconds (t)
const initialPosition = 0; // meters (x0)
const finalPosition = 36000; // meters (x)
const initialVelocity = 0; // meters / second (v0)
const acceleration = 20; // meters / second ^ 2 (a)

// require utils
const {getAcceleration} = require("./utils/getAcceleration");
const {getDisplacement} = require("./utils/getDisplacement");
const {getAvgVelocity} = require("./utils/getAvgVelocity");
const {getVelocity} = require("./utils/getVelocity");

// log displacement in ( m ), average velocity in ( m/s ), velocity in ( m/s ), acceleration in ( m/s^2 )
console.log(`displacement: ${getDisplacement(timeElapsed, initialPosition, initialVelocity, acceleration)} m`);
console.log(`average velocity: ${getAvgVelocity(timeElapsed, initialPosition, finalPosition)} m/s`);
console.log(`final velocity: ${getVelocity(timeElapsed, initialVelocity, acceleration)} m/s`);
console.log(`acceleration: ${getAcceleration(timeElapsed, initialPosition, finalPosition, initialVelocity)} m/s^2`);