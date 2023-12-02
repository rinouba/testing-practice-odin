import caesar from '../scripts/caesarCipher';

test('Wrapping from z to a', () => {
  expect(caesar('zyxwvutsrqponmlkjihgfedcba', 5)).toBe('edcbazyxwvutsrqponmlkjihgf');
});

test('Keeping same case', () => {
  expect(caesar('Keep same CASE', 7)).toBe('Rllw zhtl JHZL');
});

test('Test punctuation', () => {
  expect(caesar('Hey, how are you?', 3)).toBe('Khb, krz duh brx?');
});