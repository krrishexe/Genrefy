$(".navT").on("click", function(){
    $(this).toggleClass("active");
    $("#menu").toggleClass("open");
    $(".content").toggleClass("shift");
    
    
  })

  window.onload = function(){
    document.getElementById("playsong").play();
  }

var audioTag = document.getElementById('audioTag');


function playBoy(url, id){
  audioTag.innerHTML = `<audio id="" controls="" autoplay="" name="media"><source src="${url}" type="audio/mpeg"></audio>`

  var idTag = document.getElementById(id);
  idTag.style.color = "white"
}








  function Func() {
    fetch("./json-cleaner.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);

      for(let song of data["results"].slice(0,100)){

    const arrColors = ["#0081C9","#5BC0F8","#86E5FF","#FFC93C","#FF7B54","#FF78F0","#C780FA","#FAD3E7","#ECECEC","#FF0032"]
    
    var colors = Math.floor(Math.random()*arrColors.length);

    var x = Math.random();
    var y = x*100;
    var z = y.toFixed(0);


    const arr = ["left","right"];
    var a = Math.floor(Math.random(0,100)*2);

        document.getElementById("songs").innerHTML += 
  
        `
        <div onclick = 'playBoy(\"${song.data.preview_url}\","${song.data.id}")'>
               <a id= "${song.data.id}" class="songName" style = " display:run-in; color:${arrColors[colors]} ;writing-mode: horizontal-lr;font-size:${z}px "> ${(song.text).slice(0,-2)} ▶
                

               </a> 
        </div>
        `;
      }
      

    }) 
  };
  
  Func();








  // ;float:${arr[a]}


// let http = new XMLHttpRequest();

// http.open('get',"./json-cleaner.json",true); // here true sets the keyword to be async

// http.send();
// http.onload = function (){
  
//   if(this.readyState == 4 && this.status == 200){

//     let songs = JSON.parse(this.responseText);
//     let output = "";


//     for(let song of songs){
//       output += `
      
//       <div class = "songs">


//       <p class="songName" style=${song.results.data.style}> ${song.results.text} </p>


//       </div>
//       `;
//       console.log(song.text);
//     }

//     document.querySelector(".songs").innerHTML = output;


//   }

