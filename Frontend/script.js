$(".navT").on("click", function(){
    $(this).toggleClass("active");
    $("#menu").toggleClass("open");
    $(".content").toggleClass("shift");
    
    
  })

  window.onload = function(){
    document.getElementById("playsong").play();
  }