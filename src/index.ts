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

