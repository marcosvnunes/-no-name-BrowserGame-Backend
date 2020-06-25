import { inject, injectable } from 'tsyringe';
import IPotionRepository from '@modules/potions/repositories/IPotionRepository';
import ICreatePotionDTO from '@modules/potions/dtos/ICreatePotionDTO';

import Potion from '@modules/potions/infra/typeorm/entities/Potion';

@injectable()
class CreateAppointmentService {
  constructor(
    @inject('PotionRepository')
    private potionRepository: IPotionRepository
  ) {}

  public async execute({
    name,
    type,
    value,
    price,
  }: ICreatePotionDTO): Promise<Potion> {
    const character = await this.potionRepository.create({
      name,
      type,
      value,
      price,
    });

    return character;
  }
}

export default CreateAppointmentService;
