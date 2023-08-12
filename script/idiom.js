const select = document.querySelector("#select")
const spanish = document.querySelector("#spanish")
const english = document.querySelector("#english")

select.addEventListener("change", resetArrayTables)
select.addEventListener("change", changeIdiom)

function changeIdiom() {
    const isEnglishSelected = select.value === "english";

    if (isEnglishSelected) {
        spanish.classList.add("d-none");
        english.classList.remove("d-none");
        createTables(tableDynamic);
    } else {
        spanish.classList.remove("d-none");
        english.classList.add("d-none");
        createTables(tableDynamic2);
    }
}

function resetArrayTables() {
    arrayTables = []
    checkboxes2.forEach(check => check.checked = false)
    checkboxes.forEach(check => check.checked = false)
    updateArrayTables(arrayTables)
}