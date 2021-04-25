import {
  makeHairStyle,
  moveUser,
  upgradeUserLaptop,
  UsersType,
  UserWithLaptopType,
} from "./10_01";

test("refrence type test", () => {
  let user: UsersType = {
    name: "Dimych",
    hair: 32,
    address: { city: "Minsk" },
  };
  const awesomeUser = makeHairStyle(user, 2);

  expect(awesomeUser.hair).toBe(16);
  expect(user.hair).toBe(32);
  expect(awesomeUser.address).toBe(user.address);
});

test("change address", () => {
  let user: UserWithLaptopType = {
    name: "Dimych",
    hair: 32,
    address: { city: "Minsk", house: 12 },
    laptop: { title: "Zenbook" },
  };
  const movedUser = moveUser(user, "Kiev");

  expect(user).not.toBe(movedUser);
  expect(user.address).not.toBe(movedUser.address);
  expect(user.laptop).toBe(movedUser.laptop);
  expect(movedUser.address.city).toBe("Kiev");
  expect(user.address.city).toBe("Minsk");
});

test("update laptop to macbook", () => {
  let user: UserWithLaptopType = {
    name: "Dimych",
    hair: 32,
    address: { city: "Minsk", house: 12 },
    laptop: { title: "Zenbook" },
  };
  const changedLaptop = upgradeUserLaptop(user, "Macbook");

  expect(changedLaptop.laptop.title).toBe("Macbook");
  expect(user).not.toBe(changedLaptop);
  expect(user.laptop).not.toBe(changedLaptop.laptop);
  expect(user.laptop.title).toBe("Zenbook");
});
