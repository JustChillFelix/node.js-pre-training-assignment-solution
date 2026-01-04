
export class InMemoryRepository<T extends { id: number }> {
  private entities: T[] = [];

  add(entity: T): T {
    this.entities.push(entity);
    return entity;
  }

  update(id: number, patch: Partial<T>): T {
    const index = this.entities.findIndex(e => e.id === id);
    if (index === -1) {
      throw new Error(`Entity with id ${id} not found`);
    }
    this.entities[index] = { ...this.entities[index], ...patch };
    return this.entities[index];
  }

  remove(id: number): void {
    const index = this.entities.findIndex(e => e.id === id);
    if (index === -1) {
      throw new Error(`Entity with id ${id} not found`);
    }
    this.entities.splice(index, 1);
  }

  findById(id: number): T | undefined {
    return this.entities.find(e => e.id === id);
  }

  findAll(): T[] {
    return [...this.entities];
  }
}
