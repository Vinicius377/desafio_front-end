export default function (value) {
  const mask = value.split("").filter((digit) => "0123456789".includes(digit));

  if (mask.length > 0) {
    return `${mask.join("")}%`;
  } else {
    return "";
  }
}
