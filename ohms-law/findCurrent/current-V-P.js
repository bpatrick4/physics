// input values
const V = 32; // voltage (volts)
const P = 256; // power (watts)
const round = 2; // accuracy
const t = 3600; // time in seconds (1hr = 3600s)

// functions
function getCurrent(power, voltage) {
  const current = ( power / voltage );
  return current.toFixed(round);
}

function getResistance(voltage) {
  const amperage = getCurrent(V, P); 
  const resistance = ( voltage / amperage );
  return resistance.toFixed(round)
}

function getEnergy(power, seconds) {
  const energy = ( power * seconds );
  return energy.toFixed(round)
}

// output to console
console.log(
`a '${V} volt' source consuming '${P}' watts of power must have:
- a current draw of '${getCurrent(V, P)} amps' 
- a resistance of '${getResistance(V)} ohms'
- an energy consumption of '${getEnergy(P, t)} joules'
(if this source is on for '${ t / 3600 } hour(s)')`
)