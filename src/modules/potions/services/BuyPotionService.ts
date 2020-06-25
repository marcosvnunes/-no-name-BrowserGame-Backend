import IPotionRepository from '@modules/potions/repositories/IPotionRepository';
import ICharactersRepository from '@modules/characters/repositories/ICharactersRepository';

import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Characters from '@modules/characters/infra/typeorm/entities/character';

interface IRequest {
  potion_id: string;
  character_id: string;
}

@injectable()
class BuyPotionService {
  constructor(
    @inject('PotionRepository')
    private potionRepository: IPotionRepository,
    @inject('CharactersRepository')
    private charactersRepository: ICharactersRepository
  ) {}

  public async execute({
    potion_id,
    character_id,
  }: IRequest): Promise<Characters> {
    const potion = await this.potionRepository.findById(potion_id);

    const character = await this.charactersRepository.findById(character_id);
    if (!potion || !character) {
      throw new AppError('enemy or character does not exist');
    }
    if (character.stamina >= character.max_stamina) {
      throw new AppError('you already have your stamina at most');
    }
    if (potion.price > character.gold) {
      throw new AppError('you do not have gold enough');
    }
    let newStamina = character.stamina + potion.value;

    if (newStamina > character.max_stamina) {
      newStamina = character.max_stamina;
    }
    character.gold -= potion.price;
    character.stamina = newStamina;

    const newCharacter = await this.charactersRepository.save(character);

    return newCharacter;
  }
}

export default BuyPotionService;
