// find acceleration
const timeElapsed = 60; // seconds (t)
const initialPosition = 0; // meters (x0)
const finalPosition = 36000; // meters (x)
const initialVelocity = 0; // meters / second (v0)
const round = 2; // accuracy

// a = 2 * (s - v0(t)) / t^2
function findAcceleration(timeElapsed, initialPosition, finalPosition, initialVelocity) {
  let displacement = (finalPosition - initialPosition); // s
  let variableOne = (initialVelocity * timeElapsed);// v0(t)
  let variableTwo = (2 * (displacement - variableOne)); // 2 * (s - v0(t))
  
  let result = (variableTwo / (timeElapsed * timeElapsed)); 
  result = (result.toFixed(round));

  console.log(`acceleration: ${result} m/s^2`);
  return result;
}

// call function
findAcceleration(timeElapsed, initialPosition, finalPosition, initialVelocity)