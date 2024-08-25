function displacement(timeElapsed, initialPosition, initialVelocity, acceleration) {
  let variableOne = (initialVelocity * timeElapsed);  
  let variableTwo = (acceleration / 2 ) * (timeElapsed * timeElapsed);
  let result = (initialPosition + variableOne + variableTwo)
  
  const round = 2
  result = (result.toFixed(round))
  return result;
}

console.log("displacement: " +
  displacement(
    10, // timeElapsed ( s )
    0, // initialPosition ( m )
    0, // initialVelocity ( m/s )
    30, // acceleration ( m/s^2 )
  ) + " m"
)