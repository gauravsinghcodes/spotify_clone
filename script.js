console.log("Spotify Clone Loaded");

// ------------ DATA REPOSITORY ------------

const playlists = {
    bangBang: {
        title: "Bang Bang",
        artist: "Vishal-Shekhar",
        cover: "https://i.scdn.co/image/ab67616d00001e02058494835ee23ad6104f81f2",
        songs: [
            { title: "Tu Meri", artist: "Bang Bang", file: "songs/Tu Meri Bang Bang 128 Kbps.mp3" },
            { title: "Uff", artist: "Bang Bang", file: "songs/Uff Bang Bang 128 Kbps.mp3" },
            { title: "Bang Bang", artist: "Benny Dayal", file: "songs/Bang Bang Benny Dayal 128 Kbps.mp3" },
            { title: "Meherbaan", artist: "Bang Bang", file: "songs/Meherbaan Bang Bang 128 Kbps.mp3" }
        ]
    },
    mohabbatein: {
        title: "Mohabbatein",
        artist: "Jatin-Lalit",
        cover: "https://i.scdn.co/image/ab67616d00001e0205a0d368c0fbf69c9a76bc81",
        songs: [
            { title: "Aankhein Khuli", artist: "Mohabbatein", file: "songs/Aankhein Khuli Mohabbatein 128 Kbps.mp3" },
            { title: "Chalte Chalte", artist: "Mohabbatein", file: "songs/Chalte Chalte Mohabbatein 128 Kbps.mp3" },
            { title: "Humko Humise Chura Lo", artist: "Mohabbatein", file: "songs/Humko Humise Chura Lo Mohabbatein 128 Kbps.mp3" },
            { title: "Pairon Mein Bandhan Hai", artist: "Mohabbatein", file: "songs/Pairon Mein Bandhan Hai Mohabbatein 128 Kbps.mp3" },
            { title: "Soni Soni", artist: "Mohabbatein", file: "songs/Soni Soni Mohabbatein 128 Kbps.mp3" },
            { title: "Zinda Rehti Hain", artist: "Mohabbatein", file: "songs/Zinda Rehti Hain Mohabbatein Lata Mangeshkar 128 Kbps.mp3" }
        ]
    },
    holiday: {
        title: "Holiday",
        artist: "Pritam",
        cover: "https://i.scdn.co/image/ab67616d00001e025b82c9cb2b20c1c14b2be308",
        songs: [
            { title: "Ashq Na Ho", artist: "Holiday", file: "songs/Ashq Na Ho Holiday A Soldier Is Never Off Duty 128 Kbps.mp3" },
            { title: "Blame The Night", artist: "Holiday", file: "songs/Blame The Night Holiday A Soldier Is Never Off Duty 128 Kbps.mp3" },
            { title: "Shaayraana", artist: "Holiday", file: "songs/Shaayraana Holiday A Soldier Is Never Off Duty 128 Kbps.mp3" },
            { title: "Tu Hi Toh Hai", artist: "Holiday", file: "songs/Tu Hi Toh Hai Holiday A Soldier Is Never Off Duty 128 Kbps.mp3" }
        ]
    },
    kgf: {
        title: "KGF: Chapter 2",
        artist: "Ravi Basrur",
        cover: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c03e2b33fc6a2131fdb469717",
        songs: [
            { title: "Falak Tu Garaj Tu", artist: "KGF", file: "songs/Falak Tu Garaj Tu Kgf Chapter 2 128 Kbps.mp3" },
            { title: "Gali Gali", artist: "KGF", file: "songs/Gali Gali Kgf Chapter 1 128 Kbps.mp3" },
            { title: "Ho Jaane Do Aar Paar", artist: "KGF", file: "songs/Ho Jaane Do Aar Paar Kgf Chapter 1 128 Kbps.mp3" },
            { title: "Kokh Ke Rath Mein", artist: "KGF", file: "songs/Kokh Ke Rath Mein Kgf Chapter 1 128 Kbps.mp3" },
            { title: "Mehabooba", artist: "KGF", file: "songs/Mehabooba Kgf Chapter 2 128 Kbps.mp3" },
            { title: "Sab Ke Sapnon Ki", artist: "KGF", file: "songs/Sab Ke Sapnon Ki Kgf Chapter 1 128 Kbps.mp3" },
            { title: "Salaam Rocky Bhai", artist: "KGF", file: "songs/Salaam Rocky Bhai Kgf Chapter 1 128 Kbps.mp3" },
            { title: "Sultan", artist: "KGF", file: "songs/Sultan Kgf Chapter 1 128 Kbps.mp3" },
            { title: "The Monster Song", artist: "KGF", file: "songs/The Monster Song Kgf Chapter 2 Hindi 128 Kbps.mp3" },
            { title: "Toofan", artist: "KGF", file: "songs/Toofan Kgf Chapter 2 128 Kbps.mp3" }
        ]
    },
    mainTeraHero: {
        title: "Main Tera Hero",
        artist: "Sajid-Wajid",
        cover: "https://i.scdn.co/image/ab67616d00001e0240c98561f61a572a20ba71e1",
        songs: [
            { title: "Besharmi Ki Height", artist: "Main Tera Hero", file: "songs/Besharmi Ki Height Main Tera Hero 128 Kbps.mp3" },
            { title: "Galat Baat Hai", artist: "Main Tera Hero", file: "songs/Galat Baat Hai Main Tera Hero 128 Kbps.mp3" },
            { title: "Palat Tera Hero", artist: "Main Tera Hero", file: "songs/Palat Tera Hero Idhar Hai Main Tera Hero 128 Kbps.mp3" },
            { title: "Shanivaar Raati", artist: "Main Tera Hero", file: "songs/Shanivaar Raati Main Tera Hero 128 Kbps.mp3" }
        ]
    },
    dishoom: {
        title: "Dishoom",
        artist: "Pritam",
        cover: "https://i.scdn.co/image/ab67616d00001e02d40f14fbc589329567858fc0",
        songs: [
            { title: "Sau Tarah Ke", artist: "Dishoom", file: "songs/Sau Tarah Ke Dishoom 128 Kbps.mp3" }
        ]
    },
    race: {
        title: "Race 2",
        artist: "Pritam",
        cover: "https://i.scdn.co/image/ab67616d00001e020df18810131fd56a87a5fc7a",
        songs: [
            { title: "Lat Lag Gayee", artist: "Race 2", file: "songs/Lat Lag Gayee Race 2 128 Kbps.mp3" },
            { title: "Party On My Mind", artist: "Race 2", file: "songs/Party On My Mind Race 2 128 Kbps.mp3" }
        ]
    },
    khiladi: {
        title: "Khiladi 786",
        artist: "Himesh Reshammiya",
        cover: "https://i.scdn.co/image/ab67616d00001e0233f89bc08b2d9cda09a857a1",
        songs: [
            { title: "Hookah Bar", artist: "Khiladi 786", file: "songs/Hookah Bar Khiladi 786 128 Kbps.mp3" }
        ]
    }
};

