// find displacement, avg velocity, final velocity & acceleration
const timeElapsed = 60; // seconds (t)
const initialPosition = 0; // meters (x0)
const finalPosition = 36000; // meters (x)
const initialVelocity = 0; // meters / second (v0)
const acceleration = 20; // meters / second ^ 2 (a)
const round = 2; // accuracy

// x - x0 = v0(t) + 1/2 * a(t)^2
function findDisplacement(timeElapsed, initialPosition, initialVelocity, acceleration) {
  let variableOne = (initialVelocity * timeElapsed);  // v0(t)
  let variableTwo = (acceleration / 2 ) * (timeElapsed * timeElapsed); // 1/2 * a(t)^2

  let result = (initialPosition + variableOne + variableTwo);
  result = (result.toFixed(round));
  return result;
}

// avg(v) = displacement / timeElapsed
function findAvgVelocity(timeElapsed, initialPosition, finalPosition) {
  let displacement = (finalPosition - initialPosition); // x - x0

  let result = (displacement / timeElapsed);
  result = (result.toFixed(round));
  return result;
}

// v = v0 + a(t)
function findVelocity(timeElapsed, initialVelocity, acceleration) {
  let variableOne = (acceleration * timeElapsed); // a(t)
  
  let result = (initialVelocity + variableOne);
  result = (result.toFixed(round));
  return result;
}

// a = 2 * (s - v0(t)) / t^2
function findAcceleration(timeElapsed, initialPosition, finalPosition, initialVelocity) {
  let displacement = (finalPosition - initialPosition); // s
  let variableOne = (initialVelocity * timeElapsed);// v0(t)
  let variableTwo = (2 * (displacement - variableOne)); // 2 * (s - v0(t))
  
  let result = (variableTwo / (timeElapsed * timeElapsed)); 
  result = (result.toFixed(round));
  return result;
}

// log displacement in ( m ), average velocity in ( m/s ), velocity in ( m/s ), acceleration in ( m/s^2 )
console.log(`displacement: ${findDisplacement(timeElapsed, initialPosition, initialVelocity, acceleration)} m`);

console.log(`average velocity: ${findAvgVelocity(timeElapsed, initialPosition, finalPosition)} m/s`);

console.log(`final velocity: ${findVelocity(timeElapsed, initialVelocity, acceleration)} m/s`);

console.log(`acceleration: ${findAcceleration(timeElapsed, initialPosition, finalPosition, initialVelocity)} m/s^2`);