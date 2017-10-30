$('.input-wrapper form').on('submit', function (e) {
  e.preventDefault();
  $('.welcome-screen').addClass('hidden');
  var name= $('#name-input').val();
  $('.main .user-name').html('Welcome,  '+name);
  $('.main').removeClass('hidden');
  $('.main').on('keypress',function(e) {
  if(e.keyCode==32) {
    var audio= $('audio')[0];
    if(audio.paused) {
      audio.play();
      $('.clickable').removeClass('fa-play').addClass('fa-pause');
    } else {
      audio.pause();
      $('.clickable').removeClass('fa-pause').addClass('fa-play');
    }
  }
  });
});

$('.clickable').on('click', function (e) {
  var audio= $('audio')[0];
  if(audio.paused) {
    audio.play();
    $(this).removeClass('fa-play').addClass('fa-pause');
  } else {
    audio.pause();
    $(this).removeClass('fa-pause').addClass('fa-play');
  }
});
