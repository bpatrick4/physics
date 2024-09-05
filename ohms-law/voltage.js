// input at least two * values
const I = 8; // current (a) *
const R = 4; // resistance (ohms) *
const P = 256; // power (watts) *
const round = 2; // accuracy
const t = 3600; // time in seconds (1hr = 3600s)

// functions
function findVoltageByIR(current, resistance) {
  const voltage = ( current * resistance )// V = I * R
  const power = ( current * voltage )// P = I * V
  if (current == 0 || resistance == 0) {
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

function findVoltageByPI(power, current) {
  const voltage = ( power / current )// V = P / I
  const resistance = ( voltage / current )// R = V / I
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

function findVoltageByPR(power, resistance) {
  const voltage = Math.sqrt( power * resistance )// V = sqrt(P * R)
  const current = ( voltage / resistance )// I = V / R
  if (power == 0 || resistance == 0) {
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
findVoltageByIR(I, R)
findVoltageByPI(P, I)
findVoltageByPR(P, R)
