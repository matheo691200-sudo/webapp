// Petite bibliotheque de calcul (cas d'etude DevSecOps cloud)

function additionne(a, b) {
  return a + b;
}

function soustrait(a, b) {
  return a - b;
}

function multiplie(a, b) {
  return a * b;
}

function divise(a, b) {
  if (b === 0) {
    throw new Error('Division par zero');
  }
  return a / b;
}

function valeurAbsolue(n) {
  if (n < 0) {
    return -n;
  }
  return n;
}

function estPair(n) {
  return n % 2 === 0;
}

module.exports = {
  additionne,
  soustrait,
  multiplie,
  divise,
  valeurAbsolue,
  estPair,
};
