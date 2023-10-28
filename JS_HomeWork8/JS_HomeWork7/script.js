// const funMin = function() {
//     const number1 = prompt("Enter first number")
//     const number2 = prompt("Enter second number")
//     console.log(Math.min(number1,number2))
// }

// funMin()

// const funSortNum = function(num1,num2) {
//     // const array = []   
//     // array.push(prompt("Enter first number"))
//     // array.push(prompt("Enter second number"))
//     // array.sort()
//     const max = Math.max(num1,num2)
//     const min = Math.min(num1,num2)
//     for (let index = max; index >= min; index--) {
//         if (index%2 == 0) {
//             console.log(index)      
//         }
//     }
//   }

// funSortNum(5,12)

// const funPow = function() {
//     const number1 = prompt("Enter number")
//     const number2 = prompt("Enter degree",2)
//     console.log(Math.pow(number1,number2))
// }

// funPow()

// const funSumm = function() {
//     const number1 = prompt("Enter number")
//     let summ = 0
//     for (let index = 0; index <= number1; index++) {
//         summ += index
//     }
//     console.log(summ)
// }

// funSumm()

// const funOddEven = function() {
//     const number1 = prompt("Enter first number")
//     const number2 = prompt("Enter second number")
//     let summOdd = 0  // нечетные
//     let summEven = 0 // четные
//     for (let index = number1; index <= number2; index++){
//         if (index%2 == 0) {
//             summEven=summEven + index    
//         } else {
//             summOdd=summOdd + index   
//         }
//     }
//     console.log(`Четные ${summEven}`)
//     console.log(`Нечетные ${summOdd}`)
// }

// funOddEven()


// const funSort = function(array) {
//     if (array.length == 0) {
//         return null
//     }  

//      let rez = array[0].length
//     for (let index = 0; index < array.length; index++) {
//         if (rez < array[index].length) {
//             rez = array[index].length      
//         }
//     }
//     return rez
// }


console.log(funSort([ 'one', 'two', 'three' ]))
// console.log(funSort([  ]))


