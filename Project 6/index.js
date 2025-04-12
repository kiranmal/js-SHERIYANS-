var btn= document.querySelector("button");
var h5 = document.querySelector("h5");
// var h3 = document.querySelector("h3");
var flag = 0;

btn.addEventListener('click',function(){
    if(flag == 0){
    h5.innerHTML='Request sending...'
    h5.style.color='yellow'
    btn.innerHTML= 'Adding...'
    setTimeout(function(){
        h5.innerHTML='Friends'
        h5.style.color = 'green'
        btn.innerHTML='Remove Friends';
        flag = 1
    },3000)
}else{
    h5.innerHTML='Stranger...'
    h5.style.color= 'red'
    btn.innerHTML='Add Friend'
    flag =0
}
})

var a=0;
setInterval(function(){
    a++
    console.log('value of a is',a);
},1000)