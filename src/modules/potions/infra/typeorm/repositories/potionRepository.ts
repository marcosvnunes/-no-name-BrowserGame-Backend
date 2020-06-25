import { getRepository, Repository } from 'typeorm';
import ICreatePotionDTO from '@modules/potions/dtos/ICreatePotionDTO';
import Potion from '@modules/potions/infra/typeorm/entities/Potion';
import IPotionRepository from '@modules/potions/repositories/IPotionRepository';

class PotionRepository implements IPotionRepository {
  private ormRepository: Repository<Potion>;

  constructor() {
    this.ormRepository = getRepository(Potion);
  }

  public async findById(potion_id: string): Promise<Potion | undefined> {
    const potion = await this.ormRepository.findOne({
      where: { id: potion_id },
    });

    return potion;
  }

  public async showAll(): Promise<Potion[]> {
    const potions = await this.ormRepository.find();

    return potions;
  }

  public async create({
    name,
    type,
    value,
    price,
  }: ICreatePotionDTO): Promise<Potion> {
    const potion = this.ormRepository.create({ name, type, value, price });

    await this.ormRepository.save(potion);

    return potion;
  }

  public async save(potion: Potion): Promise<Potion> {
    return this.ormRepository.save(potion);
  }
}

export default PotionRepository;
