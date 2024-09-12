// input values
const I = 8; // current (amperes)
const V = 32; // voltage (volts)
const round = 2; // accuracy
const t = 3600; // time in seconds (1hr = 3600s)

// functions
function getResistance(voltage, amperage) {
  const resistance = ( voltage / amperage );
  return resistance.toFixed(round)
}

function getPower(amperage, voltage) {
  const power = ( amperage * voltage);
  return power.toFixed(round)
}

function getEnergy(seconds) { 
  const power = getPower(I, V)
  const energy = ( power * seconds );
  return energy.toFixed(round)
}

// output to console
console.log(
`a '${V} volt' source delivering '${I} amps' of current must have:
- an overall resistance of '${getResistance(V, I)} ohms'
- a power consumption of '${getPower(I, V)} watts'
- an energy consumption of '${getEnergy(t)} joules'
(if this source is on for '${ t / 3600 } hour(s)')`
)