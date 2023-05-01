let age: number;
age = 123;

let userName: string;
userName = "Ridwan";

let isBoolean: boolean;
isBoolean = true;

let movies: string | string[];
movies = ["Gang of London", "The Mandalorian"];
movies = "Vikings";

// type alias
type Person = {
  name: string;
  age: number;
};

let person: Person;
person = {
  name: "Ridwan",
  age: 24,
};

let people: Person[];

// Type inference

let course: string | number = "TypeScript";
course = 234;

// Functions and types

function add(a: number, b: number): number {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 2, 3];
const stringArray = insertAtBeginning(["a, b, b, v"], "w");

// updatedArray[0].split('') // should return an error but instead would return a runtime error; // will show a type error now because of the T
