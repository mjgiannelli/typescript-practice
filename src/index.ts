// using 'const' will not let you change the value of a variable
// using 'let' will let you change the value of the variable but only to the same type of the original variable

let hello = 'world';

// FUNCTIONS

// have to specify the type of the variable being passed
const getFullName = (name: string, surname: string): string => {
    return name + ' ' + surname;
}

console.log(getFullName('Mark', 'Giannelli'))