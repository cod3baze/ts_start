# Typescript

## Definindo Tipos

O TypeScript suporta uma extensão da linguagem JavaScript, que oferece lugares para você dizer ao TypeScript quais devem ser os tipos.

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

- Sindicatos

Com uma união, você pode declarar que um tipo pode ser um de vários tipos. Por exemplo, você pode descrever um tipo booleano como verdadeiro ou falso:
