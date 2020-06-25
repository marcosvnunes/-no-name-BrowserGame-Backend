import { Request, Response } from 'express';
import { container } from 'tsyringe';
import BuyPotionService from '@modules/potions/services/BuyPotionService';

export default class BuyPotionController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { potion_id, character_id } = request.query;

      const buyPotionService = container.resolve(BuyPotionService);

      const result = await buyPotionService.execute({
        potion_id: String(potion_id),
        character_id: String(character_id),
      });
      return response.json(result);
    } catch (err) {
      return response.status(400).json({ Error: err.message });
    }
  }
}
