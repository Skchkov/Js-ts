export type UsersType = {
  name: string;
  hair: number;
  address: { city: string; house?: number };
};

export type LaptopType = {
  title: string;
};

export type UserWithLaptopType = UsersType & {
  laptop: LaptopType;
};

export type UserWithBooksType = UsersType & {
  books: Array<string>;
};

export type UserWithSkillsType = UsersType & {
  skillsLevel: Array<number>;
};

export type UserWithCompaniesType = {
  companies: Array<{ title: string; id: string }>;
};

export function makeHairStyle(u: UsersType, power: number) {
  const copy = {
    ...u,
    hair: u.hair / power,
  };
  //copy.hair = u.hair / power;
  return copy;
}

export function moveUser(user: UserWithLaptopType, city: string) {
  return {
    ...user,
    address: { ...user.address, city: city },
  };
}
export function moveUserToOtherHouse(
  user: UserWithLaptopType & UserWithBooksType,
  house: number
) {
  return {
    ...user,
    address: { ...user.address, house: house },
  };
}

export const upgradeUserLaptop = (u: UserWithLaptopType, laptop: string) => {
  return {
    ...u,
    laptop: { ...u.laptop, title: laptop },
  };
};

export function addNewBooksToUser(
  user: UserWithLaptopType & UserWithBooksType,
  newBook: string
) {
  return {
    ...user,
    books: [...user.books, newBook],
  };

  // const copy = {
  //   ...user,
  //   books: [...user.books],
  // };

  // copy.books.push(newBook);
  // return copy;
}

export function updateBook(
  user: UserWithLaptopType & UserWithBooksType,
  jsBook: string,
  tsBook: string
) {
  // return {
  //   ...user,
  //   books: [...user.books, newBook],
  // };

  // const copy = {
  //   ...user,
  //   books: user.books.map((b) => {
  //     if (b === jsBook) {
  //       return tsBook;
  //     } else {
  //       return b;
  //     }
  //   }),
  // };

  return {
    ...user,
    books: user.books.map((b) => (b === jsBook ? tsBook : b)),
  };
}

export function updateSkill(
  user: UserWithLaptopType & UserWithBooksType & UserWithSkillsType,
  oldNumber: number,
  newNumber: number
) {
  const copy = {
    ...user,
    skillsLevel: user.skillsLevel.map((sl) =>
      sl === oldNumber ? newNumber : sl
    ),
  };

  return copy;
}

export function removeBook(
  user: UserWithLaptopType & UserWithBooksType,
  oldBook: string
) {
  const copy = {
    ...user,
    books: [...user.books.filter((b) => b !== oldBook)],
  };

  return copy;
}

export function addCompanies(
  user: UserWithLaptopType & UserWithCompaniesType,
  newCompanies: { id: string; title: string }
) {
  return {
    ...user,
    companies: [...user.companies, newCompanies],
  };
}

export const updateCompanyTitle = (
  user: UserWithCompaniesType,
  companyId: string,
  newTitle: string
) => {
  const copy = {
    ...user,
    companies: user.companies.map((c) =>
      c.id === companyId ? { ...c, title: newTitle } : c
    ),
  };
  // const copy = {
  //   ...user,
  //   companies: user.companies.map((c) => {
  //     if (c.id === companyId) {
  //       return { ...c, title: newTitle };
  //     } else return c;
  //   }),
  // };
  return copy;
};

export const updateCompanyTitle2 = (
  companies: any,
  userName: string,
  companyId: string,
  newTitle: string
) => {
  let companyCopy = { ...companies };
  companyCopy[userName] = companyCopy[userName].map((c: any) =>
    c.id === companyId ? { ...c, title: newTitle } : c
  );

  return companyCopy;
};
