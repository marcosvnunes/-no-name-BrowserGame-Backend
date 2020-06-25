import ICreateCharacterDTO from '@modules/characters/dtos/ICreateCharacterDTO';
import { uuid } from 'uuidv4';
import Character from '@modules/characters/infra/typeorm/entities/character';
import IUsersRepository from '../ICharactersRepository';

class UsersRepository implements IUsersRepository {
  private users: Character[] = [];

  public async create(userData: ICreateCharacterDTO): Promise<Character> {
    const user = new Character();
    Object.assign(user, { id: uuid() }, userData);
    this.users.push(user);
    return user;
  }

  public async save(user: Character): Promise<Character> {
    const userIndex = this.users.findIndex(findUser => findUser.id === user.id);
    this.users[userIndex] = user;

    return user;
  }
}

export default UsersRepository;
