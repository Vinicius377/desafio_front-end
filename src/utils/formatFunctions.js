export default {
  // Real
  real: value => {
    const valueFilterNumber = value
      .split("")
      .filter(digit => "0123456789".includes(digit))

    let initialNumbers = [...valueFilterNumber]
      .slice(0, valueFilterNumber.length - 2)
      .reverse()
      .reduce((acc, value) => {
        if (acc.length % 4 === 0) {
          return `${acc} ${value}`
        }
        return `${acc}${value}`
      }, "")
      .split("")
      .reverse()
      .join("")
      .trim()

    const laterNumbers = [...valueFilterNumber].slice(-2).join("")
    if (valueFilterNumber.length === 1) {
      return `R$ 0,0${valueFilterNumber.join("")}`
    }
    if (valueFilterNumber.length === 4 && initialNumbers === "00") {
      return `R$ 0,${laterNumbers}`
    }
    if (valueFilterNumber.length > 2) {
      if (initialNumbers.startsWith("0")) {
        initialNumbers = initialNumbers.split("").splice(1)
      }
      return `R$ ${initialNumbers},${laterNumbers}`
    }
  },
  // Porcentagem
  percentage: value => {
    let mask = value.split("").filter(digit => "0123456789".includes(digit))

    if (!value.split("").includes("%")) {
      if (value.length > 1) {
        mask.splice(-1)
        return `${mask.join("")}%`
      }
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
