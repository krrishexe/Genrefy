const img1 = document.querySelector('.img-1')
const img2 = document.querySelector('.img-2')
const img3 = document.querySelector('.img-3')
const img4 = document.querySelector('.img-4')
const img5 = document.querySelector('.img-5')

document.addEventListener('mousemove',(e)=>{
    img1.setAttribute(
        "Style",
        "top :"+ (e.pageY -255 )+ "px; left: " + (e.pageX - 200) +"px"
    );
    img2.setAttribute(
        "Style",
        "top :"+ (e.pageY -255 )+ "px; left: " + (e.pageX - 200) +"px"
    );
    img3.setAttribute(
        "Style",
        "top :"+ (e.pageY -255 )+ "px; left: " + (e.pageX - 200) +"px"
    );
    img4.setAttribute(
        "Style",
        "top :"+ (e.pageY -255 )+ "px; left: " + (e.pageX - 200) +"px"
    );
    img5.setAttribute(
        "Style",
        "top :"+ (e.pageY -255 )+ "px; left: " + (e.pageX - 200) +"px"
    );
})
