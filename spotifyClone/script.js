console.log("I CAN DO THIS ALL DAY")
    
let currentSong=new Audio();

// It returns song
async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/songs/")
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")

    // console.log(as)

    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }
    }
    // console.log(songs)
    return songs

}
const playMusic=(track)=>{
    // let audio=new Audio("/songs/"+track)
    currentSong.src="/songs/"+track
    currentSong.play()
}
async function main() {

    let songs = await getSongs()
    console.log(songs)

    //for displaying the list of songs in playlists
    let songUL = document.querySelector(".song-list").getElementsByTagName("ul")[0]

    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML += `
            <li>
                <img class="invert" src="img/music.svg" alt="">
                <div class="info">
                    <div>${song}</div>
                    <div>Nabeel</div>
                </div>
                <div class="playnow">
                    <span>Play Now</span>
                </div>
                <img src="img/play.svg" class="invert" alt="">
            </li>
        `
    }
    // Attach an event listener to each song
    Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())

        })
    })

    //Attach an event listener to play next and previous
    play.addEventListener("click",()=>{
        if(currentSong.paused){
            currentSong.play()
            play.src="/img/pause.svg"
        }
        else{
            currentSong.pause()
            play.src="/img/play.svg"
        }
    })
}
main()
