import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FightSingleEnermyService from '@modules/singleEnermy/services/FightSingleEnermyService';

export default class SingleEnermyController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { enemy_id, character_id } = request.query;

      const fightSingleEnermyService = container.resolve(
        FightSingleEnermyService
      );

      const result = await fightSingleEnermyService.execute({
        enemy_id: String(enemy_id),
        character_id: String(character_id),
      });
      return response.json(result);
    } catch (err) {
      return response.status(400).json({ Error: err.message });
    }
  }
}
