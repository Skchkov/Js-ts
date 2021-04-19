import { CityType, GovermentBuildingsType } from "../02/02_02";

export {};

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
  city.houses = city.houses.filter(
    (house) => house.address.street.title !== street
  );
};

export const getBuildingsWithStaffCountGreaterThen = (
  buildings: Array<GovermentBuildingsType>,
  count: number
) => {
  return buildings.filter((buildings) => buildings.staffCount > count);
};
