import IPotionRepository from '@modules/potions/repositories/IPotionRepository';

import { inject, injectable } from 'tsyringe';
import Potion from '../infra/typeorm/entities/Potion';

@injectable()
class ShowPotionsService {
  constructor(
    @inject('PotionRepository')
    private potionRepository: IPotionRepository
  ) {}

  public async execute(): Promise<Potion[]> {
    const potion = await this.potionRepository.showAll();

    return potion;
  }
}

export default ShowPotionsService;
