$(".navT").on("click", function () {
  $(this).toggleClass("active");
  $("#menu").toggleClass("open");
  $(".content").toggleClass("shift");
})

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



window.onload = function () {
  document.getElementById("playsong").play();
}

var audioTag = document.getElementById('audioTag');
function playBoy(url, id) {
  audioTag.innerHTML = `<audio id="" controls="" autoplay="" name="media"><source src="${url}" type="audio/mpeg"></audio>`
  var idTag = document.getElementById(id);
  idTag.style.color = "white"
}


function Func() {
  fetch("../json-cleaner.json")       // http://localhost:3000/api , {mode:'no-cors}
    .then((res) => {
      // console.log(res.json());
      return res.json();
    })
    .then((data) => {
      console.log(data);
      for (let song of data["results"].slice(0, 100)) {
        const arrColors = ["#0081C9", "#5BC0F8", "#86E5FF", "#FFC93C", "#FF7B54", "#FF78F0", "#C780FA", "#FAD3E7", "#ECECEC", "#FF0032"]
        const arrFonts = ['Aboreto', 'Explora', 'Unbounded', 'Libre Baskerville', 'Dancing Script', 'Indie Flower', 'Bebas Neue',]
        var colors = Math.floor(Math.random() * arrColors.length);
        var x = Math.random();
        var y = x * 100;
        var z = y.toFixed(0);
        var idname = `${song.data.id}`
        var idname1 = idname.slice(4)
        const arr = ["left", "right"];
        var a;
        if (((idname1) % 2) == 0) {
          a = 0;
        } else {
          a = 1
        }
        document.getElementById("songs").innerHTML +=

          `
      <div onclick = 'playBoy(\"${song.data.preview_url}\","${song.data.id}")'>
             <a id= "${song.data.id}" class="songName" style = "width:100%; display:grid; font-family:${arrFonts[colors]}; color:${arrColors[colors]} ;writing-mode: horizontal-lr;font-size:${z}px ;float:${arr[a]}"> ${(song.text).slice(0, -2)} ▶
             </a> 
      </div>
      `;
      }

    })
};

Func();
