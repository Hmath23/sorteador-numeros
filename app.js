function obterNumeroAleatorio(final,inicio){
  return Math.floor(Math.random() * (final - inicio + 1)) + inicio;
}

function exibirTextoNaTela(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function alterarStatusBotao(id){
    let botao = document.getElementById(id);
        if(botao.classList.contains('container__botao-desabilitado')){
            botao.classList.remove('container__botao-desabilitado');
            botao.classList.add('container__botao');
        } else {
            botao.classList.add('container__botao-desabilitado');
            botao.classList.remove('container__botao');
        }
}

function sortear(){
    //Recuperando os elementos colocados na pagina e populando variáveis;
    quantidade = parseInt(document.getElementById('quantidade'));
    inicio = parseInt(document.getElementById('de'));
    final = parseInt(document.getElementById('ate'));
    let sorteados=[]; 
    for (let i= 0; i < quantidade; i++){
        let resultado = obterNumeroAleatorio(final,inicio);
        if(sorteados.includes(resultado)){
            return obterNumeroAleatorio(final, inicio);
        } else {
            sorteados.push(resultado);
        }
    }
    let texto = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    exibirTextoNaTela('resultado', texto);
    alterarStatusBotao('btn-reiniciar');
    alterarStatusBotao('btn-sortear');
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    alterarStatusBotao('btn-reiniciar');
    alterarStatusBotao('btn-sortear');
};