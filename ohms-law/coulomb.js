// 1 coulomb = amperes * seconds
const V = 14; // voltage (volts)
const I = .4; // current (amps)
const t = 3600; // time in seconds
const round = 2; // accuracy

// Q = I * t
function findCoulomb(amperes, seconds) {
  const coulomb = (amperes * seconds);
  console.log(`charge: ${coulomb.toFixed(round)} coulombs`);
  return coulomb;
}

// Q = I * t
function findJoules(voltage, amperes, seconds) {
  const joules = (voltage * amperes * seconds);
  console.log(`energy: ${joules.toFixed(round)} joules`);
  return joules;
}

// call function
findCoulomb(I, t)
findJoules(V, I, t)