// TYPE ALIASES //

// used to make code as readable as possible

type ID = string;
type PopularTag = string;

// type alias with union command. can assign a value as a string or null
type MaybePopularTag = PopularTag | null;

// add the type alias popular tag and say it's an array
const popularTags: PopularTag[] = ['dragon', 'coffee']

// using 'const' will not let you change the value of a variable
// using 'let' will let you change the value of the variable but only to the same type of the original variable

let hello = 'world';

// FUNCTIONS //

// have to specify the type of the variable being passed
const getFullName = (name: string, surname: string): string => {
    return name + ' ' + surname;
}

console.log(getFullName('Mark', 'Giannelli'))

// OBJECTS //
// interfaces - create objects with specific properties
// put '?' after key to specify that the property is not mandatory
// need to separate name of interfaces and classes from each other
// done by adding 'Interface' after the name of the interface

interface UserInterface {
    // type allias ID is equal to a string per line 5
    id?: ID;
    name: string;
    age?: number;
    getMessage?(): string;
}

const user: UserInterface = {
    name: 'Mark',
    age: 30,
    getMessage() {
        return 'Hello ' + name;
    }
}

const user2: UserInterface = {
    name: 'Jack',
}


// UNION OPERATORS //

let username: string = 'alex';

// variable can be a string or numb with a default value of 1
let pageNumber: string | number = '1';

let errorMessage: string | null = null;

interface User2Interface {
    name: string
    surname: string
}

let user3: User2Interface | null = null;

// DO NOT WRITE CODE LIKE THIS

let someProp: string | number | object | [] | boolean | null | undefined


// VOID DATATYPE //

// functions that do not return anything are given by default the void datatype. 
// vois is a set of undefined and null

const doSomething = (): void => {
    console.log("doSomething");
}

// ANY DATATYPE //

// given a variable the type of any is the same as taking off the typescript checks. DO NOT USE as could be the start of future problems
let foo: any = 'foo';

// NEVER DATATYPE //

// code can not have an endpoint. basically a function that never ends according to the video. Not sure why it's useful. Will do a deeper dive
const doSomethingAgain = (): never => {
    throw 'never';
}

// UNKNOWN DATATYPE //

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
// let s2: string = vUnknown; // cannot assign variable s2 the value of vUnknown because the type is unknown and s2's type is known (string). 

// TYPE ASSERTION //

// can convert the datatype of a variable with the 'as' keyword. this will make the vUnkown datatype change from unknown to string
let s2: string = vUnknown as string;

// when trying to assign a var with number datatype the value of a variable with a string datatype, first need to convert that string datatype to unknown and then convert to a number
let pageNum: string = '1';
let numPageNum: number = (pageNum as unknown) as number;


// TYPESCRIPT WORKING WITH DOM //
// each DOM element is automatically given an ambiguous datatype of element, so need to specify which element type you are looking to target

const someElement = document.querySelector('.foo') as HTMLInputElement;

console.log('someElement', someElement)

// adding an event listener - we need to define the datatype for event.target to access the value property

someElement.addEventListener('click', (event) => {
    const target = event.target as HTMLInputElement
    console.log('event', target.value)
})

// CLASSES //

class User {
    firstName: string
    lastName: string

    getFullName(): string {
        return this.firstName + ' ' + this.lastName
    }
}

class User2 {
    // every property is public by default. it means you have access to it in any instance; however, if you want to keep a property unaccessable you can mark it as private. So below you can call the getFullName function but not firstname and lastname

    // you can also use protect where you can only have access to the properties or functions through inheritance

    // lastly can use readonly which will not allow you to change the value of the property

    private firstName: string
    protected lastName: string
    readonly unchangableName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.unchangableName = firstName;
    }

    getFullName(): string {
        return this.firstName + ' ' + this.lastName
    }
}

const character = new User2('Monster', 'Lessons')

console.log(character)

interface AnimalInterface {
    makeNoise(): string;
}

// because interface has method makeNoise, we need to include the same method in the class definition or else we will get an error

class Animal implements AnimalInterface {
    noise: string;
    // static property is only on the class itself and not passed to new Animal objects created
    static readonly maxAge = 12

    constructor(noise: string) {
        this.noise = noise;
    }

    makeNoise(): string {
        return this.noise;
    }
}

const dog = new Animal('woof');

console.log('dog says:', dog)

// INHERITANCE in CLASSES //

class Admin extends User2 {
    private editor: string

    setEditor(editor: string): void {
        this.editor = editor
    }

    getEditor(): string {
        return this.editor
    }
}

const admin = new Admin('Mark', 'Besos');

console.log(admin);