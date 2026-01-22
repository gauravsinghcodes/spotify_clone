console.log("Spotify clone – playlists loaded");

// ------------ PLAYLIST DATA ------------

const playlists = {
    bangBang: [
        {
            title: "Tu Meri",
            artist: "Bang Bang",
            file: "songs/Tu Meri Bang Bang 128 Kbps.mp3"
        },
        {
            title: "Uff",
            artist: "Bang Bang",
            file: "songs/Uff Bang Bang 128 Kbps.mp3"
        },
        {
            title: "Bang Bang",
            artist: "Benny Dayal",
            file: "songs/Bang Bang Benny Dayal 128 Kbps.mp3"
        },
        {
            title: "Meherbaan",
            artist: "Bang Bang",
            file: "songs/Meherbaan Bang Bang 128 Kbps.mp3"
        }
    ],

    mohabbatein: [
        {
            title: "Aankhein Khuli",
            artist: "Mohabbatein",
            file: "songs/Aankhein Khuli Mohabbatein 128 Kbps.mp3"
        },
        {
            title: "Chalte Chalte",
            artist: "Mohabbatein",
            file: "songs/Chalte Chalte Mohabbatein 128 Kbps.mp3"
        },
        {
            title: "Humko Humise Chura Lo",
            artist: "Mohabbatein",
            file: "songs/Humko Humise Chura Lo Mohabbatein 128 Kbps.mp3"
        },
        {
            title: "Pairon Mein Bandhan Hai",
            artist: "Mohabbatein",
            file: "songs/Pairon Mein Bandhan Hai Mohabbatein 128 Kbps.mp3"
        },
        {
            title: "Soni Soni",
            artist: "Mohabbatein",
            file: "songs/Soni Soni Mohabbatein 128 Kbps.mp3"
        },
        {
            title: "Zinda Rehti Hain Mohabbatein",
            artist: "Mohabbatein",
            file: "songs/Zinda Rehti Hain Mohabbatein Lata Mangeshkar 128 Kbps.mp3"
        }
    ],

    holiday: [
        {
            title: "Ashq Na Ho",
            artist: "Holiday",
            file: "songs/Ashq Na Ho Holiday A Soldier Is Never Off Duty 128 Kbps.mp3"
        },
        {
            title: "Blame The Night",
            artist: "Holiday",
            file: "songs/Blame The Night Holiday A Soldier Is Never Off Duty 128 Kbps.mp3"
        },
        {
            title: "Shaayraana",
            artist: "Holiday",
            file: "songs/Shaayraana Holiday A Soldier Is Never Off Duty 128 Kbps.mp3"
        },
        {
            title: "Tu Hi Toh Hai",
            artist: "Holiday",
            file: "songs/Tu Hi Toh Hai Holiday A Soldier Is Never Off Duty 128 Kbps.mp3"
        }
    ],

    // NEW: KGF PLAYLIST
    kgf: [
        {
            title: "Falak Tu Garaj Tu",
            artist: "KGF",
            file: "songs/Falak Tu Garaj Tu Kgf Chapter 2 128 Kbps.mp3"
        },
        {
            title: "Gali Gali",
            artist: "KGF",
            file: "songs/Gali Gali Kgf Chapter 1 128 Kbps.mp3"
        },
        {
            title: "Ho Jaane Do Aar Paar",
            artist: "KGF",
            file: "songs/Ho Jaane Do Aar Paar Kgf Chapter 1 128 Kbps.mp3"
        },
        {
            title: "Kokh Ke Rath Mein",
            artist: "KGF",
            file: "songs/Kokh Ke Rath Mein Kgf Chapter 1 128 Kbps.mp3"
        },
        {
            title: "Mehabooba",
            artist: "KGF",
            file: "songs/Mehabooba Kgf Chapter 2 128 Kbps.mp3"
        },
        {
            title: "Sab Ke Sapnon Ki",
            artist: "KGF",
            file: "songs/Sab Ke Sapnon Ki Kgf Chapter 1 128 Kbps.mp3"
        },
        {
            title: "Salaam Rocky Bhai",
            artist: "KGF",
            file: "songs/Salaam Rocky Bhai Kgf Chapter 1 128 Kbps.mp3"
        },
        {
            title: "Sultan",
            artist: "KGF",
            file: "songs/Sultan Kgf Chapter 1 128 Kbps.mp3"
        },
        {
            title: "The Monster Song",
            artist: "KGF",
            file: "songs/The Monster Song Kgf Chapter 2 Hindi 128 Kbps.mp3"
        },
        {
            title: "Toofan",
            artist: "KGF",
            file: "songs/Toofan Kgf Chapter 2 128 Kbps.mp3"
        }
    ],

    mainTeraHero: [
        {
            title: "Besharmi Ki Height",
            artist: "Main Tera Hero",
            file: "songs/Besharmi Ki Height Main Tera Hero 128 Kbps.mp3"
        },
        {
            title: "Galat Baat Hai",
            artist: "Main Tera Hero",
            file: "songs/Galat Baat Hai Main Tera Hero 128 Kbps.mp3"
        },
        {
            title: "Palat Tera Hero Idhar Hai",
            artist: "Main Tera Hero",
            file: "songs/Palat Tera Hero Idhar Hai Main Tera Hero 128 Kbps.mp3"
        },
        {
            title: "Shanivaar Raati",
            artist: "Main Tera Hero",
            file: "songs/Shanivaar Raati Main Tera Hero 128 Kbps.mp3"
        }
    ],
    dishoom: [
        {
            title: "sau tarah ke",
            artist: "dishoom",
            file: "songs/Sau Tarah Ke Dishoom 128 Kbps.mp3"
        }
    ],
    race: [
        {
            title: "lat lag gyi",
            artist: "race",
            file: "songs/Lat Lag Gayee Race 2 128 Kbps.mp3"
        },
        {
            title: "party on my mind",
            artist: "race",
            file: "songs/Party On My Mind Race 2 128 Kbps.mp3"
        }
    ],
    khiladi:[
        {
            title: "hookah bar",
            artist: "khiladi786",
            file: "songs/Hookah Bar Khiladi 786 128 Kbps.mp3"
        }
    ]
};

