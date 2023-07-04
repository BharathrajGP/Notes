// read (save) a single tags by using ID

// function sample()
// {

//     let input  = document.getElementById("inp"); 

//     let head = document.getElementById("head1");

//     console.log(head);

//     console.log(input);
// }

//!  read (save) a multiple tags by using class name 
//! we can read same or different type of tags
// function sample()
// {
//     let tags = document.getElementsByClassName("cls1");

//     console.log( tags );
// }


//!  read (save) a multiple tags by using tag name 
//! we can read only same type of tags
// function sample()
// {
//     let h1Tags = document.getElementsByTagName("h1");

//     console.log( h1Tags );
// }

//! read mutiple inputs tags (options)

function sample()
{
    let genders = document.getElementsByName("gender");
    
    for (let i = 0; i < genders.length; i++) 
    {
        if( genders[i].checked )
        {
            console.log(genders[i].value);
        }
    }

}

