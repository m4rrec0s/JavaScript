// Carregar a biblioteca de músicas
fetch('music_library.json')
  .then(response => response.json())
  .then(data => {
    // Armazenar as músicas em uma variável global para acesso posterior
    window.musicLibrary = data.songs;
    // Inicializar a reprodução da primeira música
    playSong(0);
  });

// Função para reproduzir uma música específica pelo índice
function playSong(index) {
    var song = window.musicLibrary[index];
    //player-now
        //player-bar
    document.getElementById('player-now-title').textContent = song.title;
    document.getElementById('player-now-artist').textContent = song.artist;
    document.getElementById('player-now-image').src = song.cover_image;
    document.getElementById('player-now-lyrics').textContent = song.lyrics;
    document.getElementById('player-now-about-artist-name').textContent = song.about_artist.name;
    document.getElementById('player-now-about-artist').textContent = song.about_artist.description;
    document.getElementById('player-now-monthly-listeners').textContent = song.about_artist.monthly_listeners;
    document.getElementById('player-now-next-song-name').textContent = song.next_song.title;
    document.getElementById('player-now-next-song-artist').textContent = song.next_song.artist;
    document.getElementById('player-now-next-song-image').src = song.next_song.image;

    // Atualizar a cor de fundo e a cor do texto do player
    document.documentElement.style.setProperty('--playerNow', song.background);
    document.querySelector('.picture').style.backgroundImage = `url(${song.picture})`;
}

// Carregar a biblioteca de músicas
fetch('music_library.json')
  .then(response => response.json())
  .then(data => {
    // Armazenar as músicas em uma variável global para acesso posterior
    window.musicLibrary = data.songs;
    // Inicializar a reprodução da primeira música
    playSong(0);
  });

// Função para avançar para a próxima música
function nextSong() {
  // Obtém o índice da música atualmente tocando
  var currentIndex = window.musicLibrary.findIndex(song => song.title === document.getElementById('player-now-title').textContent);
  // Calcula o próximo índice
  var nextIndex = (currentIndex + 1) % window.musicLibrary.length;
  // Reproduz a próxima música
  playSong(nextIndex);
}

// Função para voltar para a música anterior
function previousSong() {
  // Obtém o índice da música atualmente tocando
  var currentIndex = window.musicLibrary.findIndex(song => song.title === document.getElementById('player-now-title').textContent);
  // Calcula o índice da música anterior
  var previousIndex = (currentIndex - 1 + window.musicLibrary.length) % window.musicLibrary.length;
  // Reproduz a música anterior
  playSong(previousIndex);
}


function showPopup(message, icon, right = "0%", left = "0%", top = "0%", bottom = "0%") {
    var popup = document.getElementById("popup");
    popup.innerText = message;
    var rect = icon.getBoundingClientRect();

    var iconWidth = rect.width;
    var iconHeight = rect.height;
    var popupWidth = popup.offsetWidth;
    var popupHeight = popup.offsetHeight;

    var topPosition = rect.top + window.scrollY + (iconHeight / 2) - (popupHeight / 2);
    var leftPosition = rect.left + window.scrollX + (iconWidth / 2) - (popupWidth / 2);

    if (right !== "0%") {
        leftPosition = rect.left + window.scrollX + iconWidth + (iconWidth * parseFloat(right) / 100) - popupWidth;
    } else if (left !== "0%") {
        leftPosition = rect.left + window.scrollX - (iconWidth * parseFloat(left) / 100);
    } else if (top !== "0%") {
        topPosition = rect.top + window.scrollY - (iconHeight * parseFloat(top) / 100) - popupHeight;
    } else if (bottom !== "0%") {
        topPosition = rect.top + window.scrollY + iconHeight + (iconHeight * parseFloat(bottom) / 100);
    }

    popup.style.top = topPosition + "px";
    popup.style.left = leftPosition + "px";
    popup.style.display = "block";
}

function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function changeHeaderColor(color) {
    var header = document.getElementById("pageHeader");
    header.classList.remove("header-red", "header-green", "header-blue"); // Remove todas as classes de cor anteriores
    header.classList.add(`header-${color}`); // Adiciona a classe de cor correspondente
}

function resetHeaderColor() {
    var header = document.getElementById("pageHeader");
    header.classList.remove("header-red", "header-green", "header-blue"); // Remove todas as classes de cor anteriores
}

var button1 = document.getElementById('plus')
var button2 = document.getElementById('check')

function addInPlaylist() {
    button1.style.display = "none"
    button2.style.display = "block"
}

function removePlaylist() {
    button1.style.display = "block"
    button2.style.display = "none"
}

var progressBar = document.querySelector('.progress-inner');
var timeOfMusicStart = document.querySelector('#start')
var timeOfMusicEnd = document.querySelector('#end')

timeOfMusicStart.innerHTML = '0:00';
timeOfMusicEnd.innerHTML = '3:00'


progressBar.style.width = '1%';
