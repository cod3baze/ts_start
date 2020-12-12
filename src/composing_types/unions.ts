// Unions
type lockStates = 'lock' | 'unlock' | '3333'

let port: lockStates = 'lock'

port = '3333'
console.log(port)

console.log('-----------------')

function getLength (value: string | string[]): number {
  return value.length
}
console.log(getLength(port))

console.log('-----------------')
