import {MigrationInterface, QueryRunner} from "typeorm";

export class Migration1625218960375 implements MigrationInterface {
    name = 'Migration1625218960375'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "columns" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "title" character varying NOT NULL, "order" integer NOT NULL, CONSTRAINT "PK_4ac339ccbbfed1dcd96812abbd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "boards" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "title" character varying NOT NULL, "columns" json, CONSTRAINT "PK_606923b0b068ef262dfdcd18f44" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" character varying NOT NULL, "login" character varying, "password" character varying, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tasks" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "title" character varying NOT NULL, "order" integer NOT NULL, "description" character varying NOT NULL, "userId" uuid, "boardId" uuid, "columnId" character varying, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_166bd96559cb38595d392f75a35" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD CONSTRAINT "FK_8a75fdea98c72c539a0879cb0d1" FOREIGN KEY ("boardId") REFERENCES "boards"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`INSERT INTO "users" (name, login, password) VALUES ('Admin', 'admin', '$2b$10$tkqNsldk13QEdg6bA.1v..YRCPiVC84NgsxYLGjQg4Ran4kOD/TG.')`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_8a75fdea98c72c539a0879cb0d1"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP CONSTRAINT "FK_166bd96559cb38595d392f75a35"`);
        await queryRunner.query(`DROP TABLE "tasks"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "boards"`);
        await queryRunner.query(`DROP TABLE "columns"`);
    }

}
