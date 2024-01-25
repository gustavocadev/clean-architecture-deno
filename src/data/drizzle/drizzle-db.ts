// import { drizzle } from 'drizzle-orm/better-sqlite3';
// import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
// import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema.ts';

const DATABASE_URL = Deno.env.get('DATABASE_URL') ?? '';
const DATABASE_AUTH_TOKEN = Deno.env.get('DATABASE_AUTH_TOKEN') ?? '';

const client = createClient({
  url: DATABASE_URL,
  authToken: DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, {
  schema,
});

// this is important to bring the schema into the database, otherwise the tables won't be created
// migrate(db, { migrationsFolder: 'drizzle' });
// client.close();
