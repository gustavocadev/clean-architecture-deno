/// <reference lib="deno.unstable" />
import { DenoDatabase } from './data/denokv/deno-db.ts';
import { AppRoutes } from './routes.ts';
import { Server } from './server.ts';

await DenoDatabase.connect();

const server = new Server({
  routes: AppRoutes.routes,
});

server.start();
