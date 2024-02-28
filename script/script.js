var textInput = document.querySelector('.primeira__sessao__texto');
var imagem = document.querySelector('.segunda__sessao__imagem');
var outInput = document.querySelector('.segunda__sessao__texto');



function ajustarAlturaContainer() {
    var container = document.querySelector('.segunda__sessao__texto');
    var mensagemGerada = document.querySelector('.mensagem-gerada');
    var alturaConteudo = mensagemGerada.offsetHeight;
    container.style.height = alturaConteudo + 'px';
}

function mostrarBotaoCopiar() {
    var botaoCopiar = document.querySelector('.btn-copiar');
    if (!botaoCopiar) {
        var novoBotao = document.createElement('button');
        novoBotao.classList.add('btn-copiar');
        novoBotao.textContent = 'Copiar';
        novoBotao.onclick = copiar;
        outInput.appendChild(novoBotao);
    }
}

function criptografar() {
    var texto = textInput.value;
    imagem.style.display = 'none';
    var resultadoCriptografia = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    outInput.innerHTML = '<h3>Resultado da Criptografia</h3>' + '<p class="mensagem-gerada">' + resultadoCriptografia + '</p>';
    outInput.querySelector('.mensagem-gerada').style.wordWrap = 'break-word';
    mostrarBotaoCopiar();
}

function descriptografar() {
    var texto = textInput.value;
    imagem.style.display = 'none';
    var resultadoDescriptografia = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    outInput.innerHTML = '<h3>Resultado da Descriptografia</h3>' + '<p class="mensagem-gerada">' + resultadoDescriptografia + '</p>';
    outInput.querySelector('.mensagem-gerada').style.wordWrap = 'break-word';
    mostrarBotaoCopiar();
}

function copiar() {
    var areaDoTexto = document.querySelector('.segunda__sessao__texto .mensagem-gerada');
    navigator.clipboard.writeText(areaDoTexto.textContent);
}

function mostrarMensagemNoTopo(mensagem) {
    var textoContainer = document.querySelector('.segunda__sessao__texto');
    var imagemContainer = document.querySelector('.segunda__sessao__imagem');

    
    if (mensagem === '') {
        textoContainer.innerHTML = ''; 
        textoContainer.style.display = 'none'; 
        imagemContainer.style.display = 'block'; 
    } else {
        textoContainer.innerHTML = ''; 
        var mensagemGerada = document.createElement('p');
        mensagemGerada.textContent = mensagem;
        textoContainer.appendChild(mensagemGerada);
        textoContainer.style.display = 'block'; 
        imagemContainer.style.display = 'none'; 
    }
}




