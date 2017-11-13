window.onload = function() {

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
  $('.input-wrapper form').on('submit', function (e) {
    e.preventDefault();
    $('.welcome-screen').addClass('hidden');

    const name= $('#name-input').val();
    $('.main .user-name').html('Welcome,  '+name);
    $('.main').removeClass('hidden');
    $(document).on('keypress',function(e) {
    if(e.keyCode==32||80) {
       toggleMusic();
     }

    });

  });
  $('header>button').on('click', function (e) {
       e.preventDefault();
        $('.main').addClass('hidden');
        $('.welcome-screen').removeClass('hidden');

});

  $('.clickable').on('click', toggleMusic);



  const songList = ['AUDIO 1', 'AUDIO 2', 'AUDIO 3' ];
   const songArtist = ['artist #1', 'artist #2', 'artist #3' ];
    const albumList = ['123', '456', '789' ];
     const durationList = ['02:51', '02:40', '03:24' ];

  for(let i=0 ; i <songList.length;i++) {
    let index  = i +1;
  //  var name = '#song' + (i+1);
    //var song = $(name);
    var song =$('#song' + index);
    song.find('.song-name').text(songList[i]);
      song.find('.song-artist').text(songArtist[i]);
       song.find('.song-album').text(albumList[i]);
        song.find('.song-length').text(durationList[i]);

  }

  const fileNames = ['song.mp3.aac','song1.mp3.mp3','song2.mp3.mp3'];
    var audio= $('audio')[0];
  function somefunction(id,index) {
    $(id).on('click', function () {
  if(audio.src.search(fileNames[index])==-1){
      audio.src = fileNames[index];
      $('.current-song-name').text(songList[index].name);
     $('.current-song-album').text(songList[index].album);
      toggleMusic();

    } else{
      toggleMusic();
    }
    });
  }
  for(let i=1; i<=songList.length;i++) {
    somefunction('#song' + i, i-1);
  }



}
