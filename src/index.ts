// using 'const' will not let you change the value of a variable
// using 'let' will let you change the value of the variable but only to the same type of the original variable

let hello = 'world';

// FUNCTIONS

// have to specify the type of the variable being passed
const getFullName = (name: string, surname: string): string => {
    return name + ' ' + surname;
}

console.log(getFullName('Mark', 'Giannelli'))

// OBJECTS
  // interfaces - create objects with specific properties
    // put '?' after key to specify that the property is not mandatory
    // need to separate name of interfaces and classes from each other
        // done by adding 'Interface' after the name of the interface

    interface UserInterface {
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
