const years = {
  "2023": [
    {
      "description": ["Técnico superior en desarrollo de software (1º Año)"],
      "institution": ["ITFS Nº29"]
    }
  ],
  "2022": [
    {
      "description": ["Testing QA Basico", "Introducción a SQL", "Programación desde cero", "Python Core", "Java II"],
      "institution": ["Eduting, Academia QA", "Tecno 3F", "Egg Educación", "SoloLearn", "Fundaula"]
    }
  ],
  "2021": [{
    "description": ["Curso Python básico", "Introducción al desarrollo web II", "Responsive Web Desing"],
    "institution": ["Universidad de Hurlingham", "Google Activate", "FreeCodeCamp"]
  }
  ],
  "2020": [{
    "description": ["Tecnicatura Universitaria en Informática (1º año)"],
    "institution": ["Universidad de Hurlingham"]
  }
  ],
  "2019": [{
    "description": ["Programador de sistemas de intefaces gráficas"],
    "institution": ["CFP Hurlingham"]
  }
  ],
  "2018": [{
    "description": ["Supervisor y administrador de redes informáticas", "Diseño web y Marketing digital", "Auxiliar en Administración de Microempresas"],
    "institution": ["CFP Hurlingham", "ITUOM Caseros", "CTA Hurlingham"]
  }
  ],
  "2017": [{
    "description": ["Armado y reparación de PC"],
    "institution": ["IAC Devoto"]
  }
  ],
}

const tableDynamic = document.querySelector("#tableDynamic")

function tableCreate(numberTable) {

  // Tabla
  const tableDiv = document.createElement("div");
  // Cabecera año
  const headerDiv = document.createElement("div");
  // Texto Cabecera año
  let numberYear = Object.keys(years)[numberTable]
  const textHeader = document.createTextNode(numberYear);
  // Cabecera descripción y institutción
  const titleDescriptionDiv = document.createElement("div");
  // Texto Cabecera año
  const textTitleDesc = document.createTextNode("Descripción");
  const titleInstitutionDiv = document.createElement("div");
  // Texto Cabecera año
  const textTitleInst = document.createTextNode("Institución");

  headerDiv.appendChild(textHeader)
  titleDescriptionDiv.appendChild(textTitleDesc)
  titleInstitutionDiv.appendChild(textTitleInst)

  tableDiv.appendChild(headerDiv)
  tableDiv.appendChild(titleDescriptionDiv)
  tableDiv.appendChild(titleInstitutionDiv)
  // Crear un bucle por cada elemento Object.values(years)[I][I].description
  for (let i = 0; i < Object.values(years)[numberTable][0].description.length; i++) {
    let descr = Object.values(years)[numberTable][0].description[i]
    let inst = Object.values(years)[numberTable][0].institution[i]
    // Fila descripción
    var rowDescriptionDiv = document.createElement("div");
    // Fila Institución
    var rowInstitutionDiv = document.createElement("div");
    // Texto descripción
    var textDescription = document.createTextNode(descr);
    // Texto institution
    var textInstitution = document.createTextNode(inst);

    rowDescriptionDiv.appendChild(textDescription)
    rowInstitutionDiv.appendChild(textInstitution)

    tableDiv.appendChild(rowDescriptionDiv)
    tableDiv.appendChild(rowInstitutionDiv)
    rowDescriptionDiv.setAttribute("class", "col-50 bg-white border-bottom p-1")
    rowInstitutionDiv.setAttribute("class", "col-50 bg-white border-bottom border-start p-1")
  }

  tableDiv.setAttribute("class", "d-flex border")
  headerDiv.setAttribute("class", "col text-center year")
  titleDescriptionDiv.setAttribute("class", "col-50 bg-gray bold")
  titleInstitutionDiv.setAttribute("class", "col-50 bg-gray bold")

  tableDynamic.appendChild(tableDiv)
}

const checkboxes = document.querySelectorAll("[name='yearRow']")

let arrayTables = ["2023"]

checkboxes.forEach(table =>
  table.addEventListener("click", function () {
    addValueToArrayTables(table)
  })
)

createTables()

function addValueToArrayTables(table) {
  if (table.checked && !arrayTables.includes(table.value)) {
    arrayTables.push(table.value)
  } else if (arrayTables.includes(table.value)) {
    arrayTables.splice(arrayTables.indexOf(table.value), 1)
  }
  createTables()
}

function createTables(){
  while (tableDynamic.firstChild) {
    tableDynamic.removeChild(tableDynamic.firstChild);
  }
  for (let i = 0; i < arrayTables.length; i++) {
    if(Object.keys(years).includes(arrayTables[i])){
      tableCreate(Object.keys(years).indexOf(arrayTables[i]))
    }
  }
}