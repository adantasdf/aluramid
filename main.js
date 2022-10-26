function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//enquanto
for (let contador = 0; contador  < listaDeTeclas.length; contador++)  {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom('#som_tecla_pom');
    }
    listaDeTeclas[contador].onclick = function() {
        tocaSom(idAudio)
    }

    console.log(contador);
}

