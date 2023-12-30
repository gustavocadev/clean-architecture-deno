import { drizzle } from 'npm:drizzle-orm/better-sqlite3';
import { migrate } from 'npm:drizzle-orm/better-sqlite3/migrator';
import Database from 'npm:better-sqlite3';
import * as schema from './schema.ts';

const betterSqlite = new Database(Deno.env.get('DB_URL'));

export const db = drizzle(betterSqlite, {
  schema,
});

// this is important to bring the schema into the database, otherwise the tables won't be created
migrate(db, { migrationsFolder: 'drizzle' });
betterSqlite.close();
