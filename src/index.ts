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


