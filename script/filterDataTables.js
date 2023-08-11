const dataTable = {
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

function templateTable(numberTable) {

  // Tabla
  const tableDiv = document.createElement("div");
  // Cabecera año
  const headerDiv = document.createElement("div");
  // Texto Cabecera año
  let numberYear = Object.keys(dataTable)[numberTable]
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
  for (let i = 0; i < Object.values(dataTable)[numberTable][0].description.length; i++) {
    let descr = Object.values(dataTable)[numberTable][0].description[i]
    let inst = Object.values(dataTable)[numberTable][0].institution[i]
    var rowDescriptionDiv = document.createElement("div");
    var rowInstitutionDiv = document.createElement("div");
    var textDescription = document.createTextNode(descr);
    var textInstitution = document.createTextNode(inst);

    rowDescriptionDiv.appendChild(textDescription)
    rowInstitutionDiv.appendChild(textInstitution)

    tableDiv.appendChild(rowDescriptionDiv)
    tableDiv.appendChild(rowInstitutionDiv)
    rowDescriptionDiv.setAttribute("class", "col-50 border-bottom p-1")
    rowInstitutionDiv.setAttribute("class", "col-50 border-bottom border-start p-1")
  }

  tableDiv.setAttribute("class", "d-flex border bg-white")
  headerDiv.setAttribute("class", "col text-center year")
  titleDescriptionDiv.setAttribute("class", "col-50 bg-gray bold")
  titleInstitutionDiv.setAttribute("class", "col-50 bg-gray bold")

  tableDynamic.appendChild(tableDiv)
}

const checkboxes = document.querySelectorAll("[name='yearRow']")

let arrayTables = ["2023", "2022", "2021"]

// Filtro

checkboxes.forEach(table =>
  table.addEventListener("click", function () {
    updateArrayTables(table)
    createTables()
  })
)

createTables()

function updateArrayTables(table) {
  if (table.checked && !arrayTables.includes(table.value)) {
    arrayTables.push(table.value)
  } else if (arrayTables.includes(table.value)) {
    arrayTables.splice(arrayTables.indexOf(table.value), 1)
  }
  arrayTables.sort().reverse()
}

function createTables() {
  while (tableDynamic.firstChild) {
    tableDynamic.removeChild(tableDynamic.firstChild);
  }
  for (let i = 0; i < arrayTables.length; i++) {
    if (Object.keys(dataTable).includes(arrayTables[i])) {
      templateTable(Object.keys(dataTable).indexOf(arrayTables[i]))
    }else if (arrayTables.includes("0previous")){
      templateTable(3)
      templateTable(2)
      templateTable(1)
      templateTable(0)
    }
  }
}