
// setTimeout( ()=>{console.log("hello");} , 4000 )

// setInterval( ()=>{console.log("hello");} , 2000 )

// console.log( 10 );

// console.log( 20 );

// setTimeout( ()=>{console.log(30)} , 3000 );

// console.log(40);


// var laptop;

// //code to fetch the data from database

// setTimeout( ()=>{ 
//     //fetch the data
//     laptop = "dell"
//  } , 3000 )


// console.log( laptop );

function database()
{
    var laptop = undefined
    return laptop
}

var laptop;

let p = new Promise( (resolve,reject)=>{
    laptop = database();
    if(laptop != undefined)
    {
        resolve(laptop)
    }
    else
    {
        reject("data is not fetched!!!!!!")
    }
})

p
.then((x)=>{ console.log(x)})
.catch((y)=>{ console.log(y)}) 