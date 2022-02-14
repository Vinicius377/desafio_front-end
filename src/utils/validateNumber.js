import formatFunctions from "./formatFunctions"

export default function (value, format) {
  if ("0123456789".includes(value[value.length - 1])) {
    if (format) {
      return formatFunctions[format](value)
    } else {
      return formatFunctions.rawNumber(value)
    }
  }

  return undefined
}
