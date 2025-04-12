var elem= document.querySelectorAll(".elem");
// var photo=document.querySelector(".elem img");
elem.forEach(function(val){
    console.log(val.childNodes)
val.addEventListener("mousemove",function(dets){
val.childNodes[3].style.left=dets.x+"px";
// val.childNodes[3].style.top=dets.y+"px";
})
val.addEventListener("mouseenter",function(dets){
    val.childNodes[3].style.opacity=1;
})
val.addEventListener("mouseleave",function(dets){
    val.childNodes[3].style.opacity=0;
});
});