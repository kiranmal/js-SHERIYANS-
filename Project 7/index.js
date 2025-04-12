var btn = document.querySelector('button');
var percent= document.querySelector('#percentage')
var growth = document.querySelector('#growth')
var grow =0;
btn.addEventListener('click',function(){
    var print=setInterval(function(){
        grow++;
        percent.innerHTML= grow+'%'
        growth.style.width = grow +'%'
    },50)
    setTimeout(function(){
        clearInterval(print)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity =.5
    },5000)
})