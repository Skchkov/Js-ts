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

  //   const copy = {
  //     ...user,
  //   };
  //   copy.address = { ...copy.address, city: city };
  //   return copy;
}

export const upgradeUserLaptop = (u: UserWithLaptopType, laptop: string) => {
  return {
    ...u,
    laptop: { ...u.laptop, title: laptop },
  };
};
