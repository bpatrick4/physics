function velocity(timeElapsed, initialVelocity, acceleration) {
  let variableOne = (acceleration * timeElapsed);
  let result = (initialVelocity + variableOne);

  const round = 2
  result = (result.toFixed(round))
  return result;
}

console.log("velocity: " +
  velocity(
    10, // timeElapsed ( s )
    0, // initialVelocity ( m/s )
    30, // acceleration ( m/s^2 )
  ) + " m/s"
)