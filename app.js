const searchSong = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://api.lyrics.ovh/suggest/:${searchText}`;
   fetch(url)
   .then(res=>res.json())
   .then(data=>displaySong(data.data))
   .catch(eror => displayEror('something went wrong!!try later'));
    
   
}
    const displaySong = songs =>{
        
        const songContainer = document.getElementById('song-container');
        songContainer.innerHTML ='';
        songs.forEach(song =>{
            console.log(song)
        const songDiv = document.createElement('div');
        songDiv.className ='single-result row align-items-center my-3 p-3s'
        songDiv.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
            <audio controls>
            <source src="${song.preview}" type="audio/mpeg">
            </audio>
        </div>
        <div class="col-md-3 text-md-right text-center">
             <button onclick ="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
    </div>
        `;
        songContainer.appendChild(songDiv);

        
    })
}
const getLyric = (artist, title) =>{
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
    fetch(url)
    .then(res =>res.json())
    .then(data=>displayLyrics(data.lyrics))
}
const displayLyrics = lyrics =>{
    const lyricsDiv = document.getElementById('song-lyric');
    lyricsDiv.innerText = lyrics;
}
const displayEror = eror =>{
    const erorTag = document.getElementById('eror-message');
    erorTag.innerText = eror;
}




