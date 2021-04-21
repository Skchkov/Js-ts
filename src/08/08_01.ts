type UsersType = {
  [key: string]: { id: number; name: string };
};

export const users: UsersType = {
  "100": { id: 100, name: "Dimych" },
  "412412": { id: 412412, name: "Natasha" },
  "1212": { id: 1212, name: "Valera" },
  "1": { id: 1, name: "Katya" },
};
// users[1]

let user = { id: 100500, name: "Igor" };
users[user.id] = user;
delete users[user.id];
users[user.id].name = "Vitya";

export const usersArray = [
  { id: 100, name: "Dimych" },
  { id: 412412, name: "Natasha" },
  { id: 1212, name: "Valera" },
  { id: 1, name: "Katya" },
];

//usersArray.find(u => u.id === 1)
//let usersCopy = [...usersArray.filter(), user]
//let usersArray = usersArray.filter(u => u.id !== user.id)
