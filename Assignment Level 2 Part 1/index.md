```js
let user = {
  name: "Arya",
  sibling: ["Robb", "Ryan", "John"],
};
let allBrothers = ["Robb", "Ryan", "John"];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

Memory representation
Create the memory representation of the above snippet on notebook.
Take a photo/screenshot and add it to the folder code

![name](.)
Answer the following with reason:
user == newUser; // `true` both user and newUser reference the same object in memory. comparing them with `==` checks if they reference the same object, which they do.

user === newUser;// similer to the privious comparison, both `user` and `newUser` reference the same object. comparing them with `===` strick equality, which incluedes both value and data type. that's why result is `true`.

user.name === newUser.name; // both user.name and newUser.name reference the same string value "Arya". comparing them with `===`strick equality, which includes both value and data type. since they both are string type with the same value. result is `true`.

user.name == newUser.name;// `true` both user.name and newUser.name reference the same object in memory. compering them with `==` alse results `true` because their values are the same.

user.sibling == newUser.sibling;// `true` both user.sibling and newUser.sibling reference the same array object in memory. Comparing them with `==` checks if they reference the same object, which they do.

user.sibling `===` newUser.sibling;// Similar to the previous comparison, both user.sibling and newUser.sibling reference the same array object. Comparing them with `===` checks for strict equality, which includes both value and type. Since they are both referencing the same array object, the result is `true`.

user.sibling == allBrothers;// Both user.sibling and allBrothers reference arrays with the same values. Comparing them with `==` checks if they reference the same object, which they don't, but their values are equal, so the result is still `true` .

user.sibling === allBrothers;// Although user.sibling and allBrothers reference arrays with the same values, they are different objects in memory. Comparing them with `===` checks for strict equality, which includes both value and type. Since they are different objects, the result is `false`.

brothersCopy === allBrothers;// Although brothersCopy and allBrothers reference arrays with the same values, they are different objects in memory. Comparing them with `===` checks for strict equality, which includes both value and type. Since they are different objects, the result is `false`.

brothersCopy == allBrothers;// Similar to the previous comparison, although their values are equal, they are different objects in memory. Comparing them with `==` also checks if they reference the same object, which they don't, so the result is `false`.

brothersCopy == user.sibling;//`true` Both brothersCopy and user.sibling reference the same array object in memory. Comparing them with `==` checks if they reference the same object, which they do.

brothersCopy === user.sibling;// Similar to the previous comparison, both brothersCopy and user.sibling reference the same array object. Comparing them with `===` checks for strict equality, which includes both value and type. Since they are both referencing the same array object, the result is `true`.

brothersCopy[0] === user.sibling[0];// Both brothersCopy[0] and user.sibling[0] reference the same string value "Robb". Comparing them with `===` checks for strict equality, which includes both value and type. Since they are both strings with the same value, the result is `true`.

brothersCopy[1] === user.sibling[1];// `true` Both brothersCopy[1] and user.sibling[1] reference the same string value "Ryan". Comparing them with `===` checks for strict equality, which includes both value and type. Since they are both strings with the same value, the result

user.sibling[1] === newUser.sibling[1];// both user.sibling[1] and newUser.sibling[1] reference the same string value "Ryan". Comparing them with `===` checks for strict equality, which includes both value and type. Since they are both strings with the same value, the result is `true`.
