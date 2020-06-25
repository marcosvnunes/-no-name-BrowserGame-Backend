import SingleEnermy from '../infra/typeorm/entities/singleEnermy';
import ICreateSingleEnemyDTO from '../dtos/ICreateSingleEnermyDTO';

export default interface ISingleEnermyRepository {
  findEnermy(enermy_id: string): Promise<SingleEnermy | undefined>;
  findAllEnermys(): Promise<SingleEnermy[]>;
  create(data: ICreateSingleEnemyDTO): Promise<SingleEnermy>;
  save(user: SingleEnermy): Promise<SingleEnermy>;
}
