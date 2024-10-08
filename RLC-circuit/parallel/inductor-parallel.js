// inductors in parallel 1 V = 1 H * 1 A/s
const voltage = 12;
const inductorOne = 200;
const inductorTwo = 200;
const inductorThree = 200;
const inductorFour = 200;
const round = 2;

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

// log output to console
console.log(`using a ${voltage}v source will return the following values:\n`)
console.log(
`${inductorOne}H, ${inductorTwo}H in parallel
- total inductance: ${parallelOutputTwo(inductorOne, inductorTwo)} henries
- current will increase by: ${(voltage / parallelOutputTwo(inductorOne, inductorTwo)).toFixed(round)} amps/second\n`
)

console.log(
`${inductorOne}H, ${inductorTwo}H, ${inductorThree}H in parallel
- total inductance: ${parallelOutputThree(inductorOne, inductorTwo, inductorThree)} henries
- current will increase by: ${(voltage / parallelOutputThree(inductorOne, inductorTwo, inductorThree)).toFixed(round)} amps/second\n`
)

console.log(
`${inductorOne}H, ${inductorTwo}H, ${inductorThree}H, ${inductorFour}H in parallel
- total inductance: ${parallelOutputFour(inductorOne, inductorTwo, inductorThree, inductorFour)} henries
- current will increase by: ${(voltage / parallelOutputFour(inductorOne, inductorTwo, inductorThree, inductorFour)).toFixed(round)} amps/second\n`
)
