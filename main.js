
document.getElementById('masInfo').addEventListener('click', function () {
    console.log("accione boton")
    let x = document.getElementById('nuevaInfo');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
})

const colorOscuro = document.querySelector("#cambiar-color");
colorOscuro.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});