// ------------ GLOBAL STATE ------------

const audio = new Audio();
let currentPlaylistName = "bangBang";
let currentPlaylist = playlists[currentPlaylistName];
let currentIndex = 0;
let lastVolume = 0.5;

// ------------ DOM ELEMENTS ------------

const songInfoEl = document.querySelector(".songinfo");
const songTimeEl = document.querySelector(".songtime");
const songListUl = document.querySelector(".songList ul");

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

const seekbar = document.querySelector(".seekbar");
const circle = document.querySelector(".circle");

const volumeRange = document.querySelector(".range input");
const volumeIcon = document.querySelector(".volume > img");

const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".left");
const closeSidebar = document.querySelector(".close");

// ------------ HELPERS ------------

function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "00:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

function renderPlaylist() {
    songListUl.innerHTML = "";

    currentPlaylist.forEach((song, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
      <img class="invert" src="img/music.svg" alt="">
      <div class="info">
        <div>${song.title}</div>
        <div>${song.artist}</div>
      </div>
      <div class="playnow">
        <span>Play Now</span>
        <img class="invert" src="img/play.svg" alt="">
      </div>
    `;
        li.addEventListener("click", () => playSong(index));
        songListUl.appendChild(li);
    });
}

function loadPlaylist(name, autoPlay = false) {
    currentPlaylistName = name;
    currentPlaylist = playlists[name];
    currentIndex = 0;

    renderPlaylist();
    playSong(0, !autoPlay);
}

// ------------ PLAY SONG ------------

function playSong(index, pauseOnly = false) {
    currentIndex = index;
    const track = currentPlaylist[currentIndex];

    audio.src = track.file;

    if (!pauseOnly) {
        audio.play();
        playBtn.src = "img/pause.svg";
    } else {
        playBtn.src = "img/play.svg";
    }

    songInfoEl.textContent = `${track.title} – ${track.artist}`;
    songTimeEl.textContent = "00:00 / 00:00";
}

// ------------ MAIN CONTROLS ------------

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.src = "img/pause.svg";
    } else {
        audio.pause();
        playBtn.src = "img/play.svg";
    }
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
    playSong(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentPlaylist.length;
    playSong(currentIndex);
});

audio.addEventListener("ended", () => {
    currentIndex = (currentIndex + 1) % currentPlaylist.length;
    playSong(currentIndex);
});

// ------------ TIME + SEEKBAR ------------

audio.addEventListener("timeupdate", () => {
    if (!isNaN(audio.duration)) {
        songTimeEl.textContent =
            `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;

        const percent = (audio.currentTime / audio.duration) * 100;
        circle.style.left = percent + "%";
    }
});

seekbar.addEventListener("click", e => {
    const rect = seekbar.getBoundingClientRect();
    const percent = ((e.clientX - rect.left) / rect.width) * 100;

    circle.style.left = percent + "%";
    audio.currentTime = (audio.duration * percent) / 100;
});

// ------------ VOLUME ------------

volumeRange.value = 50;
audio.volume = 0.5;

volumeRange.addEventListener("input", e => {
    const val = Number(e.target.value);
    audio.volume = val / 100;
    lastVolume = audio.volume;
});

// Mute/Unmute
volumeIcon.addEventListener("click", () => {
    if (audio.volume > 0) {
        lastVolume = audio.volume;
        audio.volume = 0;
        volumeRange.value = 0;
        volumeIcon.src = "img/mute.svg";
    } else {
        audio.volume = lastVolume || 0.5;
        volumeRange.value = audio.volume * 100;
        volumeIcon.src = "img/volume.svg";
    }
});

// ------------ SIDEBAR ------------

hamburger.addEventListener("click", () => {
    sidebar.style.left = "0";
});

closeSidebar.addEventListener("click", () => {
    sidebar.style.left = "-100%";
});

// ------------ CARD → PLAYLIST SWITCH ------------

document.querySelectorAll(".card").forEach(card => {
    const title = card.querySelector("h2").textContent.toLowerCase();

    if (title.includes("bang bang")) {
        card.addEventListener("click", () => loadPlaylist("bangBang", true));
    } else if (title.includes("mohabbatein")) {
        card.addEventListener("click", () => loadPlaylist("mohabbatein", true));
    } else if (title.includes("holiday")) {
        card.addEventListener("click", () => loadPlaylist("holiday", true));
    } else if (title.includes("kgf")) {
        card.addEventListener("click", () => loadPlaylist("kgf", true));
    } else if (title.includes("main tera hero")) {
        card.addEventListener("click", () => loadPlaylist("mainTeraHero", true));
    } else if (title.includes("dishoom")) {
        card.addEventListener("click", () => loadPlaylist("dishoom", true));
    } else if (title.includes("race")) {
        card.addEventListener("click", () => loadPlaylist("race", true));
    } else if (title.includes("khiladi")) {
        card.addEventListener("click", () => loadPlaylist("khiladi", true));
    } 
});

// ------------ LOAD DEFAULT PLAYLIST ------------

loadPlaylist("bangBang", false);
