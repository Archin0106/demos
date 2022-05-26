console.log('Welcome to TypeScript');
let age: number = 25;
console.log(age);
let isCompleted: boolean = true;
let firstname: string = 'John';

// Declare array is typescript
// Method 1
let fruits: string[] = ['Apple', 'Mango', 'Banana', 'Grapes'];

// Method 2
let list: Array<number> = [10, 20, 30, 40, 50];

// Declaring tuple
let x: [number, string];
x = [25, 'Hello'];

// Declaring enums
enum MusicPlayer {
    Play = 11,
    Pause = 12,
    Stop = 13,
    Record = 14
}
console.log(MusicPlayer.Play);

// Declaring unknown variable type
let data: unknown;
data = true;

// Declaring function with return types
const Show = (name: string): string => {
    return `Hello ${name}`;
}

const SayHello = (name: string): void => {
    console.log(`Hello ${name}`);
}

console.log(Show('John'));
SayHello('Peter');

// Declaring class in typescript
class Calculator {
    private num: number = 10;
    public name: string;
    Add(a: number, b: number): number {
        return a + b;
    }
}

class ScientificCalculator extends Calculator {
    constructor(){
        super();
        this.name='Hello';
    }
    Product(a: number, b: number): number {
        return a * b;
    }
}

let obj = new ScientificCalculator();
console.log(obj.Add(10, 20));
console.log(obj.Product(10, 20));

obj.name = 'John';