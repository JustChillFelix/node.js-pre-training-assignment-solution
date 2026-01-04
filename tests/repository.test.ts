import { InMemoryRepository } from "../JS-TS/solutions/task7/repository";

interface User {
  id: number;
  name: string;
}

describe("InMemoryRepository", () => {
  let repo: InMemoryRepository<User>;

  beforeEach(() => {
    repo = new InMemoryRepository<User>();
  });

  it("adds and finds entities", () => {
    repo.add({ id: 1, name: "Alice" });
    expect(repo.findById(1)?.name).toBe("Alice");
    expect(repo.findAll().length).toBe(1);
  });

  it("updates entity", () => {
    repo.add({ id: 1, name: "Alice" });
    const updated = repo.update(1, { name: "Bob" });
    expect(updated.name).toBe("Bob");
  });

  it("removes entity", () => {
    repo.add({ id: 1, name: "Alice" });
    repo.remove(1);
    expect(repo.findById(1)).toBeUndefined();
  });

  it("throws error when updating non-existing entity", () => {
    expect(() => repo.update(999, { name: "Ghost" })).toThrow();
  });
});
