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
 
  updatePlayerNow(song);
  updateNextSong();
  
  var nextButton = document.getElementById('nextButton');
  nextButton.dataset.nextIndex = (index + 1) % window.musicLibrary.length;
}

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

var playerNowButton = document.querySelector('#showPlayerNow');

function removePlayerNow() {
  angleUp.style.display = 'block';
  angleDown.style.display = 'none';
  playerNowContent.style.display = 'none';
}

function showPlayerNow() {
  playerNowContent.style.display = 'block';
  angleDown.style.display = 'block';
  angleUp.style.display = 'none'
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
var timeOfMusicStart = document.querySelector('#start')
var timeOfMusicEnd = document.querySelector('#end')

timeOfMusicStart.innerHTML = '0:00';
timeOfMusicEnd.innerHTML = '3:00'


progressBar.style.width = '1%';
