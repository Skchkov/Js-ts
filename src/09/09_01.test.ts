function increaseAge(u: UserType) {
  u.age++;
}

type UserType = {
  name: string;
  age: number;
  address: { title: string };
};

test("reference type test", () => {
  let user: UserType = {
    name: "Dimych",
    age: 32,
    address: {
      title: "Minsk",
    },
  };

  increaseAge(user);

  expect(user.age).toBe(33);

  const superman = user;

  superman.age = 1000;

  expect(user.age).toBe(1000);
});

test("array reference test", () => {
  let users = [
    {
      name: "Dimych",
      age: 32,
    },
    {
      name: "Nikita",
      age: 22,
    },
  ];

  let admins = users;
  admins.push({ name: "Ban", age: 10 });

  expect(users[2]).toEqual({ name: "Ban", age: 10 });
});

test("value type test", () => {
  let usersCount = 100;

  let adminsCount = usersCount;

  //adminsCount = adminsCount + 1
  adminsCount++;

  expect(adminsCount).toBe(101);
});

test("references  type test", () => {
  const address = {
    title: "Minsk",
  };
  let user: UserType = {
    name: "Dimych",
    age: 32,
    address: address,
  };

  let user2: UserType = {
    name: "Nikita",
    age: 22,
    address: address,
  };
  address.title = "Tokio";

  expect(user.address.title).toBe("Tokio");
});

test("references type array test", () => {
  const address = {
    title: "Minsk",
  };
  let user: UserType = {
    name: "Dimas",
    age: 32,
    address: address,
  };

  let user2: UserType = {
    name: "Nikita",
    age: 22,
    address: address,
  };

  const users = [user, user2, { name: "Denis", age: 4, address: address }];
  const admins = [user, user2];

  admins[0].name = "Dmitry";
  expect(users[0].name).toBe("Dmitry");
  expect(user.name).toBe("Dmitry");
});
