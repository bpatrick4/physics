// input two known values and leave one as: 0
const I = 8; // current (a)
const R = 4; // resistance (ohms)
const P = 256; // power (watts)
const round = 2; // accuracy

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
  `power: ${power.toFixed(round)} watts\n`
  )}
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
  `power: ${power.toFixed(round)} watts\n`
  )}
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
  `power: ${power.toFixed(round)} watts\n`
  )}
}

// call functions
findVoltageByIR(I, R)
findVoltageByPI(P, I)
findVoltageByPR(P, R)
