function exibirResultado(mensagem) {
    const areaResultado = document.querySelector(".resultado-partida");
    if (mensagem) {
        areaResultado.innerHTML = mensagem;
    } else {
        areaResultado.innerHTML = "";
    }
}

function desenharSimbolo(simbolo, posicaoLinha, posicaoColuna) {
    const quadradoJogo = document.querySelector(`[data-linha='${posicaoLinha}'][data-coluna='${posicaoColuna}']`);
    quadradoJogo.innerHTML = simbolo;
}

function marcarJogadorAtivo(simbolo) {
    const jogadorAtivo = document.querySelector(".jogador-ativo > span");
    jogadorAtivo.innerHTML = simbolo;
}
