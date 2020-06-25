import ISingleEnermyRepository from '@modules/singleEnermy/repositories/ISingleEnermyRepository';

import { inject, injectable } from 'tsyringe';
import SingleEnermy from '../infra/typeorm/entities/singleEnermy';

import ICreateSingleEnemyDTO from '../dtos/ICreateSingleEnermyDTO';

@injectable()
class CreateAppointmentService {
  constructor(
    @inject('SingleEnermyRepository')
    private singleEnermyRepository: ISingleEnermyRepository
  ) {}

  public async execute(data: ICreateSingleEnemyDTO): Promise<SingleEnermy> {
    const character = await this.singleEnermyRepository.create(data);

    return character;
  }
}

export default CreateAppointmentService;
