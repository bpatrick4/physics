// x - x0 = v0(t) + 1/2 * a(t)^2
function getDisplacement(timeElapsed, initialPosition, initialVelocity, acceleration) {
  const variableOne = (initialVelocity * timeElapsed);  // v0(t)
  const variableTwo = (acceleration / 2 ) * (timeElapsed * timeElapsed); // 1/2 * a(t)^2

  let result = (initialPosition + variableOne + variableTwo);
  result = (result.toFixed(2));
  return result;
}

module.exports = {
  getDisplacement,
};