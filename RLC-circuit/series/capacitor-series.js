// capacitors in series

//functions
function seriesOutputTwo(capacitorOne, capacitorTwo) {
  let capacitorOneVar = (1 / capacitorOne);
  let capacitorTwoVar = (1 / capacitorTwo);

  let totalVar = (capacitorOneVar + capacitorTwoVar);
  let result = (1 / totalVar);

  const round = 2
  result = (result.toFixed(round))
  return result;
}

function seriesOutputThree(capacitorOne, capacitorTwo, capacitorThree) {
  let capacitorOneVar = (1 / capacitorOne);
  let capacitorTwoVar = (1 / capacitorTwo);
  let capacitorThreeVar = (1 / capacitorThree);

  let totalVar = (capacitorOneVar + capacitorTwoVar + capacitorThreeVar);
  let result = (1 / totalVar);

  const round = 2
  result = (result.toFixed(round))
  return result;
}

function seriesOutputFour(capacitorOne, capacitorTwo, capacitorThree, capacitorFour) {
  let capacitorOneVar = (1 / capacitorOne);
  let capacitorTwoVar = (1 / capacitorTwo);
  let capacitorThreeVar = (1 / capacitorThree);
  let capacitorFourVar = (1 / capacitorFour);

  let totalVar = (capacitorOneVar + capacitorTwoVar + capacitorThreeVar + capacitorFourVar);
  let result = (1 / totalVar);

  const round = 2
  result = (result.toFixed(round))
  return result;
}

// input capacitor values below
console.log("two capacitors in series \ntotal capacitance: " +
  seriesOutputTwo(
    4700, // capacitor one value
    2200, // capacitor two value
  ) + " farads\n"
)

console.log("three capacitors in series \ntotal capacitance: " +
  seriesOutputThree(
    2200, // capacitor one value
    2200, // capacitor two value
    2200, // capacitor three value
  ) + " farads\n"
)

console.log("four capacitors in series \ntotal capacitance: " +
  seriesOutputFour(
    1500, // capacitor one value
    1500, // capacitor two value
    1500, // capacitor three value
    1500, // capacitor four value
  ) + " farads\n"
)
