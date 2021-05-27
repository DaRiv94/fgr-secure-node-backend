When Developing locally I can run the following to start of a postgres db
`docker run --rm -p 5432:5432 --name pg1 --network budget -v postgres_db_volume:/var/lib/postgresql/data -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=local_fgr_budget postgres:13.0`



check db pod
docker exec -it pg1 psql -U postgres -d local_fgr_budget

see tables with `\d+`

select KubernetesFunFacts like so `SELECT * FROM "public"."KubernetesFunFacts";`

`INSERT INTO "public"."KubernetesFunFacts" (fun_fact) VALUES ('Kubernetes uses containers');`

`INSERT INTO "public"."KubernetesFunFacts" (fun_fact) VALUES ('Kubernetes is cool'), ('Kubernetes is wild');`


quit with `\q`