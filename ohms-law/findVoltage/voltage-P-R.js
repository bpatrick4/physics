// input values
const R = 4; // resistance (ohms)
const P = 256; // power (watts)
const round = 2; // accuracy
const t = 1800; // time in seconds (1hr = 3600s)

// functions
function getCurrent(power, resistance) {
  const current = Math.sqrt( power / resistance );
  return current.toFixed(round);
}

function getVoltage(power) {
  const amperage = getCurrent(P, R); 
  const voltage = ( power / amperage);
  return voltage.toFixed(round)
}

function getEnergy(power, seconds) { 
  const energy = ( power * seconds );
  return energy.toFixed(round)
}

// output to console
console.log(
`a '${R} ohm' load consuming '${P} watts' of power must have:
- a current draw of '${getCurrent(P, R)} amps' 
- a voltage of '${getVoltage(P)} volts'
- an energy consumption of '${getEnergy(P, t)} joules'
(if this source is on for '${ t / 3600 } hour(s)')`
)