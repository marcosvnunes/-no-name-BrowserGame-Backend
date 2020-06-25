import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCharacter1592324362460
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'characters',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'level',
            type: 'integer',
            default: 1,
          },
          {
            name: 'hability_ponts',
            type: 'integer',
            default: 1,
          },
          {
            name: 'experience',
            type: 'decimal',
            precision: 10,
            scale: 2,
            default: 1,
          },
          {
            name: 'gold',
            type: 'decimal',
            precision: 10,
            scale: 2,
            default: 0,
          },
          {
            name: 'inteligence',
            type: 'integer',
            default: 5,
          },
          {
            name: 'strength',
            type: 'integer',
            default: 5,
          },
          {
            name: 'energy',
            type: 'integer',
            default: 5,
          },
          {
            name: 'agility',
            type: 'integer',
            default: 5,
          },
          {
            name: 'stamina',
            type: 'integer',
            default: 100,
          },
          {
            name: 'max_stamina',
            type: 'integer',
            default: 100,
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
        foreignKeys: [
          {
            name: 'user_token',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('characters');
  }
}
