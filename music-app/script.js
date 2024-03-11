function updatePlayerNow(song) {
  var playerNowTitles = document.getElementsByClassName('player-now-title');
  var playerNowArtists = document.getElementsByClassName('player-now-artist');
  var playerNowImages = document.getElementsByClassName('player-now-image');

  for (var i = 0; i < playerNowTitles.length; i++) {
      playerNowTitles[i].textContent = song.title;
  }

  for (var i = 0; i < playerNowArtists.length; i++) {
      playerNowArtists[i].textContent = song.artist;
  }

  for (var i = 0; i < playerNowImages.length; i++) {
      playerNowImages[i].src = song.cover_image;
  }

  var playerNowDivs = document.getElementsByClassName('player-now');
  for (var i = 0; i < playerNowDivs.length; i++) {
    playerNowDivs[i].style.setProperty('--playerNow', song.background_color);
  }

  var pictureDivs = document.getElementsByClassName('picture');
  for (var i = 0; i < pictureDivs.length; i++) {
    pictureDivs[i].style.backgroundImage = `url(${song.picture})`;
  }

  document.getElementById('player-now-lyrics').textContent = song.lyrics;
  document.getElementById('player-now-about-artist-name').textContent = song.about_artist.name;
  document.getElementById('player-now-monthly-listeners').textContent = song.about_artist.monthly_listeners;
  document.getElementById('player-now-about-artist-description').textContent = song.about_artist.description;
}

function updateNextSong() {
  var currentTitle = document.querySelector('.player-now-title').textContent;
  var currentIndex = window.musicLibrary.findIndex(song => song.title === currentTitle);
  var nextIndex = (currentIndex + 1) % window.musicLibrary.length;
  var nextSong = window.musicLibrary[nextIndex];

  var nextSongTitle = document.querySelector('#title-next-song');
  var nextSongArtist = document.querySelector('#artist-next-song');
  var nextSongImage = document.querySelector('#img-next-song');

  nextSongTitle.textContent = nextSong.title;
  nextSongArtist.textContent = nextSong.artist;
  nextSongImage.src = nextSong.cover_image;
}


function playSong(index) {
  var song = window.musicLibrary[index];
  var audioElement = document.getElementById('player');
 
  updatePlayerNow(song);
  updateNextSong();

  audioElement.src = song.file;
  audioElement.play()

  var nextButton = document.getElementById('nextButton');
  nextButton.dataset.nextIndex = (index + 1) % window.musicLibrary.length;

}

var pauseButton = document.getElementById('pause');

pauseButton.addEventListener('click', function() {
    var audioElement = document.getElementById('player');
    if (audioElement.paused) {
        audioElement.play();
        pauseButton.classList.remove('fa-play')
        pauseButton.classList.add('fa-circle-pause');
    } else {
        audioElement.pause();
        pauseButton.classList.remove('fa-circle-pause');
        pauseButton.classList.add('fa-play');
    }
});


fetch('music_library.json')
  .then(response => response.json())
  .then(data => {
    window.musicLibrary = data.songs;
    playSong(0);
  });

function nextSong() {
  var currentTitle = document.querySelector('.player-now-title').textContent;
  var currentIndex = window.musicLibrary.findIndex(song => song.title === currentTitle);
  var nextIndex = (currentIndex + 1) % window.musicLibrary.length;
  playSong(nextIndex);
}


function previousSong() {
  var currentTitle = document.querySelector('.player-now-title').textContent;
  var currentIndex = window.musicLibrary.findIndex(song => song.title === currentTitle);
  var previousIndex = (currentIndex - 1 + window.musicLibrary.length) % window.musicLibrary.length;
  playSong(previousIndex);
}

var playerNowContent = document.querySelector('.player-now');
var angleUp = document.querySelector('.fa-angle-up');
var angleDown = document.querySelector('.fa-angle-down');
var test = true
var playerNowButton = document.querySelector('#showPlayerNow');

