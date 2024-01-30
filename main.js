const botaoPlayPause = document.querySelector("button#play-pause");
const audioCapitulo = document.querySelector("audio#audio-capitulo");
const botaoProximaFaixa = document.querySelector("button#proximo");
const botaoVoltarFaixa = document.querySelector("button#anterior");
const tituloCapitulo = document.querySelector("h1#capitulo");

const faixas = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
};

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    botaoPlayPause.classList.add("bi-play-circle-fill");
}

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeCapitulo() {
    tituloCapitulo.innerHTML = `Capítulo ${capituloAtual}`
}

function proximaFaixa() {
    if (capituloAtual === faixas) {
        capituloAtual = 1;
    } else {
        capituloAtual++;
    }

    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
    tocarFaixa();
    taTocando = 1;
    trocarNomeCapitulo();
}

function voltarFaixa() {
    if (capituloAtual === 1) {
        capituloAtual = faixas;
    } else {
        capituloAtual--;
    }

    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
    tocarFaixa();
    taTocando = 1;
    trocarNomeCapitulo();
}

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoProximaFaixa.addEventListener("click", proximaFaixa);
botaoVoltarFaixa.addEventListener("click", voltarFaixa);