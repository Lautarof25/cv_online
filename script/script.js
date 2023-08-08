const select = document.querySelector("#select")
const spanish = document.querySelector("#spanish")
const english = document.querySelector("#english")

select.addEventListener("change", changeIdiom)

function changeIdiom(){
    if(select.value == "english"){
        spanish.classList.add("d-none")
        english.classList.remove("d-none")
    }else{
        spanish.classList.remove("d-none")
        english.classList.add("d-none")
    }
}