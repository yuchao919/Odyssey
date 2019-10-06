// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 17;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = 'blue';
color = 'red';

let fullName: string = `Bob`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;

// console.log(sentence);

// Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error

x[3] = 'world'; // OK, 'string' can be assigned to 'string | number'

console.log(x[3].toString()); // OK, 'string' and 'number' both have 'toString'

// x[6] = true; // Error, 'boolean' isn't 'string | number'

// Enum
enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;
// console.log(c); // 1

// Any
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean
notSure = Math.PI;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

let listAny: any[] = [1, true, 'free'];

listAny[1] = 100;

// Null and Undefined
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

// Never
// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error('Something failed');
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {}
}

// Type assertions
let someValue: any = 'this is a string';

let strLength: number = (<string>someValue).length;
