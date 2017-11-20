window.onload = function() {
//Play  Pause a song
  function toggleMusic() {
    const audio= $('audio')[0];
    if(audio.paused) {
      audio.play();
      $('.clickable').removeClass('fa-play').addClass('fa-pause');
    } else {
      audio.pause();
      $('.clickable').removeClass('fa-pause').addClass('fa-play');
    }
  }

// Current time and  duration of song
  function formatTime(time) {
    const min = Math.floor(time/60);
    const sec = Math.floor(time%60);
    return (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec);
  }
function  timer() {
 const audio= $('audio')[0];
 const currentTime = formatTime(audio.currentTime);
 const duration = formatTime(audio.duration);
  $('.time-elapsed').text(currentTime);
  $('.song-duration').text(duration);
}
timer();
setInterval(timer, 1000);

                           //MAIN PAGE
  $('.input-wrapper form').on('submit', function (e) {
    e.preventDefault();
    $('.welcome-screen').addClass('hidden');
    const name= $('#name-input').val();
    $('.main .user-name').html('Welcome,  '+name);
    $('.main').removeClass('hidden');
// BY DEFAULT DETAILS OF SONG
      audio.src = fileNames[0];
      $('.current-song-name').text(songList[0]);
      $('.current-song-album').text(albumList[0]);
      $('.current-song-wrapper img').attr('src',images[0]);
//KEY PRESS FUNCTION
    $(document).on('keypress',function(e) {
    if(e.keyCode==32||e.keyCode==80||e.keyCode==112) {
       toggleMusic();
     }
  });
});                      //MAIN PAGE CLOSED

  $('.clickable').on('click', toggleMusic);

  const songList = ['Pappleen', '3 peg','Mere Rashke Qamar','Chatur Naar'];
  const songArtist = ['Diljit Dosanjh', 'SharryMaan', 'Rahat Fatehali', 'Neha Kakkar,Udit Narayan'];
  const albumList = ['Sardaarjii 2', '3 peg PagalWorld.com', 'Baadshaho', 'Machine'];
  const durationList = ['02:40', '03:24','03:40','03:41'];

  for(let i=0 ; i <songList.length;i++) {
    let index  = i +1;
    var song =$('#song' + index);
    song.find('.song-name').text(songList[i]);
      song.find('.song-artist').text(songArtist[i]);
       song.find('.song-album').text(albumList[i]);
        song.find('.song-length').text(durationList[i]);
}

  const fileNames = ['song1.mp3.mp3','song2.mp3.mp3','song3.mp3.mp3','song4.mp3.mp3'];
  const images = ['pic1.jpg.jpg','pic2.jpg.jpg','pic3.jpg.jpg','pic4.jpg.jpg'];
    var audio= $('audio')[0];

                       //        FUNCTION
  function somefunction(id,index) {
//CLICK EFFECT ON SONG
    $(id).on('click', function () {
     if(audio.src.search(fileNames[index])=== -1){
//DETAILS UPDATION OF SONG
      audio.src = fileNames[index];
      $('.current-song-wrapper img').attr('src',images[index]);
      $('.current-song-name').text(songList[index]);
     $('.current-song-album').text(albumList[index]);
      toggleMusic();
    }else{
      toggleMusic();
    }
    });
  }                       //FUNCTION CLOSED

  for(let i=1; i<=songList.length;i++) {
    somefunction('#song' + i, i-1);
  }



}
