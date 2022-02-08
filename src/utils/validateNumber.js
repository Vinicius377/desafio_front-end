import formatFunctions from "./formatFunctions"

export default function (value, format) {
  let mask = ""
  if ("0123456789".includes(value[value.length - 1])) {
    if (format) {
      mask = formatFunctions[format](value)
    } else {
      return (mask = formatFunctions.rawNumber(value))
    }
  }
  const isValid = /[0-9].(%|[0-9][0-9])$/.test(mask)

  return isValid ? mask : isValid
}
