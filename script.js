const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// Song titles
const songs = ["hey", "summer", "ukulele"];

// Keep track of song
let songIndex = 2;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
	title.innerText = song;
	audio.src = `music/${song}.mp3`;
	cover.src = `images/${song}.jpg`;
}

// Play song
function playSong() {
	musicContainer.classList.add("play");
	playBtn.querySelector("i.fas").classList.remove("fa-play");
	playBtn.querySelector("i.fas").classList.add("fa-pause");
}

// Pause song
function pauseSong() {
	musicContainer.classList.remove("play");
	playBtn.querySelector("i.fas").classList.add("fa-play");
	playBtn.querySelector("i.fas").classList.remove("fa-pause");
}

// Prev song
function prevSong() {
	if (songIndex > 0) {
		songIndex--;
		loadSong(songs[songIndex]);
	} else {
		songIndex = songs.length - 1;
		loadSong(songs[songIndex]);
	}
}

// Next song
function nextSong() {
    if (songIndex < songs.length - 1) {
        songIndex++;
        loadSong(songs[songIndex])
    }
    else {
        songIndex = 0;
        loadSong(songs[songIndex])
    }
}

// Update progress
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

// Event listeners Below:

// Play and pause song
playBtn.addEventListener("click", () => {
	const isPlaying = musicContainer.classList.contains("play");

	if (isPlaying) {
		pauseSong();
	} else {
		playSong();
	}
});

// Change song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener('click', nextSong);

// Time song update
audio.addEventListener('timeupdate', updateProgress) 