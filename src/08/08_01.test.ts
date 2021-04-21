export {};
type UsersType = {
  [key: string]: { id: number; name: string };
};

let users: UsersType;
beforeEach(() => {
  users = {
    "100": { id: 100, name: "Dimych" },
    "412412": { id: 412412, name: "Natasha" },
    "1212": { id: 1212, name: "Valera" },
    "1": { id: 1, name: "Katya" },
  };
});

test("should update corresponding user from obj", () => {
  users["1"].name = "Ekaterina";

  expect(users["1"]).toStrictEqual({ id: 1, name: "Ekaterina" });
});

test("should delete corresponding user from obj", () => {
  delete users["1"];

  expect(users["1"]).toBeUndefined();
});
