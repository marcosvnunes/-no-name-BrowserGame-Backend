import { getRepository, Repository } from 'typeorm';
import ICreateCharacterDTO from '@modules/characters/dtos/ICreateCharacterDTO';

import IUsersRepository from '@modules/characters/repositories/ICharactersRepository';
import Character from '../entities/character';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<Character>;

  constructor() {
    this.ormRepository = getRepository(Character);
  }

  public async findById(id: string): Promise<Character | undefined> {
    const character = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return character;
  }

  public async create({
    name,
    user_id,
  }: ICreateCharacterDTO): Promise<Character> {
    const user = this.ormRepository.create({ name, user_id });

    await this.ormRepository.save(user);

    return user;
  }

  public async save(character: Character): Promise<Character> {
    return this.ormRepository.save(character);
  }
}

export default UsersRepository;
