const years = {
  "2023": [
   {
   "description": ["Técnico superior en desarrollo de software (1º Año)"],
   "institution": ["ITFS Nº29"]
   }
 ],
 "2022": [
   {
   "description": ["Testing QA Basico","Introducción a SQL","Programación desde cero","Python Core","Java II"],
   "institution": ["Eduting, Academia QA","Tecno 3F","Egg Educación","SoloLearn","Fundaula"]
   }
 ],
 "2021":[{
   "description": ["Curso Python básico","Introducción al desarrollo web II","Responsive Web Desing"],
   "institution": ["Universidad de Hurlingham","TGoogle Activate","FreeCodeCamp"]
   }
 ],
 "2020":[{
   "description": ["Tecnicatura Universitaria en Informática (1º año)"],
   "institution": ["Universidad de Hurlingham"]
   }
 ],
 "2019":[{
   "description": ["Programador de sistemas de intefaces gráficas"],
   "institution": ["CFP Hurlingham"]
   }
 ],
 "2018":[{
   "description": ["Supervisor y administrador de redes informáticas","Diseño web y Marketing digital","Auxiliar en Administración de Microempresas"],
   "institution": ["CFP Hurlingham","ITUOM Caseros","CTA Hurlingham"]
   }
 ],
  "2017":[{
   "description": ["Armado y reparación de PC"],
   "institution": ["IAC Devoto"]
   }
 ],
}

const container = document.querySelector("#container")


function tableCreate() {
// Tabla
const tableDiv = document.createElement("div");

  // Cabezera año
 const headerDiv = document.createElement("div");
    // Texto Cabezera año
      const textHeader = document.createTextNode("2017");
  // Cabezera descripción y institutción
 const titleDescriptionDiv = document.createElement("div");
        // Texto Cabezera año
      const textTitleDesc = document.createTextNode("Descripción");
 const titleInstitutionDiv = document.createElement("div");
        // Texto Cabezera año
      const textTitleInst = document.createTextNode("Institución");

 // Crear un bucle por cada elemento Object.values(years)[I][I].description
 // Fila descripción
 const rowDescriptionDiv = document.createElement("div");
    // Texto descripción
    const textDescription = document.createTextNode("Armado y reparación de PC");
  // Fila Institución
 const rowInstitutionDiv = document.createElement("div");
    // Texto descripción
    const textInstitution = document.createTextNode("IAC Devoto");


headerDiv.appendChild(textHeader)
titleDescriptionDiv.appendChild(textTitleDesc)
titleInstitutionDiv.appendChild(textTitleInst)
rowDescriptionDiv.appendChild(textDescription)
rowInstitutionDiv.appendChild(textInstitution)
tableDiv.appendChild(headerDiv)
tableDiv.appendChild(titleDescriptionDiv)
tableDiv.appendChild(titleInstitutionDiv)
tableDiv.appendChild(rowDescriptionDiv)

tableDiv.appendChild(rowInstitutionDiv)
tableDiv.setAttribute("class","d-flex")
headerDiv.setAttribute("class","col text-center year")
titleDescriptionDiv.setAttribute("class","col-50")
titleInstitutionDiv.setAttribute("class","col-50")
rowDescriptionDiv.setAttribute("class","col-50 bg-white")
rowInstitutionDiv.setAttribute("class","col-50 bg-white")
container.appendChild(tableDiv)
}

tableCreate()