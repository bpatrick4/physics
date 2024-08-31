// finds derivative of any function f(x) = 4x^3 + 3x^2 + 9x + 4
const cubed = { // number in front of: x^3
  coefficient: 4,
}
const squared = { // number in front of: x^2
  coefficient: 3,
}
const base = { // number in front of: x
  coefficient: 9,
}

// derivative functions
function cubedPowerRule(cubed, squared, base) {
  const cubedApplied = {
    coefficient: (cubed.coefficient * 3),
    exponent: 2,
  }

  const squaredApplied = {
    coefficient: (squared.coefficient * 2),
    exponent: 1,
  }

  const baseApplied = {
    coefficient: (base.coefficient)
  }

  console.log(
  `${cubedApplied.coefficient}x^${cubedApplied.exponent} + ` +
  `${squaredApplied.coefficient}x + ` +
  `${baseApplied.coefficient}`
  )
}

function trigPowerRule(trigFunction) {
  if (trigFunction == "sinx") {
    console.log("cos(x)");
  }
  else if (trigFunction == "cosx") {
    console.log("-sin(x)");
  }
  else if (trigFunction == "-sinx") {
    console.log("-cos(x)");
  }
  else if (trigFunction == "-cosx") {
    console.log("sin(x)");
  }
  else {console.log("invalid function")}
}

function ePowerXRule(input) {
  input = input;
  console.log(input);
}

// call function
cubedPowerRule(cubed, squared, base);
trigPowerRule("-sinx") // sinx, cosx, -sinx, -cosx
ePowerXRule("17e^x") // e^x
