import capitalize from "../scripts/capitalize"

test('capitalize', () => {
  expect(capitalize('hello')).toBe('H');
});