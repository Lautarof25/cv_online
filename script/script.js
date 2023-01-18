let text = document.getElementById('myText').innerHTML;
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    window.alert('Número de telefono copiado!');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}