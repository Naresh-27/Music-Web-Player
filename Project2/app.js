console.log("Welcome");
const music = new Audio("songs/song_13.mp3");
// music.play();

const Songs =[
    {
        id: "1",
        songName: ` Jayaho Janatha <br>
        <div class="subtitle">sukhwinder singh</div> `,
        poster: "images/song_img1.png"
    },
    {
        id: "2",
        songName: ` Jai Ho <br>
        <div class="subtitle">vijay prakash</div> `,
        poster: "images/song_img2.png"
    },
    {
        id: "3",
        songName: ` Chandra chooda <br>
        <div class="subtitle">midhun mukundan</div> `,
        poster: "images/song_img3.png"
    },
    {
        id: "4",
        songName: ` Husn <br>
        <div class="subtitle">anuv jain</div> `,
        poster: "images/song_img4.png"
    },
    {
        id: "5",
        songName: ` Heeriye <br>
        <div class="subtitle">arjit singh</div> `,
        poster: "images/song_img5.png"
    },
    {
        id: "6",
        songName: ` Pularikalo <br>
        <div class="subtitle">gopi sundar</div> `,
        poster: "images/song_img6.png"
    },
    {
        id: "7",
        songName: ` Malare <br>
        <div class="subtitle">rajesh murugesan</div> `,
        poster: "images/song_img7.png"
    },
    {
        id: "8",
        songName: ` O Humdum Suniyero Re <br>
        <div class="subtitle">shaan</div></h5> `,
        poster: "images/song_img8.png"
    },
    {
        id: "9",
        songName: ` One Love <br>
        <div class="subtitle">shubh</div> `,
        poster: "images/song_img9.png"
    },
    {
        id: "10",
        songName: ` With You <br>
        <div class="subtitle">ap dhillon</div> `,
        poster: "images/song_img10.png"
    },
    {
        id: "11",
        songName: ` Hurts So Good <br>
        <div class="subtitle">astrid s</div> `,
        poster: "images/song_img11.png"
    },
    {
        id: "12",
        songName: ` Reminder <br>
        <div class="subtitle">the weekend</div> `,
        poster: "images/song_img12.png"
    },
    {
        id: "13",
        songName: ` Vande Mataram <br>
        <div class="subtitle">ar rahman</div> `,
        poster: "images/song_img13.png"
    },
    {
        id: "14",
        songName: ` Alone <br>
        <div class="subtitle">alen walker</div> `,
        poster: "images/song_img14.png"
    },
    {
        id: "15",
        songName: ` Hymn for the Weekend <br>
        <div class="subtitle">cold play</div> `,
        poster: "images/song_img15.png"
    },
    {
        id: "16",
        songName: ` Till I Collapse <br>
        <div class="subtitle">eminem</div> `,
        poster: "images/song_img16.png"
    },
    {
        id: "17",
        songName: ` Peaky Blinders <br>
        <div class="subtitle">otnicka</div> `,
        poster: "images/song_img17.png"
    },
    {
        id: "18",
        songName: ` Love Story <br>
        <div class="subtitle">indila</div> `,
        poster: "images/song_img18.png"
    },
    {
        id: "19",
        songName: ` Middle of the Night <br>
        <div class="subtitle">elley duhe</div> `,
        poster: "images/song_img19.png"
    },
    {
        id: "20",
        songName: ` After Hours <br>
        <div class="subtitle">the weekend</div> `,
        poster: "images/song_img20.png"
    },
    {
        id: "21",
        songName: ` Ily (I love you baby) <br>
        <div class="subtitle">surf mesa</div></h5> `,
        poster: "images/song_img21.png"
    },
    {
        id: "22",
        songName: ` Movements <br>
        <div class="subtitle">pham</div> `,
        poster: "images/song_img22.png"
    },
    {
        id: "23",
        songName: ` Falling <br>
        <div class="subtitle">trevor daniel</div> `,
        poster: "images/song_img23.png"
    },
    {
        id: "24",
        songName: ` Industry Baby <br>
        <div class="subtitle">lil nas x</div> `,
        poster: "images/song_img24.png"
    },
    {
        id: "25",
        songName: ` Lose Your Self <br>
        <div class="subtitle">eminem</div> `,
        poster: "images/song_img25.png"
    },
    {
        id: "26",
        songName: ` Hope <br>
        <div class="subtitle">xxx tentacion</div> `,
        poster: "images/song_img26.png"
    },
    {
        id: "27",
        songName: ` Escapism<br>
        <div class="subtitle">raye</div> `,
        poster: "images/song_img27.png"
    },
    {
        id: "28",
        songName: ` Faded <br>
        <div class="subtitle">alen walker </div> `,
        poster: "images/song_img28.png"
    },
    {
        id: "29",
        songName: ` Snow Crystals <br>
        <div class="subtitle">babalos</div> `,
        poster: "images/song_img29.png"
    },
    {
        id: "30",
        songName: ` Girls Like You<br>
        <div class="subtitle">maroon 5</div> `,
        poster: "images/song_img30.png"
    },
    {
        id: "31",
        songName: ` Dusk Till Down <br>
        <div class="subtitle">zayn </div> `,
        poster: "images/song_img31.png"
    },
    {
        id: "32",
        songName: ` People <br>
        <div class="subtitle">libianca</div> `,
        poster: "images/song_img32.png"
    },
    {
        id: "33",
        songName: ` Ignite <br>
        <div class="subtitle">alen walker</div> `,
        poster: "images/song_img33.png"
    },
    {
        id: "34",
        songName: ` STAY <br>
        <div class="subtitle">justin beiber</div> `,
        poster: "images/song_img34.png"
    },
    {
        id: "35",
        songName: ` Star boy <br>
        <div class="subtitle">the weekend</div> `,
        poster: "images/song_img35.png"
    },
    {
        id: "36",
        songName: ` Heat Waves <br>
        <div class="subtitle">glass animals</div> `,
        poster: "images/song_img36.png"
    },
    {
        id: "37",
        songName: ` Believer<br>
        <div class="subtitle">imagine dragons</div> `,
        poster: "images/song_img37.png"
    },
    {
        id: "38",
        songName: ` Shape of You <br>
        <div class="subtitle">ed sheeran</div> `,
        poster: "images/song_img38.png"
    },
    {
        id: "39",
        songName: ` SNAP <br>
        <div class="subtitle">rosa linn</div> `,
        poster: "images/song_img39.png"
    },
    {
        id: "40",
        songName: ` Lovely <br>
        <div class="subtitle">billie eilish</div> `,
        poster: "images/song_img40.png"
    }
]


