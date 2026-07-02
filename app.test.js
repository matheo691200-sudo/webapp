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
