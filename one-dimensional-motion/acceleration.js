function acceleration(timeElapsed, initialPosition, position, initialVelocity) {
  let deltaPostition = (position - initialPosition); //change in position
  let variableOne = (initialVelocity * timeElapsed);
  let variableTwo = (2 * (deltaPostition - variableOne));
  let result = (variableTwo / (timeElapsed * timeElapsed))
  
  const round = 2
  result = (result.toFixed(round))
  return result;
}

console.log("acceleration: " +
  acceleration(
    10, // timeElapsed ( s )
    0, // initialPosition ( m )
    1500, // position ( m )
    0, // initialVelocity ( m/s )
  ) + " m/s^2"
)