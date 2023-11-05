const item = document.querySelector(".item")

const red = document.querySelector(".red")

item.addEventListener("click",function () {
    red.classList.add("green")
})

const item1 = document.querySelector(".item1")
const pink = document.querySelector(".pink")
item1.addEventListener("click", function () {
    pink.style.backgroundColor = "blue"
    console.log(pink.style.backgroundColor)
    
})


const item2 = document.querySelector(".item2")
const grey = document.querySelector(".grey")
item2.addEventListener("click", function () {
    grey.classList.add("greynew")
    
})

// const item3 = document.querySelector(".item3")
// const root = document.querySelector(".root")
// item3.addEventListener("click", function () {
//     root.insertAdjacentHTML("afterbegin",`<p style="background-color: blue;">Hello!</p>`)
    
// })

const item3 = document.querySelector(".item3")
const root = document.querySelector(".root")
item3.addEventListener("click", function () {
    root.insertAdjacentHTML("afterbegin",`<p style="background-color: blue;">Hello!</p>`)
    root.insertAdjacentHTML("beforeend",`<p style="background-color: green;">Hello!</p>`)
    
})



