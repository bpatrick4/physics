// input two known values and leave one as: 0
const V = 32; // voltage (v)
const R = 4; // resistance (ohms)
const P = 256; // power (watts)
const round = 2; // accuracy

// functions
function findCurrentByVR(voltage, resistance) {
  const current = ( voltage / resistance )// I = V / R
  const power = ( current * voltage )// P = I * V
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

function findCurrentByPV(power, voltage) {
  const current = ( power / voltage )// I = P / V
  const resistance = ( voltage / current )// R = V / I
  if (power == 0 || voltage == 0) {
    return null;
  } else {
  console.log(
  `voltage: ${voltage.toFixed(round)} v\n` +
  `current: ${current.toFixed(round)} a\n` +
  `resistance: ${resistance.toFixed(round)} ohms\n` +
  `power: ${power.toFixed(round)} watts\n`
  )}
}

function findCurrentByPR(power, resistance) {
  const current = Math.sqrt( power / resistance )// V = sqrt(P / R)
  const voltage = ( current * resistance )// V = I * R
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
findCurrentByVR(V, R)
findCurrentByPV(P, V)
findCurrentByPR(P, R)
