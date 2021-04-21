import { useState } from "react";

type StreetType = {
  title: string;
};

type AdressType = {
  street: StreetType;
};

type LessonType = {
  title: string;
  name?: string;
};

export type ManType = {
  name: string;
  lessons: Array<LessonType>;
  age: number;
  adress: AdressType;
};

type PropsType = {
  title: string;
  man: ManType;
  food: Array<string>;
  car: { model: string };
};

function useDimychState(message: string) {}

export const ManComponent: React.FC<PropsType> = ({ title, man, ...props }) => {
  const [message, setMessage] = useState("hello");

  return (
    <div>
      <h1>{title}</h1>
      <hr />
      <div>{man.name}</div>
      <div>{props.car.model}</div>
    </div>
  );
};
