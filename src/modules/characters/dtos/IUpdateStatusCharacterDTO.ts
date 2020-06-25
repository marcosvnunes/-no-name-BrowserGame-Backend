import Character from '../infra/typeorm/entities/character';

export interface IStatusUpdate {
  gold: number;
  agility: number;
  strength: number;
  life: number;
  energy: number;
  stamina: number;
}

export default interface IUpdateStatusCharacterDTO {
  character: Character;
  statusUpdate: IStatusUpdate;
}
