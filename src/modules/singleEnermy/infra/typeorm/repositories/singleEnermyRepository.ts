import { getRepository, Repository } from 'typeorm';
import ICreateSingleEnermyDTO from '@modules/singleEnermy/dtos/ICreateSingleEnermyDTO';
import ISingleEnermyRepository from '@modules/singleEnermy/repositories/ISingleEnermyRepository';
import SingleEnermy from '../entities/singleEnermy';

class SingleEnermyRepository implements ISingleEnermyRepository {
  private ormRepository: Repository<SingleEnermy>;

  constructor() {
    this.ormRepository = getRepository(SingleEnermy);
  }

  public async findEnermy(enemy_id: string): Promise<SingleEnermy | undefined> {
    const enemy = await this.ormRepository.findOne({ where: { id: enemy_id } });

    return enemy;
  }

  public async findAllEnermys(): Promise<SingleEnermy[]> {
    const Enermys = await this.ormRepository.find();

    return Enermys;
  }

  public async create(data: ICreateSingleEnermyDTO): Promise<SingleEnermy> {
    const user = this.ormRepository.create(data);

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: SingleEnermy): Promise<SingleEnermy> {
    return this.ormRepository.save(user);
  }
}

export default SingleEnermyRepository;
