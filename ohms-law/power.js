// input two known values and leave one as: 0
const V = 32; // voltage (volts)
const I = 8; // current (amps)
const R = 4; // resistance (ohms)
const round = 2; // accuracy
const t = 3600; // time in seconds (1hr = 3600s)

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
  `power: ${power.toFixed(round)} watts`
  )}
  if (t == 0) {
    console.log(``);
  } else {
  console.log(`energy: ${power * t} joules\n`);
  }
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
  `power: ${power.toFixed(round)} watts`
  )}
  if (t == 0) {
    console.log(``);
  } else {
  console.log(`energy: ${power * t} joules\n`);
  }
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
  `power: ${power.toFixed(round)} watts`
  )}
  if (t == 0) {
    console.log(``);
  } else {
  console.log(`energy: ${power * t} joules\n`);
  }
}

// call functions
findPowerByIR(I, R)
findPowerByVI(V, I)
findPowerByVR(V, R)
