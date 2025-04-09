var arr =[{
    team:"GT",
    primaryColor:"yellow",
    boundary:"black",
},{
    team:"RRR",
    primaryColor:"red",
    boundary:"black"
},{
    team:"KKR",
    primaryColor:"voilet",
    boundary:"black"
},{
    team:"CSK",
    primaryColor:"yellow",
    boundary:"gold"
},{
    team:"PNB",
    primaryColor:"orange",
    boundary:"gold"
},{
    team:"SRH",
    primaryColor:"orange",
    boundary:"gold"
},{
    team:"MI",
    primaryColor:"blue",
    boundary:"black"
},{
    team:"DC",
    primaryColor:"blue",
    boundary:"black"
}];
var btn=document.querySelector('button');
var h5 = document.querySelector('h5');

btn.addEventListener('click',function(){
    var num = Math.floor(Math.random()*arr.length);
    var select = arr[num];
    h5.innerHTML=select.team;
    box.style.backgroundColor=select.primaryColor;
    box.style.color=select.boundary;
    box.style.border=`10px solid ${select.boundary}`;
    console.log(select.boundary);
})