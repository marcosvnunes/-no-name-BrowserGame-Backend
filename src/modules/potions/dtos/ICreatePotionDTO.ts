export default interface ICreateCharacterDTO {
  name: string;
  type: 'stamina' | 'maxStamina';
  value: number;
  price: number;
}
