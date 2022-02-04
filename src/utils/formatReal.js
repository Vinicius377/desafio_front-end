export default function (value) {
  const mask = value
    .split("")
    .filter((digit) => "0123456789".includes(digit))
    .reduce((acc, digit) => {
      if (acc.length % 4 === 0) {
        return `${acc}.${digit}`;
      }
      return acc + digit;
    }, " ");

  if (mask.length > 1) {
    return `R$${mask}`;
  } else {
    return "";
  }
}
