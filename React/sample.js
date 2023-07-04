

function fetchCode()
{
   fetch("https://dog.ceo/api/breeds/image/random")
   .then(res=>res.json())
   .then((data)=>{

    let imgTag = document.getElementById("dog");
    imgTag.setAttribute("src" , data.message );
    
})

}
fetchCode();

