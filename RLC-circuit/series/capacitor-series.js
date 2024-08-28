// capacitors in series 1 F = 1 C / 1 V
const voltage = 12;
const capacitorOne = 47;
const capacitorTwo = 47;
const capacitorThree = 47;
const capacitorFour = 47;
const round = 2;

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

// log output to console
console.log(`using a ${voltage}v source will return the following values:\n`)
console.log(
`${capacitorOne}F, ${capacitorTwo}F in series
- total capacitance: ${seriesOutputTwo(capacitorOne, capacitorTwo)} farads
- stored charge: ${(voltage * seriesOutputTwo(capacitorOne, capacitorTwo)).toFixed(round)} coulombs\n`
)

console.log(
`${capacitorOne}F, ${capacitorTwo}F, ${capacitorThree}F in series
- total capacitance: ${seriesOutputThree(capacitorOne, capacitorTwo, capacitorThree)} farads
- stored charge: ${(voltage * seriesOutputThree(capacitorOne, capacitorTwo, capacitorThree)).toFixed(round)} coulombs\n`
)

console.log(
`${capacitorOne}F, ${capacitorTwo}F, ${capacitorThree}F, ${capacitorFour}F in series
- total capacitance: ${seriesOutputFour(capacitorOne, capacitorTwo, capacitorThree, capacitorFour)} farads
- stored charge: ${(voltage * seriesOutputFour(capacitorOne, capacitorTwo, capacitorThree, capacitorFour)).toFixed(round)} coulombs\n`
)
