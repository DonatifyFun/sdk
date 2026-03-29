export class Memory {
  store: string[] = [];

  add(entry: string) {
    this.store.push(entry);
  }

  getRecent(limit = 5) {
    return this.store.slice(-limit);
  }
}
