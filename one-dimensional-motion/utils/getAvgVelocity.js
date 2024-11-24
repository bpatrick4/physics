// avg(v) = displacement / timeElapsed
function getAvgVelocity(timeElapsed, initialPosition, finalPosition) {
  const displacement = (finalPosition - initialPosition); // x - x0

  let result = (displacement / timeElapsed);
  result = (result.toFixed(2));
  return result;
}

module.exports = {
  getAvgVelocity,
};