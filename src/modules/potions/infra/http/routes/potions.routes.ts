import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticate';
import BuyPotionController from '../controllers/buyPotionController';

import PotionController from '../controllers/PotionController';

const singleEnermyRoute = Router();

const potionController = new PotionController();

singleEnermyRoute.get('/', potionController.show);

singleEnermyRoute.post(
  '/',
  ensureAuthenticate,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      type: Joi.string().required(),
      value: Joi.number().required(),
      price: Joi.number().required(),
    },
  }),
  potionController.create
);

const buyPotionController = new BuyPotionController();

singleEnermyRoute.post(
  '/buy',
  ensureAuthenticate,
  celebrate({
    [Segments.QUERY]: {
      potion_id: Joi.string().required(),
      character_id: Joi.string().required(),
    },
  }),
  buyPotionController.create
);

export default singleEnermyRoute;
