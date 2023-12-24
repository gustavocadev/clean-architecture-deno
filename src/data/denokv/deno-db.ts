export class DenoDatabase {
  static async connect() {
    await Deno.openKv();
  }
}
