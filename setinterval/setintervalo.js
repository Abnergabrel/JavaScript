let contador = 0

function inciarContador(){
    intervalo = setInterval(function () {
        contador++
        console.log("Contador :" + contador)
    }, 1000)
}
function paraContador() {
    clearInterval(intervalo)
}

iniciarContador()

