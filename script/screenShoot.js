function takeshot() {
    let div =
        document.getElementById('container');
    html2canvas(div).then(
        function (canvas) {
            document
                .getElementById('screenPhoto')
                .appendChild(canvas);
        })
}

function showPhoto(){
    screenPhoto.classList.remove("d-none")
}


const buttonScreenShoot = document.querySelector('#buttonScreenShoot')
const screenPhoto = document.querySelector('#screenPhoto')


buttonScreenShoot.addEventListener('click', takeshot);
buttonScreenShoot.addEventListener('click', showPhoto);