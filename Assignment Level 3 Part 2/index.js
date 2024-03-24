/*
Game of Thrones : Houses And People's Name
Try to first understand how Array in Objects & Objects in Array are arranged in this example.
Only when you don't get it by yourself, comeback again and read the hint
*/

// Write code for the following problems:
// You have access to a variable named `got`. Which comes from `data.js` file

/*
Hint: (Structure of got variable)
  - got variable is an Object which has one key: `houses`
  - `houses` is an array of multiple house
  - Each house is an Object which has two keys: "name" and "people"
  - people is an array of all persons living in that particular house
  - And, each person is an object with "name" and "description" properties
*/

// 1. Log the value of key "houses"

console.log(got.houses);

// 2. Log the length of the "houses" key

console.log(got.houses.length);

// 3. Log the name of all houses in got one by one

for (let i = 0; i < got.houses.length; i++) {
  console.log(got.houses[i].name);
}

// 4. Log the name of all the people in house Starks (index 0) one by one

for (let i = 0; i < got.houses[0].people.length; i++) {
  console.log(got.houses[0].people[i].name);
}

// 5. Log the name of all the people in house Lannisters (index 1) one by one

for (let i = 0; i < got.houses[1].people.length; i++) {
  console.log(got.houses[1].people[i].name);
}

// 6. Log the description of all the people in house Lannisters (index 1) one by one

for (let i = 0; i < got.houses[1].people.length; i++) {
  console.log(got.houses[1].people[i].description);
}

// 7. Log the name and description of all the people in house Lannisters (index 1) one by one like `I am [name] and my bio is [description]`

for (let i = 0; i < got.houses[1].people.length; i++) {
  console.log(
    `I am ` +
      got.houses[1].people[i].name +
      ` and my bio is ` +
      got.houses[1].people[i].description
  );
}

for (let person of got.houses[1].people) {
  console.log(person.name, person.description);
}

// 8. Log the name and description of all the people in house Starks (index 0) one by one like `I am [name] and my bio is [description]`

for (let i = 0; i < got.houses[0].people.length; i++) {
  console.log(
    `I am ` +
      got.houses[0].people[i].name +
      ` and my bio is ` +
      got.houses[0].people[i].description
  );
}

// 9. Log the name and description of the people in house Starks whose name is `Robb Stark`

for (let person of got.houses[0].people) {
  if (person.name === `Robb Stark`) {
    console.log(person.name, person.description);
  }
}

// 10. Log the name and description of the people in house Lannisters whose name is `Tywin Lannister`

for (let person of got.houses[1].people) {
  if (person.name === `Tywin Lannister`) {
    console.log(person.name, person.description);
  }
}

// 11. Push the name of the houses in an array named `houseNames` and Log the array

let houseNames = [];

for (let i = 0; i < got.houses.length; i++) {
  houseNames.push(got.houses[i].name);
}

console.log(houseNames);
//
let houseNames = [];

for (let house of got.houses) {
  houseNames.push(house.name);
}

console.log(houseNames);

// 12. Log the size of people in Starks house

console.log(got.houses[0].people.length);

// 13. Log the size of people in Lannisters house

console.log(got.houses[1].people.length);

// 14. Add the name and size of people in an object like {Starks: 4, Lannisters: 6} and log the object

let obj = {};

for (let i = 0; i < got.houses.length; i++) {
  let houseNames = got.houses[i].name;
  let length = got.houses[i].people.length;
  obj[houseNames] = length;
}

let houseInfo = {};
//
for (let house of got.houses) {
  houseInfo[house.name] = house.people.length;
}

console.log(houseInfo);

// 15. Log the name of all the people of all the houses in got one by one

for (let i = 0; i < got.houses.length; i++) {
  for (let j = 0; j < got.houses[i].people.length; j++) {
    console.log(got.houses[i].people[j].name);
  }
}
//
for (let house of got.houses) {
  for (let people of house.people) {
    console.log(people.name);
  }
}
// 16. Push all names into a new array named `allPeople` and log the value array.

let allPeople = [];

for (let i = 0; i < got.houses.length; i++) {
  for (let j = 0; j < got.houses[i].people.length; j++) {
    allPeople.push(got.houses[i].people[j].name);
  }
}
//
let allPeople = [];
for (let house of got.houses) {
  for (let people of house.name) {
    allPeople.push(people.name);
  }
}
// 17. Log the value and length of `allPeople` array created above

console.log(allPeople);
console.log(allPeople.length);

// 18. Push all descriptions into an array named `allDescription`

let allDescription = [];

for (let i = 0; i < got.houses.length; i++) {
  for (let j = 0; j < got.houses[i].people.length; j++) {
    allDescription.push(got.houses[i].people[j].description);
  }
}

// 19. Log the value and length `allDescription`

console.log(allDescription);
console.log(allDescription.length);

// 20. Only the description whose length is more than 30. (use .length property on string to get the length)

for (let i = 0; i < got.houses.length; i++) {
  for (let j = 0; j < got.houses[i].people.length; j++) {
    if (got.houses[i].people[j].description.length > 30) {
      console.log(got.houses[i].people[j].description);
    }
  }
}
