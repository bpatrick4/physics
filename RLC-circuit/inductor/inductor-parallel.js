// inductors in parallel

//functions
function parallelOutputTwo(inductorOne, inductorTwo) {
  let inductorOneVar = (1 / inductorOne);
  let inductorTwoVar = (1 / inductorTwo);

  let totalVar = (inductorOneVar + inductorTwoVar);
  let result = (1 / totalVar);

  const round = 2
  result = (result.toFixed(round))
  return result;
}

function parallelOutputThree(inductorOne, inductorTwo, inductorThree) {
  let inductorOneVar = (1 / inductorOne);
  let inductorTwoVar = (1 / inductorTwo);
  let inductorThreeVar = (1 / inductorThree);

  let totalVar = (inductorOneVar + inductorTwoVar + inductorThreeVar);
  let result = (1 / totalVar);

  const round = 2
  result = (result.toFixed(round))
  return result;
}

function parallelOutputFour(inductorOne, inductorTwo, inductorThree, inductorFour) {
  let inductorOneVar = (1 / inductorOne);
  let inductorTwoVar = (1 / inductorTwo);
  let inductorThreeVar = (1 / inductorThree);
  let inductorFourVar = (1 / inductorFour);

  let totalVar = (inductorOneVar + inductorTwoVar + inductorThreeVar + inductorFourVar);
  let result = (1 / totalVar);

  const round = 2
  result = (result.toFixed(round))
  return result;
}

// input inductor values below
console.log("two inductors in parallel \ntotal inductance: " +
  parallelOutputTwo(
    200, // inductor one value
    200, // inductor two value
  ) + " henries\n"
)

console.log("three inductors in parallel \ntotal inductance: " +
  parallelOutputThree(
    200, // inductor one value
    200, // inductor two value
    200, // inductor three value
  ) + " henries\n"
)

console.log("four inductors in parallel \ntotal inductance: " +
  parallelOutputFour(
    200, // inductor one value
    200, // inductor two value
    200, // inductor three value
    200, // inductor four value
  ) + " henries\n"
)
