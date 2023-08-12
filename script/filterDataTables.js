const tableDynamic = document.querySelector("#tableDynamic")
const tableDynamic2 = document.querySelector("#tableDynamic2")

function templateTable(numberTable, dataTable, tableDynamic) {
  const tableDiv = document.createElement("div");
  tableDiv.setAttribute("class", "d-flex border");

  const headerDiv = createDivWithText("col text-center year", Object.keys(dataTable)[numberTable]);
  const titleDescriptionDiv = createDivWithText("col-50 bg-grayGray bold", "Descripción");
  const titleInstitutionDiv = createDivWithText("col-50 bg-grayGray bold", "Institución");

  tableDiv.appendChild(headerDiv);
  tableDiv.appendChild(titleDescriptionDiv);
  tableDiv.appendChild(titleInstitutionDiv);

  const tableData = Object.values(dataTable)[numberTable][0];

  for (let i = 0; i < tableData.description.length; i++) {
    const rowDescriptionDiv = createDivWithText("col-50 border-bottom p-1", tableData.description[i]);
    const rowInstitutionDiv = createDivWithText("col-50 border-bottom border-start p-1", tableData.institution[i]);

    tableDiv.appendChild(rowDescriptionDiv);
    tableDiv.appendChild(rowInstitutionDiv);
  }

  tableDynamic.appendChild(tableDiv);
}

function createDivWithText(className, text) {
  const div = document.createElement("div");
  div.setAttribute("class", className);
  const textNode = document.createTextNode(text);
  div.appendChild(textNode);
  return div;
}

const checkboxes = document.querySelectorAll("[name='yearRow']")
const checkboxes2 = document.querySelectorAll("[name='yearRow2']")

let arrayTables = ["2023", "2022", "2021"]

// Filtro

checkboxes.forEach(table =>
  table.addEventListener("click", function () {
    updateArrayTables(table)
    createTables(tableDynamic)
  })
)
checkboxes2.forEach(table =>
  table.addEventListener("click", function () {
    updateArrayTables(table)
    createTables(tableDynamic2)
  })
)

function updateArrayTables(table) {
  if (table.checked && !arrayTables.includes(table.value)) {
    arrayTables.push(table.value)
  } else if (arrayTables.includes(table.value)) {
    arrayTables.splice(arrayTables.indexOf(table.value), 1)
  }
  arrayTables.sort().reverse()
}

function createTables(tableDynamic) {
  while (tableDynamic.firstChild) {
    tableDynamic.removeChild(tableDynamic.firstChild);
  }

  const selectedTableData = (select.value === "spanish") ? dataTable : dataTableEnglish;
  const templateFunction = (index) => templateTable(index, selectedTableData, tableDynamic);

  for (let i = 0; i < arrayTables.length; i++) {
    const tableName = arrayTables[i];

    if (Object.keys(dataTable).includes(tableName)) {
      const tableIndex = Object.keys(dataTable).indexOf(tableName);
      templateFunction(tableIndex);
    } else if (tableName === "0previous") {
      for (let j = 3; j >= 0; j--) {
        templateFunction(j);
      }
    }
  }
}

createTables(tableDynamic)