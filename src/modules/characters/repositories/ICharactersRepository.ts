import Character from '../infra/typeorm/entities/character';
import ICreateCharacter from '../dtos/ICreateCharacterDTO';

export default interface ICharactersRepository {
  findById(character_id: string): Promise<Character | undefined>;
  create(data: ICreateCharacter): Promise<Character>;
  save(user: Character): Promise<Character>;
}