// ------------ STATE & ELEMENTS ------------

let currentPlaylistKey = null;
let currentPlaylistIcon = null; // Store reference to currently playing playlist icon if needed
let currentSongIndex = 0;
let isPlaying = false;
let audio = new Audio();

const elements = {
    playlistContainer: document.getElementById('playlist-container'),
    songListView: document.getElementById('song-list-view'),
    currentSongList: document.getElementById('current-song-list'),

    // Hero
    heroImage: document.querySelector('#hero-image img'),
    heroTitle: document.getElementById('playlist-title'),
    heroDesc: document.getElementById('playlist-desc'),

    // Player
    playBtn: document.getElementById('play'),
    playBtnIcon: document.querySelector('#play img'),
    prevBtn: document.getElementById('prev'),
    nextBtn: document.getElementById('next'),
    trackName: document.getElementById('track-name'),
    trackArtist: document.getElementById('track-artist'),
    trackArt: document.getElementById('min-track-art'),

    // Seek
    currentTime: document.getElementById('current-time'),
    totalTime: document.getElementById('total-time'),
    seekbarFill: document.getElementById('seekbar-fill'),
    seekbarThumb: document.getElementById('seekbar-thumb'),
    seekbar: document.getElementById('seekbar'),

    // Volume
    volumeRange: document.getElementById('volume-range'),

    // Navigation
    sidebar: document.getElementById('sidebar'),
    sidebarToggle: document.getElementById('sidebar-toggle'),
    closeSidebar: document.getElementById('close-sidebar'),
    closeSidebar: document.getElementById('close-sidebar'),
    playAllBtn: document.getElementById('play-all-btn'),
    backBtn: document.getElementById('back-btn')
};

// ------------ INITIALIZATION ------------

function init() {
    renderPlaylists();
    setupEventListeners();
}

// ------------ RENDERING ------------

