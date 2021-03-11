function mdc(num1, num2) {
  var resto

  do {
    resto = num1 % num2

    num1 = num2
    num2 = resto

  } while (resto != 0)

  return num1
}

console.log('MDC 18 60', mdc(18, 60))