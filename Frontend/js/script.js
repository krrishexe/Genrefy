// NAVBAR CLASS CHANGING USING JQUERY

$(".navT").on("click", function () {
  $(this).toggleClass("active");
  $("#menu").toggleClass("open");
  $(".content").toggleClass("shift");
})


// SCROLL TO TOP bUTTON USING JQUERY

$(document).ready(function () {
  'use strict';
  $('button').on('click', function () {
    $('html').animate({
      scrollTop: 0
    }, 1000);
  });
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 600) {
      $('button').fadeIn();
    } else {
      $('button').fadeOut();
    }
  });
});

// ADUIO TAG POSITIONING USING JQUERY

var initTopPosition = $('#audioTag').offset().top;
$(window).scroll(function () {
  if ($(window).scrollTop() > initTopPosition)
    $('#audioTag').css({ 'position': 'fixed', 'top': '0px' });
  else
    $('#audioTag').css({ 'position': 'absolute', 'top': initTopPosition + 'px' });
});

// PLAYING THE SONG ON WINDOW LOAD

window.onload = function () {
  document.getElementById("playsong").play();
}

//  playing the song onclick

var audioTag = document.getElementById('audioTag');
function playBoy(url, id) {
  audioTag.innerHTML = `<audio id="innerAudio" controls="" autoplay="" name="media"><source src="${url}" type="audio/mpeg"></audio>`
  var idTag = document.getElementById(id);
  idTag.style.color = "white"
}

// SHUFFLING THE ARRAY SO THAT WE GET DIFFERENT 100 ITEMS EVERYTIME THE SCREEN LOAD.

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

window.addEventListener('scroll',()=>{

  const {scrollTop,scrollHeight,clientHeight } = document.documentElement;
  console.log({scrollTop,scrollHeight,clientHeight});

  if(clientHeight + scrollTop >= scrollHeight - 200){
    console.log("to the bottom");
    // show the loading animation once 
    showLoading();
  }

})

  // getting the loader class and adding the show class to it.
  const loading = document.querySelector('.loading')
  function showLoading(){
    // animation visible 
    loading.classList.add('show');
    // loading more data once it reaches to the bottom
    setTimeout(() => {
      
      Func();
    }, 1000);

  }




function Func() {
  fetch("../json-cleaner.json")       // http://localhost:3000/api , {mode:'no-cors}
    .then((res) => {
      // console.log(res.json());
      return res.json();
    })
    .then((data) => {
      console.log(data);
      var songs = data["results"];
      shuffle(songs)
      for (let song of songs.slice(0, 100)) {
        const arrColors = ["#0081C9", "#5BC0F8", "#86E5FF", "#ffe53c", "#FF7B54", "#FF78F0", "#C780FA", "#B05A7A", "#E0144C", "#BFDB38", "#B9F3FC", "#FEDEFF", "#B05A7A", "#9DF1DF", "#FCFFE7"]
        const arrFonts = ['Aboreto', 'Explora', 'Unbounded', 'Libre Baskerville', 'Dancing Script', 'Indie Flower', 'Bebas Neue',]
        var colors = Math.floor(Math.random() * arrColors.length);
        var x = Math.random();
        var y = x * 60;
        var z = Number(y.toFixed(0)) + Number(10);
        console.log(z);
        var idname = `${song.data.id}`
        var idname1 = idname.slice(4)
        const arr = ["left", "right"];
        var a;
        if (((idname1) % 2) == 0) {
          a = 0;
        } else {
          a = 1
        }
        var p = Math.random();
        var q = p * 3;

        var r = Math.random();
        var s = r * 3;


        document.getElementById("songs").innerHTML +=

          `
      <div onclick = 'playBoy(\"${song.data.preview_url}\","${song.data.id}")'>
             <a id= "${song.data.id}" class="songName" style = "padding-left:${q}em; padding-right:${s}em; display:block; font-family:${arrFonts[colors]}; color:${arrColors[colors]} ;writing-mode: horizontal-lr;font-size:${z}px ;float:${arr[a]}"> ${(song.text).slice(0, -2)} ▶
             </a> 
      </div>
      `;
      }
      loading.classList.remove('show');
    })
};

Func();
