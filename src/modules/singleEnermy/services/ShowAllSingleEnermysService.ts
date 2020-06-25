import ISingleEnermyRepository from '@modules/singleEnermy/repositories/ISingleEnermyRepository';

import { inject, injectable } from 'tsyringe';
import SingleEnermy from '../infra/typeorm/entities/singleEnermy';

@injectable()
class ShowAllSingleEnermyService {
  constructor(
    @inject('SingleEnermyRepository')
    private singleEnermyRepository: ISingleEnermyRepository
  ) {}

  public async execute(): Promise<SingleEnermy[]> {
    const Enermys = await this.singleEnermyRepository.findAllEnermys();

    return Enermys;
  }
}

export default ShowAllSingleEnermyService;
