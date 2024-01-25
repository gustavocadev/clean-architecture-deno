import process from 'node:process';
import type { Config } from 'npm:drizzle-kit';

// We need to make sure the in the tsconfig.json file, we need to change the target at least to 'ES6'
export default {
  schema: './src/data/drizzle/schema.ts',
  out: './drizzle',
  driver: 'turso',
  dbCredentials: {
    url: process.env.DB_URL!,
  },
} satisfies Config;
