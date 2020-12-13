# Typescript

## Definindo Tipos

O TypeScript suporta uma extensão da linguagem JavaScript, que oferece lugares para você dizer ao TypeScript quais devem ser os tipos.

- inferindo tipo: `const varname: TypeName = valueData`

Por exemplo, para criar um objeto com um **tipo inferido** que inclui `name: string` e `id: number`, você pode escrever:

```js
const user = {
  name: "Hayes",
  id: 0,
};
```

Você pode descrever explicitamente a forma deste objeto usando uma _declaração de interface_:

```ts
// declarando type
interface userProps {
  name: string;
  id: number;
}
```

Você pode então declarar que um objeto JavaScript está de acordo com a forma de sua nova interface usando uma sintaxe como `: TypeName` após uma declaração de variável:

```ts
// adiciona um type ao Object User
const user: userProps {
  name: 'elias',
  id: 32342356,
}
```

Você pode usar uma declaração de interface com classes:

```ts
interface UserProps {
  name: string;
  id: number;
}

class UserAccount {
  public name: "";
  public id: 0;

  UserAccount(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
// adicona interface UserProps para o objeto exportado *user*
const user: userProps = new UserAccount("eliasallex", 32342356);
export default user;
```

- Você pode usar interfaces para anotar parâmetros e retornar valores para funções:

```ts
function getAdminUser(): User {
  //...
}

function deleteUser(user: User) {
  // ...
}
```

---

## Composição de Tipos

Com o TypeScript, você pode criar tipos complexos combinando tipos simples. Existem duas maneiras populares de fazer isso: com sindicatos e com genéricos.

- Sindicatos | Unions

Com uma união, você pode declarar que um tipo pode ser um de vários tipos. Por exemplo, você pode descrever um tipo booleano como verdadeiro ou falso:

```ts
type MyBool = true | false;
```

Um caso de uso popular para tipos de união é descrever o conjunto de strings ou números literais que um valor pode ter:

```ts
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

As Unions também fornecem uma maneira de lidar com diferentes tipos. Por exemplo, você pode ter uma função que recebe uma matriz ou uma string:

```ts
function getLength(value: string | string[]) {
  return value.length;
}
```

Para aprender o tipo de uma variável, use `typeof`:

| Type      | Predicate                |
| --------- | ------------------------ |
| `string`  | `typeof n === 'string'`  |
| `number`  | `typeof n === 'number'`  |
| `boolean` | `typeof n === 'boolean'` |

Por exemplo, você pode fazer com que uma função retorne valores diferentes, dependendo se ela é passada uma string ou uma matriz:

```ts
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
    //          ^ = (parameter) obj: string
  } else {
    return obj;
  }
}
```

Generics

- Os genéricos fornecem variáveis ​​para tipos. Um exemplo comum é um array. Uma matriz sem genéricos pode conter qualquer coisa. Uma matriz com genéricos pode descrever os valores que a matriz contém.

```ts
type ArrayString = Array<string>;
type ArrayNumber = Array<Number>;
type ObjWithArray = Array<{ name: string }>;
```

Você pode declarar seus próprios tipos que usam genéricos:

```ts
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23); // error
```

- tipos básico

TypeScript, como JavaScript, permite que você trabalhe com matrizes de valores. Os tipos de array podem ser escritos de duas maneiras. No primeiro, você usa o tipo dos elementos seguido por [] para denotar uma matriz desse tipo de elemento:

```ts
let list: number[] = [1, 2, 3];
```

A segunda maneira usa um tipo de array genérico, `Array<elemType>`:

```ts
let list: Array<number> = [1, 2, 3];
```

- Tuplas

Os tipos de tupla permitem expressar um array com um número fixo de elementos cujos tipos são conhecidos, mas não precisam ser os mesmos. Por exemplo, você pode querer representar um valor como um par de uma string e um número:

```ts
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
```

- Enum

Uma adição útil ao conjunto padrão de tipos de dados do JavaScript é o enum. Como em linguagens como C #, um enum é uma forma de dar nomes mais amigáveis ​​a conjuntos de valores numéricos.

```ts
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
```
