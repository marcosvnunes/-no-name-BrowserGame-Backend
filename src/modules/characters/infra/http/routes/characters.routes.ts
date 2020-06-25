import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import multer from 'multer';
import uploadConfig from '@config/upload';
import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticate';

import CharacterController from '../controllers/CharacterController';
import CharacterAvatarController from '../controllers/CharacterAvatarController';

const charactersRoute = Router();

charactersRoute.use(ensureAuthenticate);
const upload = multer(uploadConfig);
const characterController = new CharacterController();
const characterAvatarController = new CharacterAvatarController();
charactersRoute.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
    },
  }),
  characterController.create
);

charactersRoute.patch(
  '/avatar',
  ensureAuthenticate,
  upload.single('avatar'),
  characterAvatarController.update
);
export default charactersRoute;
