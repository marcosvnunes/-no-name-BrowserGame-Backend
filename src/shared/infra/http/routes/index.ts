import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import charactersRouter from '@modules/characters/infra/http/routes/characters.routes';
import singleEnermyRouter from '@modules/singleEnermy/infra/http/routes/singleEnermy.routes';
import potionsRouter from '@modules/potions/infra/http/routes/potions.routes';

import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/characters', charactersRouter);
routes.use('/single-enermy', singleEnermyRouter);
routes.use('/potions', potionsRouter);

routes.use('/users', usersRouter);

export default routes;
