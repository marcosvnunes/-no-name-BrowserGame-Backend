import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticate';

import CombatEnemyController from '../controllers/CombatEnemyController';

const singleEnermyRoute = Router();

const combatEnemyController = new CombatEnemyController();

singleEnermyRoute.post(
  '/',
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
