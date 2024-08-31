// find velocity
const timeElapsed = 60; // seconds (t)
const initialPosition = 0; // meters (x0)
const finalPosition = 36000; // meters (x)
const initialVelocity = 0; // meters / second (v0)
const acceleration = 20; // meters / second ^ 2 (a)
const round = 2; // accuracy

// avg(v) = displacement / timeElapsed
function findAvgVelocity(timeElapsed, initialPosition, finalPosition) {
  let displacement = (finalPosition - initialPosition); // x - x0

  let result = (displacement / timeElapsed);
  result = (result.toFixed(round));

  console.log(`average velocity: ${result} m/s`);
  return result;
}

// v = v0 + a(t)
function findVelocity(timeElapsed, initialVelocity, acceleration) {
  let variableOne = (acceleration * timeElapsed); // a(t)
  
  let result = (initialVelocity + variableOne);
  result = (result.toFixed(round));

  console.log(`final velocity: ${result} m/s`);
  return result;
}

// call functions
findAvgVelocity(timeElapsed, initialPosition, finalPosition);
findVelocity(timeElapsed, initialVelocity, acceleration);