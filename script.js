// Data do início do namoro
const dataNamoro = new Date('2024-08-16T00:00:00');

// Atualiza a contagem de tempo
function atualizarContagem() {
    const agora = new Date();
    const diferenca = agora - dataNamoro;

    // Converte a diferença em unidades de tempo
    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Atualiza os elementos HTML
    document.getElementById('anos').textContent = anos;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

// Atualiza a contagem a cada segundo
setInterval(atualizarContagem, 1000);

// Chama a função ao carregar a página
atualizarContagem();

// Lista de URLs das imagens de fundo
const imagens = [
    'img/img2.jpeg',
    'img/img1.jpeg',
    'img/img3.jpg',
    'img/img4.jpg'
];

let indiceAtual = 0;

// Muda a imagem do fundo
function mudarImagem() {
    const imgElement = document.getElementById('imagem');

    // Atualiza o src da imagem para a próxima imagem da lista
    imgElement.style.opacity = 0; // Efeito de transição
    setTimeout(() => {
        imgElement.src = imagens[indiceAtual];
        imgElement.style.opacity = 1; // Retorna a opacidade após a troca
    }); // Tempo sincronizado com a transição CSS

    // Avança para a próxima imagem, voltando ao início se chegar ao final
    indiceAtual = (indiceAtual + 1) % imagens.length;
}

// Muda a imagem a cada 3 segundos
setInterval(mudarImagem, 3000);

// Inicia com a primeira imagem ao carregar a página
mudarImagem();
