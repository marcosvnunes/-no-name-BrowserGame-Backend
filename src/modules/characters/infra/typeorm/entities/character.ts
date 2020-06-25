import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/user';

import { Expose } from 'class-transformer';

@Entity('characters')
class Characters {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @Column({ default: 1 })
  level: number;

  @Column('decimal', { default: 0 })
  gold: number;

  @Column('decimal', { default: 0 })
  experience: number;

  @Column({ default: 5 })
  inteligence: number;

  @Column({ default: 5 })
  agility: number;

  @Column({ default: 5 })
  strength: number;

  @Column({ default: 5 })
  energy: number;

  @Column({ default: 100 })
  stamina: number;

  @Column({ default: 100 })
  max_stamina: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'avatar_url' })
  getAvatarUrl(): string | null {
    return this.avatar
      ? `${process.env.APP_API_URL}/files/avatas/${this.avatar}`
      : null;
  }
}

export default Characters;