Array.from(document.querySelectorAll(".card")).forEach((e,i) => {
    e.getElementsByTagName("img")[0].src = Songs[i].poster;
    e.getElementsByTagName("h5")[0].innerHTML = Songs[i].songName;
}) 

const makeAllPlay = () => {
    Array.from(document.querySelectorAll(".card")).forEach((el) => {
        master_play.classList.add("bi-play-circle-fill");
        master_play.classList.remove("bi-pause-circle-fill");    
    })
}

const makeBackground = () => {
    Array.from(document.querySelectorAll(".card")).forEach((el) => {
    el.style.background = "rgb(33, 37, 41, 0);"
    
    })
}

// ---- MASTER PLAY------->
let master_play = document.querySelector("#master_play");
let wave = document.querySelector("#wave");

master_play.addEventListener('click',() => {
    if(music.paused || music.currentTime <= 0 ){
        music.play();
        master_play.classList.add("bi-pause-circle-fill");
        master_play.classList.remove("bi-play-circle-fill");
        wave.classList.add("active1");
    }else{
        music.pause();
        master_play.classList.remove("bi-pause-circle-fill");
        master_play.classList.add("bi-play-circle-fill");
        wave.classList.remove("active1");
    }
})

// ---- CHANGING THE TITLE, MUSIC AND SONG POSTER---->
let index = 0 ;
let poster_playbar = document.querySelector("#poster_playbar");
let title = document.querySelector("#title");

