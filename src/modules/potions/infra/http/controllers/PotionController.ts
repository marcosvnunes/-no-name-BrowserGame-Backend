import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePotionService from '@modules/potions/services/CreatePotionService';
import ShowPotionsService from '@modules/potions/services/ShowPotionsService';

export default class PotionController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, type, value, price } = request.body;
      const createPotionService = container.resolve(CreatePotionService);
      const potion = await createPotionService.execute({
        name,
        type,
        value,
        price,
      });
      return response.json(potion);
    } catch (err) {
      return response.status(400).json({ Error: err.message });
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      console.log('chamado');
      const showPotionsService = container.resolve(ShowPotionsService);

      const potions = await showPotionsService.execute();
      return response.json(potions);
    } catch (err) {
      return response.status(400).json({ Error: err.message });
    }
  }
}
