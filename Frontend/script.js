$(".navT").on("click", function(){
    $(this).toggleClass("active");
    $("#menu").toggleClass("open");
    $(".content").toggleClass("shift");
    
    
  })

  window.onload = function(){
    document.getElementById("playsong").play();
  }



  function Func() {
    fetch("./json-cleaner.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);

      for(let song of data["results"].slice(0,100)){

        document.getElementById("songs").innerHTML += 
  
        `
  
               <div class="songName" style = "${song.data.style}" onclick = ${song.data.onclick} > ${song.text} </div>
         
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

