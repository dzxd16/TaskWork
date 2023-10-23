for (let index = 0; index < 10; index = index+2) {
    console.log(index)
}

for (let index = 55; index >= 20; index--) {
    console.log(index)
}

const numbers = [3, 5, 11, 2, 8, 1, 6];
const numbers_squared = []

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
    numbers_squared.push(numbers[index]**2)
    // console.log(numbers_squared[index]);
}

// const last_elem = numbers_squared[6]
const last_elem = numbers_squared.at(-1)
console.log(last_elem)

const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
    }

console.log(`User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old’`)






