// a = 2 * (s - v0(t)) / t^2
function getAcceleration(timeElapsed, initialPosition, finalPosition, initialVelocity) {
  const displacement = (finalPosition - initialPosition); // s
  const variableOne = (initialVelocity * timeElapsed);// v0(t)
  const variableTwo = (2 * (displacement - variableOne)); // 2 * (s - v0(t))
  
  let result = (variableTwo / (timeElapsed * timeElapsed)); 
  result = (result.toFixed(2));
  return result;
}

module.exports = {
  getAcceleration,
};