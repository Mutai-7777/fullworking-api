CREATE TABLE IF NOT EXISTS "Books" (
	"id" serial PRIMARY KEY NOT NULL,
	"Title" text NOT NULL,
	"Author" varchar NOT NULL,
	"Publication Year" integer NOT NULL
);
