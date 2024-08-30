// find displacement
const timeElapsed = 60; // seconds (t)
const initialPosition = 0; // meters (x0)
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

// log output
console.log(`displacement: ${findDisplacement(timeElapsed, initialPosition, initialVelocity, acceleration)} m`);