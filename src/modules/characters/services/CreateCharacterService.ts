import ICharactersRepository from '@modules/characters/repositories/ICharactersRepository';
import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import Character from '../infra/typeorm/entities/character';
import IHashProvider from '../providers/hashProvider/models/IHashProvider';

interface IRequest {
  name: string;
  user_id: string;
}
@injectable()
class CreateAppointmentService {
  constructor(
    @inject('CharactersRepository')
    private charactersRepository: ICharactersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider
  ) {}

  public async execute({ name, user_id }: IRequest): Promise<Character> {
    const character = await this.charactersRepository.create({
      name,
      user_id,
    });

    return character;
  }
}

export default CreateAppointmentService;
