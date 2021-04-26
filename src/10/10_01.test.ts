import {
  addCompanies,
  addNewBooksToUser,
  makeHairStyle,
  moveUser,
  moveUserToOtherHouse,
  removeBook,
  updateBook,
  updateCompanyTitle,
  updateCompanyTitle2,
  updateSkill,
  upgradeUserLaptop,
  UsersType,
  UserWithBooksType,
  UserWithCompaniesType,
  UserWithLaptopType,
  UserWithSkillsType,
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

test("update address to macbook", () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: "Dimych",
    hair: 32,
    address: { city: "Minsk", house: 12 },
    laptop: { title: "Zenbook" },
    books: ["css", "html", "js", "react"],
  };
  const userCopy = moveUserToOtherHouse(user, 98);

  expect(user).not.toBe(userCopy);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.books).toBe(userCopy.books);
  expect(user.address).not.toBe(userCopy.address);
  expect(userCopy.address.house).toBe(98);
});

test("add new books to user", () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: "Dimych",
    hair: 32,
    address: { city: "Minsk", house: 12 },
    laptop: { title: "Zenbook" },
    books: ["css", "html", "js", "react"],
  };
  const userCopy = addNewBooksToUser(user, "ts");

  expect(user).not.toBe(userCopy);
  expect(user.laptop).toBe(userCopy.laptop);

  expect(user.address).toBe(userCopy.address);
  expect(user.books).not.toBe(userCopy.books);
  expect(userCopy.books[4]).toBe("ts");
  expect(user.books.length).toBe(4);
});

test("update js books to ts", () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: "Dimych",
    hair: 32,
    address: { city: "Minsk", house: 12 },
    laptop: { title: "Zenbook" },
    books: ["css", "html", "js", "react"],
  };
  const userCopy = updateBook(user, "js", "ts");

  expect(user).not.toBe(userCopy);
  expect(user.laptop).toBe(userCopy.laptop);

  expect(user.address).toBe(userCopy.address);
  expect(user.books).not.toBe(userCopy.books);
  expect(userCopy.books[2]).toBe("ts");
  expect(user.books.length).toBe(4);
});

test("update skills level", () => {
  let user: UserWithLaptopType & UserWithBooksType & UserWithSkillsType = {
    name: "Dimych",
    hair: 32,
    address: { city: "Minsk", house: 12 },
    laptop: { title: "Zenbook" },
    books: ["css", "html", "js", "react"],
    skillsLevel: [80, 35, 47, 100],
  };
  const userCopy = updateSkill(user, 35, 98);

  expect(user).not.toBe(userCopy);
  expect(user.laptop).toBe(userCopy.laptop);

  expect(user.address).toBe(userCopy.address);
  expect(userCopy.skillsLevel[1]).toBe(98);
  expect(user.skillsLevel.length).toBe(4);
});

test("remove book", () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: "Dimych",
    hair: 32,
    address: { city: "Minsk", house: 12 },
    laptop: { title: "Zenbook" },
    books: ["css", "html", "js", "react"],
  };
  const userCopy = removeBook(user, "js");

  expect(user).not.toBe(userCopy);
  expect(user.laptop).toBe(userCopy.laptop);

  expect(user.address).toBe(userCopy.address);
  expect(user.books).not.toBe(userCopy.books);
  expect(userCopy.books[2]).toBe("react");
  expect(userCopy.books.length).toBe(3);
});

test("add companies and rename", () => {
  let user: UserWithLaptopType & UserWithCompaniesType = {
    name: "Dimych",
    hair: 32,
    address: { city: "Minsk", house: 12 },
    laptop: { title: "Zenbook" },
    companies: [
      { id: "1", title: "Епам" },
      { id: "2", title: " IT-INCUBATOR" },
    ],
  };

  const userCopy = updateCompanyTitle(user, "1", "EPAM") as UserWithLaptopType &
    UserWithCompaniesType;

  const userCopyWithGoogle = addCompanies(user, { id: "3", title: "Google" });

  expect(user).not.toBe(userCopy);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.address).toBe(userCopy.address);
  expect(user.companies).not.toBe(userCopy.companies);
  expect(userCopy.companies[0].title).toBe("EPAM");

  expect(userCopyWithGoogle.companies.length).toBe(3);
  expect(userCopyWithGoogle.companies[2].title).toBe("Google");
});

test("update company", () => {
  let companies = {
    Dimych: [
      { id: "1", title: "Епам" },
      { id: "2", title: " IT-INCUBATOR" },
    ],
    Artem: [{ id: "2", title: " IT-INCUBATOR" }],
  };

  const copy = updateCompanyTitle2(companies, "Dimych", "1", "EPAM");

  expect(copy["Dimych"]).not.toBe(companies["Dimych"]);
  expect(copy["Artem"]).toBe(companies["Artem"]);
  expect(copy["Dimych"][0].title).toBe("EPAM");
});
