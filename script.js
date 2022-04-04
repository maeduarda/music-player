let musicas = [
    {
        titulo: 'Born To Die',
        artista: 'Lana Del Rey',
        src: 'musicas/lana del dey - born to die.mp3',
        img: 'images/icon.jpg'
    },
    {
        titulo: 'Blue Jeans',
        artista: 'Lana Del Rey',
        src: 'musicas/lana del rey - blue jeans.mp3',
        img: '../images/icon.jpg'
    },
    {
        titulo: 'Dark Paradise',
        artista: 'Lana Del Rey',
        src: 'musicas/lana del rey - dark paradise.mp3',
        img: '../images/icon.jpg'
    },
    {
        titulo: 'Summertime Sadness',
        artista: 'Lana Del Rey',
        src: 'musicas/lana del rey - summertime sadness.mp3',
        img: 'images/icon.jpg'
    },
    {
        titulo: 'Serial Killer',
        artista: 'Lana Del Rey',
        src: 'musicas/lana del rey - serial killer.mp3',
        img: 'images/icon.jpg'
    }

]


let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 5;
    }
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 5){
        indexMusica = 0;
    }
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}