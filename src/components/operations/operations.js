export function sum(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export function multiplication(a, b) {
  return a * b;
}

export function division(a, b) {
  return a / b;
}

export function root(number) {
  return Math.sqrt(number);
}

export function exponent(number) {
  return number * number;
}

export function derivative(number) {
  // No entendi
  return (1 / number).toFixed(5);
}

export function percentage(percentage, number) {
  return (number * percentage) / 100;
}

export function getDecimalsPlaces(number) {
  // No entendi
  const [_int, decimals] = number
    .toLocaleString("fullwide", {
      useGrouping: false,
      maximumSignificantDigits: 21,
    })
    .split(",");

  console.log(decimals);

  if (decimals === undefined) {
    return 0;
  }
  return decimals.length;
}