function renderPlaylists() {
    elements.playlistContainer.innerHTML = '';

    for (const [key, data] of Object.entries(playlists)) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${data.cover}" alt="${data.title}">
            <h3>${data.title}</h3>
            <p>${data.artist}</p>
            <div class="play-icon-hover">
                <img src="img/play.svg" alt="Play" style="width: 24px; height: 24px; margin-left:4px;"> 
            </div>
        `;

        card.addEventListener('click', () => loadPlaylistView(key));
        elements.playlistContainer.appendChild(card);
    }
}

function loadPlaylistView(key) {
    currentPlaylistKey = key;
    const playlist = playlists[key];

    // Update Hero
    elements.heroImage.src = playlist.cover;
    elements.heroTitle.textContent = playlist.title;
    elements.heroDesc.textContent = playlist.artist;

    // Render Songs
    elements.currentSongList.innerHTML = '';
    playlist.songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.classList.add('song-item');
        li.innerHTML = `
            <div class="number-col">
                <span class="number">${index + 1}</span>
                <img class="play-indicator" src="img/play.svg" alt="Play">
            </div>
            <div>${song.title}</div>
            <div>${song.artist}</div>
        `;
        li.addEventListener('click', () => {
            playSong(key, index);
        });
        elements.currentSongList.appendChild(li);
    });

    // Show View
    elements.playlistContainer.parentElement.classList.add('hidden');
    elements.songListView.classList.remove('hidden');
}

// ------------ AUDIO CONTROLS ------------

function playSong(playlistKey, index) {
    const playlist = playlists[playlistKey];
    if (!playlist) return;

    // Update state
    currentPlaylistKey = playlistKey;
    currentSongIndex = index;
    const song = playlist.songs[index];

    audio.src = song.file;
    audio.play();
    isPlaying = true;

    updatePlayerUI(song, playlist.cover);
    updatePlayButtonState();
}

function togglePlay() {
    if (!audio.src) {
        // If no song selected, play first of first playlist
        const firstKey = Object.keys(playlists)[0];
        playSong(firstKey, 0);
        return;
    }

    if (audio.paused) {
        audio.play();
        isPlaying = true;
    } else {
        audio.pause();
        isPlaying = false;
    }
    updatePlayButtonState();
}

function updatePlayButtonState() {
    if (isPlaying) {
        elements.playBtnIcon.src = 'img/pause.svg';
    } else {
        elements.playBtnIcon.src = 'img/play.svg';
    }
}

function prevSong() {
    if (!currentPlaylistKey) return;
    const playlist = playlists[currentPlaylistKey];

    currentSongIndex = (currentSongIndex - 1 + playlist.songs.length) % playlist.songs.length;
    playSong(currentPlaylistKey, currentSongIndex);
}

function nextSong() {
    if (!currentPlaylistKey) return;
    const playlist = playlists[currentPlaylistKey];

    currentSongIndex = (currentSongIndex + 1) % playlist.songs.length;
    playSong(currentPlaylistKey, currentSongIndex);
}

function updatePlayerUI(song, cover) {
    elements.trackName.textContent = song.title;
    elements.trackArtist.textContent = song.artist;
    elements.trackArt.src = cover;
}

// ------------ EVENTS ------------

function setupEventListeners() {
    // Player Controls
    elements.playBtn.addEventListener('click', togglePlay);
    elements.playAllBtn.addEventListener('click', () => playSong(currentPlaylistKey, 0));
    elements.prevBtn.addEventListener('click', prevSong);
    elements.nextBtn.addEventListener('click', nextSong);

    // Audio Events
    audio.addEventListener('timeupdate', updateSeekbar);
    audio.addEventListener('ended', nextSong);

    // Seekbar Click
    elements.seekbar.addEventListener('click', (e) => {
        const rect = elements.seekbar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    });

    // Volume
    elements.volumeRange.addEventListener('input', (e) => {
        audio.volume = e.target.value / 100;
    });

    // Sidebar
    elements.sidebarToggle.addEventListener('click', () => {
        elements.sidebar.classList.add('active');
    });

    elements.closeSidebar.addEventListener('click', () => {
        elements.sidebar.classList.remove('active');
    });

    // Back to Playlists Button (Optional, can be added to top bar)
    // For now, let's make the "Home" link reset view
    document.querySelector('.nav-links li:first-child').addEventListener('click', (e) => {
        e.preventDefault();
        goBackToPlaylists();
    });

    // Back Button
    elements.backBtn.addEventListener('click', () => {
        goBackToPlaylists();
    });
}

function goBackToPlaylists() {
    elements.playlistContainer.parentElement.classList.remove('hidden');
    elements.songListView.classList.add('hidden');
}

function updateSeekbar() {
    if (audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100;
        elements.seekbarFill.style.width = `${percent}%`;
        elements.seekbarThumb.style.left = `${percent}%`;

        elements.currentTime.textContent = formatTime(audio.currentTime);
        elements.totalTime.textContent = formatTime(audio.duration);
    }
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
}

// Initialize
init();
