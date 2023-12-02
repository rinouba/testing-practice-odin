import {add,subtract,divide,multiply} from '../scripts/calculator'

test('Add!',() => { 
  expect(add(1,3)).toBe(4)
 })

 test('Subtract!',() => { 
  expect(subtract(8,4)).toBe(4)
 })

 test('Divide!',() => { 
  expect(divide(8,2)).toBe(4)
 })

 test('Multiply!',() => { 
  expect(multiply(2,2)).toBe(4)
 })