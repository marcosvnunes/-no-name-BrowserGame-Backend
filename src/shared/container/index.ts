import { container } from 'tsyringe';
import '../../modules/users/providers';
import './providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/usersRepository';

import ICharactersRepository from '@modules/characters/repositories/ICharactersRepository';
import CharactersRepository from '@modules/characters/infra/typeorm/repositories/charactersRepository';

import IUsersTokensRepository from '@modules/users/repositories/IUsersTokensRepository';
import UsersTokensRepository from '@modules/users/infra/typeorm/repositories/usersTokensRepository';

import ISingleEnermyRepository from '@modules/singleEnermy/repositories/ISingleEnermyRepository';
import SingleEnermyRepository from '@modules/singleEnermy/infra/typeorm/repositories/singleEnermyRepository';

import IPotionRepository from '@modules/potions/repositories/IPotionRepository';
import PotionRepository from '@modules/potions/infra/typeorm/repositories/potionRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IPotionRepository>(
  'PotionRepository',
  PotionRepository
);

container.registerSingleton<ICharactersRepository>(
  'CharactersRepository',
  CharactersRepository
);

container.registerSingleton<ISingleEnermyRepository>(
  'SingleEnermyRepository',
  SingleEnermyRepository
);

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository
);
