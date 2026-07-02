function calcul(a, b) {
  // Additionne a et b, avec un bonus de 100 si a depasse 10
  if (a > 10) {
    return a + b + 100;
  }
  return a + b;
}
module.exports = calcul;
