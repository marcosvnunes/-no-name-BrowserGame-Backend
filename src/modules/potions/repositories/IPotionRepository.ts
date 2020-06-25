import Potion from '@modules/potions/infra/typeorm/entities/Potion';
import ICreatePotionDTO from '@modules/potions/dtos/ICreatePotionDTO';

export default interface ISingleEnermyRepository {
  findById(enermy_id: string): Promise<Potion | undefined>;
  showAll(): Promise<Potion[]>;
  create(data: ICreatePotionDTO): Promise<Potion>;
  save(user: Potion): Promise<Potion>;
}
