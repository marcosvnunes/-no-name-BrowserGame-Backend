import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticate';
import CombatEnemyController from '../controllers/CombatEnemyController';

import SingleEnermyController from '../controllers/SingleEnermyController';

const singleEnermyRoute = Router();

const singleEnermyController = new SingleEnermyController();

singleEnermyRoute.get('/', singleEnermyController.show);

singleEnermyRoute.post(
  '/',
  ensureAuthenticate,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      max_reward_gold: Joi.number().required(),
      max_reward_status: Joi.number().required(),
      min_reward_gold: Joi.number().required(),
      min_reward_status: Joi.number().required(),
      level: Joi.number().required(),
      experience: Joi.number().required(),
      power: Joi.number().required(),
      stamina_cost: Joi.number().required(),
    },
  }),
  singleEnermyController.create
);

const combatEnemyController = new CombatEnemyController();

singleEnermyRoute.post(
  '/combat',
  ensureAuthenticate,
  celebrate({
    [Segments.QUERY]: {
      enemy_id: Joi.string().required(),
      character_id: Joi.string().required(),
    },
  }),
  combatEnemyController.create
);

export default singleEnermyRoute;
