import ISingleEnermyRepository from '@modules/singleEnermy/repositories/ISingleEnermyRepository';
import ICharactersRepository from '@modules/characters/repositories/ICharactersRepository';
import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Characters from '@modules/characters/infra/typeorm/entities/character';
import genereteResultVictory from '../utils/genereteResultVictory';

interface IRequest {
  enemy_id: string;
  character_id: string;
}

interface IResponse {
  character: Characters;
  result?: object;
  error?: string;
}

@injectable()
class FightSingleEnemyService {
  constructor(
    @inject('SingleEnermyRepository')
    private singleEnermyRepository: ISingleEnermyRepository,
    @inject('CharactersRepository')
    private charactersRepository: ICharactersRepository
  ) {}

  public async execute({
    enemy_id,
    character_id,
  }: IRequest): Promise<IResponse> {
    const enemy = await this.singleEnermyRepository.findEnermy(enemy_id);

    const character = await this.charactersRepository.findById(character_id);
    if (!enemy || !character) {
      throw new AppError('enemy or character does not exist');
    }

    if (character.stamina < enemy.stamina_cost) {
      throw new AppError('you do not have stamina enough ');
    }
    const characterPower =
      (character.inteligence +
        character.strength +
        character.energy +
        character.agility) /
      4;

    character.stamina -= enemy.stamina_cost;
    if (characterPower < enemy.power) {
      const newCharacter = await this.charactersRepository.save(character);

      return {
        character: newCharacter,
        error: 'voce apanhou igual sempre',
      };
    }

    const result = genereteResultVictory({ enemy });

    Object.assign(character, result);

    const newCharacter = await this.charactersRepository.save(character);
    return {
      character: newCharacter,
      result,
    };
  }
}

export default FightSingleEnemyService;
