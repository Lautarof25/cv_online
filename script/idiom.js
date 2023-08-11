const select = document.querySelector("#select")
const spanish = document.querySelector("#spanish")
const english = document.querySelector("#english")

select.addEventListener("change", changeIdiom)

function changeIdiom(){
    arrayTables = []
    checkboxes2.forEach(check =>
        check.checked = false
    )
    checkboxes.forEach(check =>
        check.checked = false
    )
    updateArrayTables(arrayTables)
    if(select.value == "english"){
        spanish.classList.add("d-none")
        english.classList.remove("d-none")
        createTables(tableDynamic)
    }else{
        spanish.classList.remove("d-none")
        english.classList.add("d-none")
        createTables(tableDynamic2)
    }
}