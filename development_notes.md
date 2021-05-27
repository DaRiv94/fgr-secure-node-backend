

Quickstart
---
1. Run `docker-compose up`
2. Run `docker exec node-backend_web_1 npx sequelize-cli db:migrate`
3. Run `docker exec node-backend_web_1 npm run startupdata`

Running migrations
---

Check with
`docker exec node-backend_web_1 npx sequelize-cli db:migrate:status`

run migrations with
`docker exec node-backend_web_1 npx sequelize-cli db:migrate`


Database
---

check db for tables with
`docker exec -it pg1 psql -U postgres -d local_fgr_budget -c "\d+"`

check data in a table
`docker exec -it pg1 psql -U postgres -d local_fgr_budget -c 'SELECT * FROM \"public\".\"KubernetesFunFacts\";'`

Add start up data
`docker exec node-backend_web_1 npm run startupdata`

PSQL session
---
Go into PSQL session with
`docker exec -it pg1 psql -U postgres -d local_fgr_budget`

then see tables with `\d+`

select KubernetesFunFacts like so 
`SELECT * FROM "public"."KubernetesFunFacts";`

insert to database from psql session
`INSERT INTO "public"."KubernetesFunFacts" (fun_fact) VALUES ('Kubernetes uses containers');`

insert multiple to database from psql session
`INSERT INTO "public"."KubernetesFunFacts" (fun_fact) VALUES ('Kubernetes is cool'), ('Kubernetes is wild');`

quit with `\q`


Start postgres without docker-compose
---
When Developing locally I can run the following to start of a postgres db
`docker run --rm -p 5432:5432 --name pg1 --network budget -v postgres_db_volume:/var/lib/postgresql/data -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=local_fgr_budget postgres:13.0`