// resistors in parallel
const voltage = 12;
const resistorOne = 100;
const resistorTwo = 200;
const resistorThree = 300;
const resistorFour = 400;
const round = 2;


//functions
function parallelOutputTwo(resistorOne, resistorTwo) {
  let resistorOneVar = (1 / resistorOne);
  let resistorTwoVar = (1 / resistorTwo);

  let totalVar = (resistorOneVar + resistorTwoVar);
  let result = (1 / totalVar);

  result = (result.toFixed(round))
  return result;
}

function parallelOutputThree(resistorOne, resistorTwo, resistorThree) {
  let resistorOneVar = (1 / resistorOne);
  let resistorTwoVar = (1 / resistorTwo);
  let resistorThreeVar = (1 / resistorThree);

  let totalVar = (resistorOneVar + resistorTwoVar + resistorThreeVar);
  let result = (1 / totalVar);

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

  result = (result.toFixed(round))
  return result;
}

// log output to console
console.log("using a " + voltage + "v source will return the following values: \n")
console.log(
`${resistorOne}ohms, ${resistorTwo}ohms in parallel
- total resistance: ${parallelOutputTwo(resistorOne, resistorTwo)} ohms
- total current: ${(voltage / parallelOutputTwo(resistorOne, resistorTwo)).toFixed(round)} amps
- total power: ${(voltage * (voltage / parallelOutputTwo(resistorOne, resistorTwo))).toFixed(round)} watts\n`
)

console.log(
`${resistorOne}ohms, ${resistorTwo}ohms, ${resistorThree}ohms in parallel
- total resistance: ${parallelOutputThree(resistorOne, resistorTwo, resistorThree)} ohms
- total current: ${(voltage / parallelOutputThree(resistorOne, resistorTwo, resistorThree)).toFixed(round)} amps
- total power: ${(voltage * (voltage / parallelOutputThree(resistorOne, resistorTwo, resistorThree))).toFixed(round)} watts\n`
)

console.log(
`${resistorOne}ohms, ${resistorTwo}ohms, ${resistorThree}ohms, ${resistorFour}ohms in parallel
- total resistance: ${parallelOutputFour(resistorOne, resistorTwo, resistorThree, resistorFour)} ohms
- total current: ${(voltage / parallelOutputFour(resistorOne, resistorTwo, resistorThree, resistorFour)).toFixed(round)} amps
- total power: ${(voltage * (voltage / parallelOutputFour(resistorOne, resistorTwo, resistorThree, resistorFour))).toFixed(round)} watts\n`
)
