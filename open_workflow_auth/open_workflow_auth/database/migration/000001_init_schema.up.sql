CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "firstname" varchar NOT NULL,
  "lastname" varchar NOT NULL,
  "email" varchar NOT NULL,
  "password" varchar NOT NULL
);

-- CREATE TABLE "auth" (
--   "user_id" int PRIMARY KEY,
--   "auth_id" varchar NOT NULL,
--   "auth_service" varchar NOT NULL
-- );

-- ALTER TABLE "auth" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");
