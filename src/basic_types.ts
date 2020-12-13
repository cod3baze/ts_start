// Boolean
type BooleanType = false | true
let isDone: BooleanType

console.log(isDone)

// Number
// let decimal: number = 6;
// let hex: number = 0xf00d;
// let binary: number = 0b1010;
// let octal: number = 0o744;
// let big: bigint = 100n;

// String
type colorProps = 'red' | 'green' | 'blue'
const color: colorProps = 'blue'
console.log(color)

// Array[...]
// const list: Array<number>;
const list: number[] = [1, 2, 3]
list.push(7)
console.log(list)

// tuplas
let onlyNecessary: [number, string, number] = [0, '', 0]
onlyNecessary = [1, typeof '', 7]
console.log(onlyNecessary)

// ENum
enum ColorMap {
  Red,
  Green,
  Blue
}
let colorName: ColorMap = ColorMap.Red
colorName = 9
console.log(colorName)
