let num = +prompt("Введите число")
console.log('10% от '+ num +' = ${ num * 0.1 } ');

let firstNum = +prompt("Введите первое число")
let secondNum = +prompt("Введите второе число")

console.log('Первое число ' + firstNum)

console.log('Второе число ' + secondNum)

if (firstNum==secondNum) {
    console.log('Равны')
} else  if (firstNum<secondNum) {
    console.log(firstNum)
} else {
    console.log(secondNum)
}

let numA = +prompt("Введите число")


if (numA==100) {
    console.log('Число равно 100')
} else  if (numA<100) {
    console.log('Число меньше 100')
} else {
    console.log('Число больше 100')
}

const name = prompt("What is your name")
const age = +prompt("How old you")

if (age < 18) {
    console.log('Hi ${ name } ');
} else {
    console.log('Hello ${ name } ');
}
