type LocalCityType = {
  title: string;
  countryTitle: string;
};

type AdressType = {
  streetTitle: string;
  city: LocalCityType;
};

type TechType = {
  id: number;
  title: string;
};

export type StudentType = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  adress: AdressType;
  technologies: Array<TechType>;
};

export const student: StudentType = {
  id: 1,
  name: "Dimych",
  age: 32,
  isActive: false,
  adress: {
    streetTitle: "Belskogo 53",
    city: {
      title: "Minks",
      countryTitle: "Belarus",
    },
  },
  technologies: [
    { id: 1, title: "HTML" },
    { id: 2, title: "CSS" },
    { id: 3, title: "React" },
  ],
};

console.log(student.age);
console.log(student.name);
console.log(student.adress.city.title);
console.log(student.technologies[2].title);
