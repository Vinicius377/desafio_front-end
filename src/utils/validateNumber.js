export default function (value) {
  return value.split("").every((digit) => "0123456789%".includes(digit));
}
