const calc = require('./app');

test('additionne 2 + 3 = 5', () => {
  expect(calc.additionne(2, 3)).toBe(5);
});

test('soustrait 5 - 2 = 3', () => {
  expect(calc.soustrait(5, 2)).toBe(3);
});

test('multiplie 4 * 3 = 12', () => {
  expect(calc.multiplie(4, 3)).toBe(12);
});

test('divise 10 / 2 = 5', () => {
  expect(calc.divise(10, 2)).toBe(5);
});

test('divise par zero leve une erreur', () => {
  expect(() => calc.divise(1, 0)).toThrow('Division par zero');
});

test('valeurAbsolue(-5) = 5', () => {
  expect(calc.valeurAbsolue(-5)).toBe(5);
});

test('valeurAbsolue(5) = 5', () => {
  expect(calc.valeurAbsolue(5)).toBe(5);
});

test('estPair(4) = true', () => {
  expect(calc.estPair(4)).toBe(true);
});

test('estPair(3) = false', () => {
  expect(calc.estPair(3)).toBe(false);
});
