// input two known values and leave one as: 0
const V = 32; // voltage (v)
const I = 8; // current (a)
const R = 4; // resistance (ohms)
const round = 2; // accuracy

// functions
function findPowerByIR(current, resistance) {
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

function findPowerByVI(voltage, current) {
  const power = ( voltage * current )// P = I * V
  const resistance = ( voltage / current )// R = V / I
  if (voltage == 0 || current == 0) {
    return null;
  } else {
  console.log(
  `voltage: ${voltage.toFixed(round)} v\n` +
  `current: ${current.toFixed(round)} a\n` +
  `resistance: ${resistance.toFixed(round)} ohms\n` +
  `power: ${power.toFixed(round)} watts\n`
  )}
}

function findPowerByVR(voltage, resistance) {
  const power = ((voltage * voltage) / resistance)// P = V^2 / R
  const current = ( voltage / resistance )// I = V / R
  if (voltage == 0 || resistance == 0) {
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
findPowerByIR(I, R)
findPowerByVI(V, I)
findPowerByVR(V, R)
