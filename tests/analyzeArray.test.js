import analyzeArray from '../scripts/analyzeArray';

test('Returns an object with the following properties: average, min, max, and length', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
});