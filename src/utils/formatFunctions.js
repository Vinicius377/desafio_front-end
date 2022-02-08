export default {
  // Real
  real: value => {
    const valueInArray = value.split("")

    const lastDigits = value.split("").splice(-3)

    const firstDigits = value
      .split("")
      .splice(0, value.length - 3)
      .filter(digit => "0123456789".includes(digit))
      .reduce((acc, digit) => {
        if (acc.length % 4 === 0) {
          return `${acc} ${digit}`
        }

        return acc + digit
      }, "")

    let mask = ""
    if (valueInArray.length > 2) {
      mask = `${firstDigits}${lastDigits[0]},${lastDigits[1]}${lastDigits[2]}`
    } else {
      mask = value
    }

    return `R$${mask}`
  },
  // Porcentagem
  porcentagem: value => {
    const mask = value.split("").filter(digit => "0123456789".includes(digit))

    if (!value.split("").includes("%")) {
      mask.splice(mask.length - 1, 1)
    }

    return `${mask.join("")}%`
  },
  rawNumber: value => {
    return value
      .split("")
      .filter(digit => "0123456789".includes(digit))
      .join("")
  },
}
