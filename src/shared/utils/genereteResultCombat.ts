import getRandomInt from './getRandomInt';

interface IResultCombat {
  maxGold: number;
  minGold: number;
  maxStatus: number;
  minStatus: number;
  typeResult: 'victory' | 'defeat';
}

export interface IResultCombatResponse {
  gold: number;
  agility: number;
  strength: number;
  inteligence: number;
  energy: number;
}

export default function generateRsultCombat({
  maxGold,
  minGold,
  maxStatus,
  minStatus,
  typeResult,
}: IResultCombat): IResultCombatResponse {
  let possitiveOrNegative = 1;

  if (typeResult === 'defeat') {
    possitiveOrNegative = -1;
  }
  const Inteligence = getRandomInt(minStatus, maxStatus) * possitiveOrNegative;
  const Agility = getRandomInt(minStatus, maxStatus) * possitiveOrNegative;
  const Energy = getRandomInt(minStatus, maxStatus) * possitiveOrNegative;
  const Strength = getRandomInt(minStatus, maxStatus) * possitiveOrNegative;
  const Gold = typeResult === 'defeat' ? 0 : getRandomInt(minGold, maxGold);

  return {
    gold: Gold,
    strength: Strength,
    inteligence: Inteligence,
    energy: Energy,
    agility: Agility,
  };
}
