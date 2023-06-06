console.log("Welcome to spotifiy");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
let darkMode = document.getElementById('dark');
let songs = [
    { songName: "Meri jan", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "song hai", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "vibe wala song", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Ishq wala love", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Asaan nhi yahaan", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Kun-faya-Kun", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Teri meri kahani", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Bones by Imagine Dragons", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "It ain't me by Selena Gomez", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Bhau mera", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" }
]

songItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', () => {
    

    //Update seekbar
    myProgressBar.value = parseInt((audioElement.currentTime / audioElement.duration) * 100);


    // myProgressBar.value = progress;
    
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlays = () => {

    songItemPlay.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

songItemPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex > 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex =0 ;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

//activating dark mode

let bottom=document.getElementById('bar');
let bodycolor=document.body;
let navbar=document.getElementById('navbar');

console.log(navbar.style.backgroundColor == 'black');

darkMode.addEventListener('click',()=>{

    // if(navbar.style.backgroundColor == 'green'){
    // navbar.style.backgroundColor="black";
    // navbar.style.color="white";
    // bodycolor.style.backgroundColor='#1d2a35';
    // bottom.style.backgroundColor='black';
    // bottom.style.color='white';
    // }
    // else{
    //     navbar.style.backgroundColor="green";
    // navbar.style.color="black";
    // bodycolor.style.backgroundColor='antiquewhite';
    // bottom.style.backgroundColor='green';
    // bottom.style.color='black';
    // }
        //second method for dark mode

        //if the theme is light convert into dark
    if(navbar.classList.contains("lightm")){
        navbar.classList.remove("lightm");
        navbar.classList.add("darkm");
        bodycolor.style.backgroundColor='#1d2a35'
        bottom.classList.remove("lightm");
        bottom.classList.add("darkm");

    }
    //if the theme is dark convert it into light
    else{
        navbar.classList.remove("darkm");
        navbar.classList.add("lightm");
        bodycolor.style.backgroundColor='antiquewhite';
        bottom.classList.remove("darkm");
        bottom.classList.add("lightm");
    }

});