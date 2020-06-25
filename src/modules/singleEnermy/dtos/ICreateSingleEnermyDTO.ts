export default interface ICreateCharacterDTO {
  name: string;
  min_reward_gold: number;
  max_reward_gold: number;
  min_reward_status: number;
  max_reward_status: number;
  level: number;
  experience: number;
  power: number;
  stamina_cost: number;
}
