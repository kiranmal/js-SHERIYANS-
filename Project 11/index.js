var arr=[
    {
    dp:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww",
    story:"https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzfGVufDB8fDB8fHww"
},
{
    dp:"https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWxzfGVufDB8fDB8fHww",
    story:"https://images.unsplash.com/photo-1741851374674-e4b7e573a9e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
},
{
    dp:"https://images.unsplash.com/photo-1567777301743-3b7ef158aadf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    story:"https://images.unsplash.com/photo-1556347961-f9521a88cb8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"
},
{
    dp:"https://media.istockphoto.com/id/577660066/photo/3d-illustration-of-blank-white-billboard-against-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=Oyz1sIpHallHHBf_3_x5KMTxuQUrdYrYt617YGhixrg=",
    story:"https://media.istockphoto.com/id/2152439466/photo/natural-hair-care-portrait-of-young-woman-in-exotic-tropical-foliage.webp?a=1&b=1&s=612x612&w=0&k=20&c=7dBHad_5xYfgueHV4PY8QIXFr7WFSdExWPQfTrtaHXM="
},
{
    dp:"https://www.istockphoto.com/search/2/image?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fmodels&utm_medium=affiliate&utm_source=unsplash&utm_term=models%3A%3A%3A&alloweduse=availableforalluses&excludenudity=true&mediatype=photography&phrase=models&sort=best",
    story:"https://media.istockphoto.com/id/2191824554/photo/portrait-beautiful-young-woman-with-clean-fresh-skin-stock-photo-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=JqPdJRAtRS2Ss5yD-ncX_YfPYd9dZhYF-3vrmOrsMeM="
}]
var storiyans=document.querySelector("#storiyans");
var clutter =""
arr.forEach(function(elem,idx){
    clutter += `
    <div id='story'>
    <img id="${idx}"src="${elem.dp}" alt="">
    </div>
    `
})
storiyans.innerHTML = clutter;
storiyans.addEventListener("click",function(dets){
    // console.log(arr[dets.target.id])
    //golden value=arr[dets.target.id].story
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`
    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none";
    },3000)
});