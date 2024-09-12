// input values
const I = 8; // current (amperes)
const R = 4; // resistance (ohms)
const round = 2; // accuracy
const t = 3600; // time in seconds (1hr = 3600s)

// functions
function getVoltage(amperage, resistance) {
  const voltage = ( amperage * resistance );
  return voltage.toFixed(round)
}

function getPower(amperage) {
  const voltage = getVoltage(I, R);
  const power = ( amperage * voltage);
  return power.toFixed(round)
}

function getEnergy(seconds) { 
  const power = getPower(I)
  const energy = ( power * seconds );
  return energy.toFixed(round)
}

// output to console
console.log(
`a '${R} ohm' load drawing '${I} amps' of current must have:
- a voltage of '${getVoltage(I, R)} volts'
- a power consumption of '${getPower(I)} watts'
- an energy consumption of '${getEnergy(t)} joules'
(if this source is on for '${ t / 3600 } hour(s)')`
)