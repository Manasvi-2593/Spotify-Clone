console.log("Welcome");
let songindex = 0;
let audio = new Audio("images/Taylor-Swift-Speak-Now-Taylors-Version-24Naijamuzic-com.mp3");
let masterplay = document.getElementById('masterplay');
let myprogbar = document.getElementById('progressbar');
let songs = [
    { songName: "Speak Now", filePath: 'path/to/song1.mp3', coverPath: 'path/to/cover1.jpg' },
    { songName: "Speak Now", filePath: 'path/to/song2.mp3', coverPath: 'path/to/cover2.jpg' },
    { songName: "Speak Now", filePath: 'path/to/song3.mp3', coverPath: 'path/to/cover3.jpg' }
];

//play pause
masterplay.addEventListener('click', () => {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    } else {
        audio.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
    }
});

audio.addEventListener("timeupdate", () => {
    console.log('timeupdate');
    let prog = parseInt((audio.currentTime / audio.duration) * 100);
    myprogbar.value = prog;
});

myprogbar.addEventListener('change', () => {
    audio.currentTime = myprogbar.value * audio.duration / 100;
});