Array.from(document.querySelectorAll(".playlistplay")).forEach((e)=>{
    e.addEventListener("click",(el) =>{
    index = el.target.id;
    // console.log(index)
    music.src = `songs/song_${index}.mp3`;
    // console.log(music.src)
    poster_playbar.src = `images/song_img${index}.png`;
    // console.log(poster_playbar.src)
    music.play();
    master_play.classList.remove("bi-play-circle-fill");
    master_play.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");

    
        let songTitles = Songs.filter((els) => {
            // console.log(els)
            return els.id === index;
            // console.log(els.id)
             
        });

        // console.log(songTitles)
        songTitles.forEach(elss => {
        let {songName} = elss;  
        title.innerHTML = songName;
            
        });

        // makeBackground();
        // Array.from(document.querySelectorAll(".card"))[index-1].style.background = " rgb(33, 37, 41, 1);";


        // makeAllPlay();
        // el.target.classList.add("bi-pause-circle-fill");
        // el.target.classList.remove("bi-play-circle-fill");
    })
    
})

// ---  SONG START, END SEEKBAR---->
let song_start = document.querySelector(".song_start");
let song_end = document.querySelector(".song_end");
let seekbar = document.querySelector("#seekbar");

music.addEventListener("timeupdate", ()=>{
    let music_curr = music.currentTime;
    let music_dura = music.duration;
    // console.log(music_curr , music_dura);
    
    let min1 = Math.floor(music_dura / 60);
    let sec1 = Math.floor(music_dura % 60);
    // console.log(min1 , sec1);
    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    song_end.innerText = ` ${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    song_start.innerText = ` ${min2}:${sec2}`;


    let progress_bar = parseInt((music_curr / music_dura) * 100);
    seekbar.value = progress_bar;
    
})
seekbar.addEventListener("change", () => {
    music.currentTime = seekbar.value * music.duration / 100;
})

//   --NEXT AND PREVIOUS SONG----->
let prev_song = document.querySelector("#prev_song");
let next_song = document.querySelector("#next_song");

prev_song.addEventListener("click", () => {
    index -=1;
    if(index < 1){
        index = Array.from(document.querySelectorAll(".card")).length;
    }
    // console.log(index);
    music.src = `songs/song_${index}.mp3`;
    // console.log(music.src)
    poster_playbar.src = `images/song_img${index}.png`;
    // console.log(poster_playbar.src)
    music.play();
    master_play.classList.remove("bi-play-circle-fill");
    master_play.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");

    
        let songTitles = Songs.filter((els) => {
            // console.log(els)
            return els.id == index;
            // console.log(els.id)
             
        });

        // console.log(songTitles)
        songTitles.forEach(elss => {
        let {songName} = elss;  
        title.innerHTML = songName;
            
        });
})
next_song.addEventListener("click", () => {
    index ++;
    if(index > Array.from(document.querySelectorAll(".card")).length){
        index = 1;
    }
    // console.log(index);
    music.src = `songs/song_${index}.mp3`;
    // console.log(music.src)
    poster_playbar.src = `images/song_img${index}.png`;
    // console.log(poster_playbar.src)
    music.play();
    master_play.classList.remove("bi-play-circle-fill");
    master_play.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");

    
        let songTitles = Songs.filter((els) => {
            // console.log(els)
            return els.id == index;
            // console.log(els.id)
             
        });

        // console.log(songTitles)
        songTitles.forEach(elss => {
        let {songName} = elss;  
        title.innerHTML = songName;
            
        }); 
});

//   --VOLUME---->
let volume = document.querySelector("#volume")

volume.addEventListener("click", ()=>{
    if(music.volume == 0){
        volume.classList.add("bi-volume-up-fill");
        volume.classList.remove("bi-volume-mute-fill");
        music.volume = true;
    }else{
        volume.classList.add("bi-volume-mute-fill");
        volume.classList.remove("bi-volume-up-fill");
        music.volume = false;
    }
    
})
