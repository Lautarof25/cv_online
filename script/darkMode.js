const buttonMode = document.querySelector("#buttonMode")
const body = document.querySelector("body")
const ballGray = document.querySelector(".ball-gray")

buttonMode.addEventListener("click", changeColor);

function changeColor(){
    body.classList.toggle("bg-dark")
    body.classList.toggle("text-white")
    ballGray.classList.toggle("bg-darkGray")

    for (let i = 0; i < tableDynamic.childElementCount; i++) {
        tableDynamic.childNodes[i].classList.toggle("bg-white")
        tableDynamic.childNodes[i].childNodes[1].classList.toggle("bg-darkGray")
        tableDynamic.childNodes[i].childNodes[2].classList.toggle("bg-darkGray")
    }
}