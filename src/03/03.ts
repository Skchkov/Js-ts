import { StudentType } from "../02/02";
import { CityType, GovermentBuildingsType, HouseType } from "../02/02_02";

export const sum = (a: number, b: number) => {
  return a + b;
};

export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({ id: new Date().getTime(), title: skill });
};

export const makeStudentActive = (student: StudentType) => {
  student.isActive = true;
};

export const doesStudentLiveIn = (st: StudentType, cityName: string) => {
  return st.adress.city.title === cityName;
};

export const addMoneyToBudget = (
  buildings: GovermentBuildingsType,
  budget: number
) => {
  buildings.budget += budget;
};

export const repairHouse = (houses: HouseType) => {
  houses.repaired = true;
};

export const toFireStaff = (
  building: GovermentBuildingsType,
  staffCountToFire: number
) => {
  building.staffCount -= staffCountToFire;
};

export const toHireStaff = (
  building: GovermentBuildingsType,
  staffCountToHire: number
) => {
  building.staffCount += staffCountToHire;
};

export const createMessage = (city: CityType) => {
  return `Hello ${city.title} citizens. I whant you be happy. All ${city.citizensNumber} men`;
};
