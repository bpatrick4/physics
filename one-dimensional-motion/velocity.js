// find velocity
const timeElapsed = 60; // seconds (t)
const displacement = 36000; // meters (s)
const initialVelocity = 0; // meters / second (v0)
const acceleration = 20; // meters / second ^ 2 (a)
const round = 2; // accuracy

// avg(v) = displacement / timeElapsed
function findAvgVelocity(timeElapsed, displacement) {
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

// log output
console.log(`average velocity: ${findAvgVelocity(timeElapsed, displacement)} m/s`);
console.log(`final velocity: ${findVelocity(timeElapsed, initialVelocity, acceleration)} m/s`);