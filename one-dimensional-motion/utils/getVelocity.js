// v = v0 + a(t)
function getVelocity(timeElapsed, initialVelocity, acceleration) {
  const variableOne = (acceleration * timeElapsed); // a(t)
  
  let result = (initialVelocity + variableOne);
  result = (result.toFixed(2));
  return result;
}

module.exports = {
  getVelocity,
};