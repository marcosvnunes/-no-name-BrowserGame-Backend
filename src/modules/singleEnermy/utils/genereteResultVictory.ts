import generateGoldVictory from './genereteGoldVictory';
import Enemy from '../infra/typeorm/entities/singleEnermy';

interface IResultCombat {
  enemy: Enemy;
}

export interface IGoldAndExperience {
  gold: number;
  experience: number;
}

export default function generateRsultCombat({
  enemy,
}: IResultCombat): IGoldAndExperience {
  const gold = generateGoldVictory(
    enemy.min_reward_gold,
    enemy.max_reward_gold
  );
  return {
    gold,
    experience: enemy.experience,
  };
}
