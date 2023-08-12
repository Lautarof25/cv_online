const buttonMode = document.querySelector("#buttonMode")
const body = document.querySelector("body")
const ballGray = document.querySelector(".ball-gray")

buttonMode.addEventListener("click", changeMode);

function changeMode(){
    body.classList.toggle("bg-dark")
    body.classList.toggle("text-white")
    ballGray.classList.toggle("bg-darkGray")
}