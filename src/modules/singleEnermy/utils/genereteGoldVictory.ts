import getRandomInt from '@shared/utils/getRandomInt';

export default function generateRsultCombat(
  minGold: number,
  maxGold: number
): number {
  return getRandomInt(minGold, maxGold);
}
