import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateSingleEnermy1592336387719
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'single_enermys',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'level',
            type: 'integer',
            default: 1,
          },
          {
            name: 'experience',
            type: 'integer',
            default: 1,
          },
          {
            name: 'min_reward_gold',
            type: 'integer',
            default: 0,
          },
          {
            name: 'max_reward_gold',
            type: 'integer',
            isNullable: true,
            default: 5,
          },
          {
            name: 'min_reward_status',
            type: 'integer',
            default: 0,
          },
          {
            name: 'max_reward_status',
            type: 'integer',
            default: 5,
          },
          {
            name: 'power',
            type: 'integer',
            default: 5,
          },
          {
            name: 'stamina_cost',
            type: 'integer',
            default: 5,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('single_enermys');
  }
}
