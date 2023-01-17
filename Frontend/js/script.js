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
        var x = Math.random();
        var y = x*100;
        var z = y.toFixed(0);

        document.getElementById("songs").innerHTML += 
  
        `
  
               <div id= "${song.data.id}" class="songName" style = "font-size:${z}px" > ${song.text} 
                
               <div onclick = 'playBoy(\"${song.data.preview_url}\","${song.data.id}")'>play</div>
                ${z}
               </div>
         
        `;
      }
      

    }) 
  };
  
  Func();











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

