// Generics

type ArrayString = Array<string>
type ArrayNumber = Array<number>
type ObjWithArray = Array<{name: string}>

// idList só pode conter strings
const idList: ArrayString = []
idList[0] = 's43mpqs2-032343-wcsax'
console.log(idList[0])

// list of numbers
const numberList: ArrayNumber = []
numberList[0] = 234537563
console.log(numberList[0])

// obj apenas pode conter um tipo específico de estrutura de dados
const userData: ObjWithArray = [
  { name: 'elias' }
]
console.log(userData[0].name)

// passando um tipo como argumento
interface Backpack<T> {
  add: (obj: T) => void;
  get: () => T;
}

declare const backpack: Backpack<string>
// backpack.add(2345)
const object = backpack.get()
