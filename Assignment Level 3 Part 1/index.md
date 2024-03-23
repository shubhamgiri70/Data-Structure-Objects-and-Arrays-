1 - What will be the output and explain the reason.

let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;

Answer the following with reason after going through the above code:

[10] === [10] // `false`
What is the value of obj? // {surname: 'Stark'} because the value of obj is reassigned to { surname: 'Stark' }.

obj == newObj// 'false', The == operator checks for equality after type coercion. Even though both objects have the same key-value pair, they are distinct objects residing at different memory locations.

obj === newObj// 'false', This will return false. The === operator checks for strict equality, meaning it compares both value and type. Since obj and newObj are two distinct objects, the result is false.

user === newObj// 'false', This will return true. Both user and newObj are references to the same object { surname: 'Stark' } after the assignment let user = obj;.

user == newObj// 'false', this will return 'false', because the value of newObj is { name: 'Arya' };, but the value of user is obj which already have assigned value of { surname: 'Stark' };

user == obj// This will return 'true'. Both user and obj reference the same object { surname: 'Stark' } after the assignment let user = obj;.

arr == arr2// This will return true. Both arr and arr2 reference the same array instance. The == operator will check for equality after type coercion, and since they are the same instance, it will return 'true'.

arr === arr2// This will return 'true'. Since arr and arr2 are referencing the same array instance, the === operator will return true, as it checks for strict equality of both value and type.

2 - What's will be the value of person1 and person2 ? Explain with reason. Draw the memory representation diagram.

function personDetails(person) {
person.age = 25;
person = { name: 'John', age: 50 };
return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1); 
console.log(person1); // {name: 'Alex', age: 25}
console.log(person2); // {name: 'John', age: 50}

3 - What will be the output of the below code:

var brothers = ['Bran', 'John'];
var user = {
name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); // true
console.log(user.brothers.length === brothers.length); // true
