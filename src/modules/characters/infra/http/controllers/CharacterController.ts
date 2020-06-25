import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCharacterService from '@modules/characters/services/CreateCharacterService';
import { classToClass } from 'class-transformer';

export default class CharacterController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name } = request.body;
      const user_id = request.user.id;
      const characterServive = container.resolve(CreateCharacterService);

      const user = await characterServive.execute({ name, user_id });
      console.log('chegou aqui');

      return response.json(classToClass(user));
    } catch (err) {
      return response.status(400).json({ Error: err.message });
    }
  }
}
