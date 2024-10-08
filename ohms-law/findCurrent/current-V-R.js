// input values
const V = 32; // voltage (volts)
const R = 4; // resistance (ohms)
const round = 2; // accuracy
const t = 3600; // time in seconds (1hr = 3600s)

// functions
function getCurrent(voltage, resistance) {
  const current = ( voltage / resistance );
  return current.toFixed(round);
}

function getPower(voltage) {
  const amperage = getCurrent(V, R); 
  const power = ( amperage * voltage);
  return power.toFixed(round)
}

function getEnergy(seconds) { 
  const power = getPower(V)
  const energy = ( power * seconds );
  return energy.toFixed(round)
}

// output to console
console.log(
`a '${V} volt' source connected to a '${R} ohm' load will result in:
- a current draw of '${getCurrent(V, R)} amps' 
- a power consumption of '${getPower(V)} watts'
- an energy consumption of '${getEnergy(t)} joules'
(if this source is on for '${ t / 3600 } hour(s)')`
)