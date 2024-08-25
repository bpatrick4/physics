// acceleration -> [avgVelocity = (v0 + (a * t))] 
// displacement -> [(x - x0) = (v0 * t) + (1/2 * a * t^2)]

// find displacement, velocity, & acceleration
function displacement(timeElapsed, initialPosition, initialVelocity, acceleration) {
  let variableOne = (initialVelocity * timeElapsed);  
  let variableTwo = (acceleration / 2 ) * (timeElapsed * timeElapsed);
  let result = (initialPosition + variableOne + variableTwo)
  
  const round = 2
  result = (result.toFixed(round))
  return result;
}

function velocity(timeElapsed, initialVelocity, acceleration) {
  let variableOne = (acceleration * timeElapsed);
  let result = (initialVelocity + variableOne);

  const round = 2
  result = (result.toFixed(round))
  return result;
}

function acceleration(timeElapsed, initialPosition, position, initialVelocity) {
  let deltaPostition = (position - initialPosition); //change in position
  let variableOne = (initialVelocity * timeElapsed);
  let variableTwo = (2 * (deltaPostition - variableOne));
  let result = (variableTwo / (timeElapsed * timeElapsed))
  
  const round = 2
  result = (result.toFixed(round))
  return result;
}

// print out displacement in ( m ), velocity in ( m/s ), acceleration in ( m/s^2 )
console.log("displacement: " +
  displacement(
    10, // timeElapsed ( s )
    0, // initialPosition ( m )
    0, // initialVelocity ( m/s )
    30, // acceleration ( m/s^2 )
  ) + " m"
)

console.log("velocity: " +
  velocity(
    10, // timeElapsed ( s )
    0, // initialVelocity ( m/s )
    30, // acceleration ( m/s^2 )
  ) + " m/s"
)

console.log("acceleration: " +
  acceleration(
    10, // timeElapsed ( s )
    0, // initialPosition ( m )
    1500, // position ( m )
    0, // initialVelocity ( m/s )
  ) + " m/s^2"
)