postgres:
	docker run --name open_workflow_postgres_db -p 5432:5432 -e POSTGRES_PASSWORD=openworkflow -d postgres:14-alpine

createdb:
	docker exec -it open_workflow_postgres_db createdb --username=postgres --owner=postgres openworkflow_dev

dropdb:
	docker exec -it open_workflow_postgres_db dropdb openworkflow_dev

migrateup:
	migrate -path open_workflow_auth/database/migration -database "postgresql://postgres:openworkflow@localhost:5432/openworkflow_dev?sslmode=disable" -verbose up 

migratedown:
	migrate -path open_workflow_auth/database/migration -database "postgresql://postgres:openworkflow@localhost:5432/openworkflow_dev?sslmode=disable" -verbose down 

connectsupertokens:
	docker run --name supertokens -p 3567:3567 -e POSTGRESQL_CONNECTION_URI="postgresql://postgres:openworkflow@52.31.83.175:5432/openworkflow_dev" -d registry.supertokens.io/supertokens/supertokens-postgresql

connectsupertokensdev:
	docker run --name supertokensdev -p 3567:3567 -d registry.supertokens.io/supertokens/supertokens-postgresql

.PHONY: postgres createdb dropdb migrateup migratedown
