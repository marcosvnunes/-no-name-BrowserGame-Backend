import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateSingleEnermyService from '@modules/singleEnermy/services/CreateSingleEnermyService';
import ShowAllSingleEnermysService from '@modules/singleEnermy/services/ShowAllSingleEnermysService';

import { classToClass } from 'class-transformer';

export default class SingleEnermyController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const {
        name,
        max_reward_gold,
        max_reward_status,
        min_reward_gold,
        min_reward_status,
        level,
        experience,
        power,
        stamina_cost,
      } = request.body;
      const singleEnermyService = container.resolve(CreateSingleEnermyService);

      const user = await singleEnermyService.execute({
        name,
        max_reward_gold,
        max_reward_status,
        min_reward_gold,
        min_reward_status,
        level,
        experience,
        power,
        stamina_cost,
      });
      return response.json(classToClass(user));
    } catch (err) {
      return response.status(400).json({ Error: err.message });
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const showAllSingleEnermys = container.resolve(
        ShowAllSingleEnermysService
      );

      const Enermys = await showAllSingleEnermys.execute();
      return response.json(classToClass(Enermys));
    } catch (err) {
      return response.status(400).json({ Error: err.message });
    }
  }
}
