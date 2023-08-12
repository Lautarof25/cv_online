const img = document.getElementById('preview');
const input = document.getElementById('picker');
input.onchange = function(ev) {
  const file = ev.target.files[0]; // get the file
  const blobURL = URL.createObjectURL(file);
  img.src = blobURL;
}