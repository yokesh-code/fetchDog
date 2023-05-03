let btn=document.getElementById("btn")
let img=document.getElementById("img")

btn.addEventListener("click",function(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=>res.json())
    .then(result=>{
        console.log(result)
        img.src=result.message
    })
    .catch(err=>{
        console.log(err)
    })
})