function removePlayerNow() {
  test = false
  playerNowContent.style.display = 'none';

  if (test = true) {
    angleUp.style.display = 'block';
    angleDown.style.display = 'none';
  } else {
    angleDown.style.display = 'block';
    angleUp.style.display = 'none';
  }
}

function showPlayerNow() {
  test = true
  playerNowContent.style.display = 'block';

  if (test = false) {
    angleUp.style.display = 'block';
    angleDown.style.display = 'none';
  } else {
    angleDown.style.display = 'block';
    angleUp.style.display = 'none';
  }
}

document.querySelector(".fa-xmark").addEventListener('click', removePlayerNow)
angleDown.addEventListener('click', removePlayerNow);
angleUp.addEventListener('click', showPlayerNow);

function togglePlayerNow() {
  if (playerNowContent.style.display === 'none') {
    playerNowContent.style.display = 'block';
    playerNowButton.style.color = 'var(--highlights)'
    playerNowButton.style.border = '1px solid var(--highlights)'
  } else {
    playerNowContent.style.display = 'none';
    playerNowButton.style.color = 'var(--font)'
    playerNowButton.style.border = '1px solid var(--font)'
  }
}

playerNowButton.addEventListener('click', togglePlayerNow);


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
    header.classList.remove("header-red", "header-green", "header-blue");
    header.classList.add(`header-${color}`);
}

function resetHeaderColor() {
    var header = document.getElementById("pageHeader");
    header.classList.remove("header-red", "header-green", "header-blue");
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

var audioElement = document.getElementById('player');
var progressBar = document.querySelector('.progress-inner');

// Adiciona evento de escuta para quando o usuário interagir com a barra de progresso
progressBar.addEventListener('mousedown', function(event) {
    // Obtém a posição inicial do mouse e a posição inicial da barra de progresso
    var initialMouseX = event.pageX;
    var initialProgressWidth = progressBar.offsetWidth;

    // Adiciona evento de escuta para quando o usuário move o mouse
    function handleMouseMove(moveEvent) {
        // Calcula o deslocamento do mouse em relação à posição inicial
        var offsetX = moveEvent.pageX - initialMouseX;

        // Calcula a nova largura da barra de progresso
        var newProgressWidth = Math.max(0, Math.min(initialProgressWidth + offsetX, progressBar.parentElement.offsetWidth));

        // Calcula a proporção da nova posição em relação à largura total da barra de progresso
        var progressRatio = newProgressWidth / progressBar.parentElement.offsetWidth;

        // Define a nova posição da música com base na proporção calculada
        audioElement.currentTime = progressRatio * audioElement.duration;
    }

    // Adiciona evento de escuta para quando o usuário soltar o botão do mouse
    function handleMouseUp() {
        // Remove os eventos de escuta de movimento e de liberação do mouse
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }

    // Adiciona os eventos de escuta de movimento e de liberação do mouse ao documento
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
});

// Atualiza a posição da barra de progresso conforme a reprodução da música
audioElement.addEventListener('timeupdate', function() {
    var progressRatio = audioElement.currentTime / audioElement.duration;
    progressBar.style.width = (progressRatio * 100) + '%';
});

audioElement.addEventListener('ended', function() {
  nextSong();
});


var timeOfMusicStart = document.getElementById('start');
var timeOfMusicEnd = document.getElementById('end');

timeOfMusicStart.innerHTML = '0:00';
timeOfMusicEnd.innerHTML = '3:00'

audioElement.addEventListener('loadedmetadata', function() {
    timeOfMusicEnd.innerHTML = formatTime(audioElement.duration);
});

audioElement.addEventListener('timeupdate', function() {
    var currentTime = audioElement.currentTime;
    var duration = audioElement.duration;

    timeOfMusicStart.innerHTML = formatTime(currentTime);
});

function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    return pad(minutes) + ':' + pad(seconds);
}

function pad(number) {
    return (number < 10 ? '0' : '') + number;
}