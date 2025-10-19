const users = { user1: 18273, user2: 92833, user3: 90315 }

const usersArray = Object.entries(users);

console.log(usersArray);

const modifiedArray = Object.entries(users).map(([key, value]) => {
  return [key, value * 2];
});

console.log(modifiedArray);