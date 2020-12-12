interface UserProps {
  id: number;
  name: string;
  getUserData(): string;
}

class UserAccount {
  public id: number;
  public name: string;

  constructor (id: number, name: string) {
    this.name = name
    this.id = id
  }

  getUserData (): string {
    return `${this.name} - ${this.id}`
  }
}

const user: UserProps = new UserAccount(1234, 'eliasallex')
export default user
