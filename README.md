# NestJS REST Service

## Common instructions

1. Clone this repo to your computer: `git clone git@github.com:odil-abdulloyev/express-rest-service.git`;
2. Go to project folder: `cd express-rest-service`;
3. Switch to development branch: `git checkout nestjs`;
4. Install dependencies: `npm i`;
5. Run program: `npm start`;
6. Run tests in new tab of terminal: `npm run test:auth`;
7. Run linter: `npm run lint`;
8. Build project: `npm run build`.

## System requirements
NodeJs v14 or newer

## Docker instructions

**To run application in docker container go to `.env` file and set value of `PGHOST` variable to `postgres`.**

* Run containers: `docker-compose up`
* Show images: `docker images`
* Show running containers: `docker ps`
* Show all containers: `docker ps -a`
* Show networks: `docker network ls`
* Scan image: `docker scan <image_name>`
* Remove image: `docker rmi <image_id>`
* Remove unused images, container and networks: `docker system prune`
* Stop and remove containers: `docker-compose down`

## Migration instructions

* Generate migration: `npm run migration:generate`
* Run migration: `npm run migration:run`
* Revert migration: `npm run migration:revert`

## Using `fastify`

To run application in `fastify` platform set the value of environment variable `USE_FASTIFY` to `true`, then restart the server.

## Performance testing using `artillery`

Open terminal and type `npm run artillery`. This command will test the application performance and generate report files in `json` and `html` formats.

## Performance testing results

For `express` platform: [https://express-report.netlify.app/](https://express-report.netlify.app/)

For `fastify` platform: [https://fastify-report.netlify.app/](https://fastify-report.netlify.app/)
