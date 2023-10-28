const div = document.querySelector(".numbers")
for (let index = 100; index >= 50; index-=10) {
    div.insertAdjacentHTML("afterbegin",`<p>${index}</p>`)
  
}

const div1 = document.querySelector(".strings_container")
const array = ["asdf","asdf","zxcv","asdfasd"]
for (let index = 0; index < array.length; index++) {
    div1.insertAdjacentHTML("afterbegin",`<p>${array[index]}</p>`)
  
}

const div2 = document.querySelector(".users_container")
const arrayObj = [
    {
        first_name:"Petro",
        last_name:"Petrenko",
        age:45
    },
    {
        first_name:"Alex",
        last_name:"Salenko",
        age:15
    },
    {
        first_name:"Jon",
        last_name:"Smitt",
        age:20
    },
    {
        first_name:"Den",
        last_name:"Broun",
        age:60
    },

]

for (let index = 0; index < arrayObj.length; index++) {
    const {first_name, last_name, age} = arrayObj[index]
    
    if (age >= 18) {
    div2.insertAdjacentHTML("afterbegin",`
        <p class = "p"> 
            <h5>${first_name}</h5>
            <h5>${last_name}</h5>
            <h5>${age}</h5>
        </p>`)
    }
}





