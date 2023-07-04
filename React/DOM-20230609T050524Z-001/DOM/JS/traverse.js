
//! access parent tag of one element
function sample()
{
   let li2 = document.getElementById("li2");

   console.log( li2.parentElement );
   console.log( li2.parentNode );
}



//! access a childs of one parent
function sample()
{
  let  ul = document.getElementById("list");

    console.log( ul.childNodes );  
    console.log( ul.children );   
    console.log( ul.firstChild ) 
    console.log( ul.firstElementChild )
    console.log( ul.lastChild )
    console.log( ul.lastElementChild )
    console.log( ul .hasChildNodes() );
}

//! acces the sibling elements of a child 
function sample()
{
    let li2 = document.getElementById("li2");

    console.log( li2.nextSibling );
    console.log( li2.nextElementSibling );
    console.log( li2.previousSibling );
    console.log( li2.previousElementSibling );
}