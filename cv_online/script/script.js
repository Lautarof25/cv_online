// Traigo el body 
let container = document.querySelector("#container");

// Traigo datos del scrip de español
let spanish = dataSpanish;
// Traigo datos del scrip de inglés
let english = dataEnglish;

// Imprimos por primera vez 
container.innerHTML += spanish;

// Traigo el botón select
var select = document.getElementById("select");
// Creo una variable para guardar 
// la opción elegida en el select
let selected;

select.addEventListener("change",(e) =>{
  if (e.target.value == "spanish"){
    container.innerHTML = ""
    container.innerHTML += spanish
    e.target.selected = "spanish"
  }else if (e.target.value == "english") {
    container.innerHTML = ""
    container.innerHTML += english
    e.target.selected = "english"
  }
})

// Copiar numero de teléfono
let text = document.getElementById('myText').innerHTML;
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    window.alert('Número de telefono copiado!');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}