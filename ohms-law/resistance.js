// input two known values and leave one as: 0
const V = 32; // voltage (volts)
const I = 8; // current (amps)
const P = 256; // power (watts)
const round = 2; // accuracy
const t = 3600; // time in seconds (1hr = 3600s)

// functions
function findResistanceByVI(voltage, current) {
  const resistance = ( voltage / current )// R = V / I
  const power = ( current * voltage )// P = I * V
  if (voltage == 0 || current == 0) {
    return null;
  } else {
  console.log(
  `voltage: ${voltage.toFixed(round)} v\n` +
  `current: ${current.toFixed(round)} a\n` +
  `resistance: ${resistance.toFixed(round)} ohms\n` +
  `power: ${power.toFixed(round)} watts`
  )}
  if (t == 0) {
    console.log(``);
  } else {
  console.log(`energy: ${power * t} joules\n`);
  }
}

function findResistanceByPV(power, voltage) {
  const current = ( power / voltage )// I = P / V
  const resistance = ( voltage / current )// R = V / I
  if (power == 0 || voltage == 0) {
    return null;
  } else {
  console.log(
  `voltage: ${voltage.toFixed(round)} v\n` +
  `current: ${current.toFixed(round)} a\n` +
  `resistance: ${resistance.toFixed(round)} ohms\n` +
  `power: ${power.toFixed(round)} watts`
  )}
  if (t == 0) {
    console.log(``);
  } else {
  console.log(`energy: ${power * t} joules\n`);
  }
}

function findResistanceByPI(power, current) {
  const resistance = ( power / (current * current) )// V = sqrt(P / R)
  const voltage = ( current * resistance )// V = I * R
  if (power == 0 || current == 0) {
    return null;
  } else {
  console.log(
  `voltage: ${voltage.toFixed(round)} v\n` +
  `current: ${current.toFixed(round)} a\n` +
  `resistance: ${resistance.toFixed(round)} ohms\n` +
  `power: ${power.toFixed(round)} watts`
  )}
  if (t == 0) {
    console.log(``);
  } else {
  console.log(`energy: ${power * t} joules\n`);
  }
}

// call functions
findResistanceByVI(V, I)
findResistanceByPV(P, V)
findResistanceByPI(P, I)
