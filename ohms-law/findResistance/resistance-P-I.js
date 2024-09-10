// input values
const I = 8; // current (amperes)
const P = 256; // power (watts)
const round = 2; // accuracy
const t = 3600; // time in seconds (1hr = 3600s)

// functions
function getVoltage(power, amperage) {
  const voltage = ( power / amperage);
  return voltage.toFixed(round)
}

function getResistance(amperage) {
  const voltage = getVoltage(P, I); 
  const resistance = ( voltage / amperage );
  return resistance.toFixed(round)
}

function getEnergy(power, seconds) {
  const energy = ( power * seconds );
  return energy.toFixed(round)
}

// output to console
console.log(
`a load drawing '${I} amps' of current and consuming '${P} watts' of power must have:
- a voltage of '${getVoltage(P, I)} volts'
- an overall resistance of '${getResistance(I)} ohms'
- an energy consumption of '${getEnergy(P, t)} joules'
(if this source is on for '${ t / 3600 } hour(s)')`
)