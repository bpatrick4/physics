// resistors in parallel

//functions
function parallelOutputTwo(resistorOne, resistorTwo) {
  let resistorOneVar = (1 / resistorOne);
  let resistorTwoVar = (1 / resistorTwo);

  let totalVar = (resistorOneVar + resistorTwoVar);
  let result = (1 / totalVar);

  const round = 2
  result = (result.toFixed(round))
  return result;
}

function parallelOutputThree(resistorOne, resistorTwo, resistorThree) {
  let resistorOneVar = (1 / resistorOne);
  let resistorTwoVar = (1 / resistorTwo);
  let resistorThreeVar = (1 / resistorThree);

  let totalVar = (resistorOneVar + resistorTwoVar + resistorThreeVar);
  let result = (1 / totalVar);

  const round = 2
  result = (result.toFixed(round))
  return result;
}

function parallelOutputFour(resistorOne, resistorTwo, resistorThree, resistorFour) {
  let resistorOneVar = (1 / resistorOne);
  let resistorTwoVar = (1 / resistorTwo);
  let resistorThreeVar = (1 / resistorThree);
  let resistorFourVar = (1 / resistorFour);

  let totalVar = (resistorOneVar + resistorTwoVar + resistorThreeVar + resistorFourVar);
  let result = (1 / totalVar);

  const round = 2
  result = (result.toFixed(round))
  return result;
}

// input resistor values below
console.log("two resistors in parallel \ntotal resistance: " +
  parallelOutputTwo(
    200, // resistor one value
    200, // resistor two value
  ) + " ohms\n"
)

console.log("three resistors in parallel \ntotal resistance: " +
  parallelOutputThree(
    200, // resistor one value
    200, // resistor two value
    200, // resistor three value
  ) + " ohms\n"
)

console.log("four resistors in parallel \ntotal resistance: " +
  parallelOutputFour(
    200, // resistor one value
    200, // resistor two value
    200, // resistor three value
    200, // resistor four value
  ) + " ohms\n"
)
