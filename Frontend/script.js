$(".navT").on("click", function(){
    $(this).toggleClass("active");
    $("#menu").toggleClass("open");
    $(".content").toggleClass("shift");
    
    
  })

  window.onload = function(){
    document.getElementById("playsong").play();
  }


let http = new XMLHttpRequest();

http.open('get',"./json-cleaner.json",true); // here true sets the keyword to be async

http.send();
http.onload = function (){
  
  if(this.readyState == 4 && this.status == 200){

    let songs = JSON.parse(this.responseText);
    let output = "";


    for(let song of songs){
      output += `
      
      <div class = "songs">


      <p class="songName" style=${song.results.data.style}> ${song.results.text} </p>


      </div>
      `;
      console.log(song.text);
    }

    document.querySelector(".songs").innerHTML = output;


  }

}