let container = document.querySelector("#container");
let spanish = dataSpanish;
let english = dataEnglish;
let select = document.getElementById("select");
let selected;

container.innerHTML += spanish;

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

let text = document.getElementById('myText').innerHTML;
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    window.alert('Número de telefono copiado!');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}