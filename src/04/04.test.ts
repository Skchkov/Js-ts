import { CourseType } from "./04";

export {};

test("should take old men older 90", () => {
  const ages = [18, 20, 22, 1, 100, 90, 14];

  const oldAges = ages.filter((age: number) => age > 90);

  expect(oldAges.length).toBe(1);
  expect(oldAges[0]).toBe(100);
});

test("should take courses chipper 160", () => {
  const courses = [
    { title: "CSS", price: 110 },
    { title: "JS", price: 200 },
    { title: "React", price: 150 },
  ];

  const cheapCourses = courses.filter((course: CourseType) => {
    return course.price < 160;
  });

  expect(cheapCourses.length).toBe(2);
  expect(cheapCourses[0].title).toBe("CSS");
  expect(cheapCourses[1].title).toBe("React");
});

test("get only complited tasks", () => {
  const tasks = [
    { id: 1, title: "Bread", isDone: false },
    { id: 2, title: "Milk", isDone: true },
    { id: 3, title: "Salt", isDone: false },
    { id: 4, title: "Sugar", isDone: true },
  ];
  const completedTasks = tasks.filter((task) => task.isDone);

  expect(completedTasks.length).toBe(2);
  expect(completedTasks[0].title).toBe("Milk");
  expect(completedTasks[1].title).toBe("Sugar");
});

test("get only uncomplited tasks", () => {
  const tasks = [
    { id: 1, title: "Bread", isDone: false },
    { id: 2, title: "Milk", isDone: true },
    { id: 3, title: "Salt", isDone: false },
    { id: 4, title: "Sugar", isDone: true },
  ];
  //   const unCompletedTasks = tasks.filter((task) => task.isDone === false);
  const unCompletedTasks = tasks.filter((task) => !task.isDone);

  expect(unCompletedTasks.length).toBe(2);
  expect(unCompletedTasks[0].title).toBe("Bread");
  expect(unCompletedTasks[1].title).toBe("Salt");
});
