import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('single_enermys')
class SingleEnermy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  level: number;

  @Column()
  experience: number;

  @Column()
  min_reward_gold: number;

  @Column()
  max_reward_gold: number;

  @Column()
  min_reward_status: number;

  @Column()
  max_reward_status: number;

  @Column()
  power: number;

  @Column()
  stamina_cost: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default SingleEnermy;
