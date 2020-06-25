import ICreateCharacterDTO from '@modules/singleEnermy/dtos/ICreateSingleEnermyDTO';
import { uuid } from 'uuidv4';
import SingleEnermy from '@modules/singleEnermy/infra/typeorm/entities/singleEnermy';
import ISingleEnermyRepository from '../ISingleEnermyRepository';

class SingleEnermyRepository implements ISingleEnermyRepository {
  private users: SingleEnermy[] = [];

  public async create(userData: ICreateCharacterDTO): Promise<SingleEnermy> {
    const user = new SingleEnermy();
    Object.assign(user, { id: uuid() }, userData);
    this.users.push(user);
    return user;
  }

  public async save(user: SingleEnermy): Promise<SingleEnermy> {
    const userIndex = this.users.findIndex(findUser => findUser.id === user.id);
    this.users[userIndex] = user;

    return user;
  }
}

export default SingleEnermyRepository;
