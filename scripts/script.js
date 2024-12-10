// Função para trocar a imagem do Pavon
let imagem = document.getElementById('imagen');
let botao = document.getElementById('botao');

function trocarImagem() {
    let src = imagem.getAttribute('src');
    if (src === 'imagens/neytriste.webp') {
        imagem.setAttribute('src', 'imagens/neyfeliz.jpg');
        botao.textContent = 'Faça ele triste'; // Atualiza o texto do botão
    } else {
        imagem.setAttribute('src', 'imagens/neytriste.webp');
        botao.textContent = 'Faça ele feliz'; // Atualiza o texto do botão
    }
}

// Função para aumentar a imagem ao passar o mouse
function aumentarImagem() {
    const imagemSuarez = document.getElementById('messi');
    imagemSuarez.classList.add('zoom');
}

// Função para retornar ao tamanho normal da imagem
function reduzirImagem() {
    const imagemSuarez = document.getElementById('messi');
    imagemSuarez.classList.remove('zoom');
}

// Função para remover a imagem do Internacional e mostrar o aviso
function removerImagemInter(event) {
    if (event.key === 'Delete') {
        const imagemInter = document.getElementById('figo');
        const aviso = document.getElementById('aviso');
        imagemInter.style.display = 'none'; // Remove a imagem do Internacional
        aviso.style.display = 'block'; // Exibe o aviso
        setTimeout(() => {
            aviso.style.display = 'none'; // Esconde o aviso após 3 segundos
        }, 3000);
    }
}

// Adiciona eventos de mouse para a imagem ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const imagemSuarez = document.getElementById('suarez');
    imagemSuarez.addEventListener('mouseover', aumentarImagem);
    imagemSuarez.addEventListener('mouseout', reduzirImagem);

    botao.addEventListener('click', trocarImagem); // Adiciona o evento de clique ao botão

    document.addEventListener('keydown', removerImagemInter); // Adiciona o evento de tecla ao documento
});
