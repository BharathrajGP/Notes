/*
foreach
map
filter
reduce
sort
find
findIndex
some
every
flat
*/

//! for each method
// var a = [10,23,20,33,30,40,50];

// let odd = 0;
// let even = 0;


// var result = a.forEach((v)=>{ v%2==0 ? even++ : odd++ })

// console.log(even);
// console.log(odd);
// console.log(result);


//! map method : map is use to create new array 

// create a new array by mutiplying 10 to all values
// var a = [1,2,3,4,5];

// let result = a.map( (v,i,a)=>{ return v*10 } )
// OR 
// let result = a.map( v=> v*10 )

// console.log(result);

 
// var emplyoees = [ 
//                     {name:"dinga" , salary : 1000 } ,
//                     {name:"manga" , salary : 1000 } ,
//                     {name:"mangi" , salary : 1000 } ,
//                     {name:"gunda" , salary : 1000 } ,
//                     {name:"gundi" , salary : 1000 } ,
//                     {name:"dingi" , salary : 1000 } ,]

//  var output = emplyoees.map((v)=>{ return(v.name); })
//  console.log(output);


//! filter method : it take out few values and creates new array

// create a new array of only even values;
// var a = [12 , 19 , 24 , 56 , 23 , 90 , 56 , 78];

// var even = a.filter((v)=>{return v%2==0})

// //OR

// var even = [];
// for (let i=0,j=0; i < a.length; i++) 
// {
//     if(a[i]%2==0)
//     {
//         even[j] = a[i];
//         j++;
//     }
// }

// console.log(even);


var movies = [
                {name:"charlie" , hero :"rakshith" , rating : 9.2} ,
                {name:"pathan" , hero :"sharulh" , rating : 8} ,
                {name:"the kgf" , hero :"yash" , rating : 9.9} ,
                {name:"vk" , hero :"sudeep" , rating : 7} ,
                {name:"kgf2" , hero :"yash" , rating : 8.5} ,
                {name:"kantara" , hero :"rishab" , rating : 9} ,
                {name:"yuvarathna" , hero :"puneeth rajkumar" , rating : 10} ,
                {name:"charlie 2" , hero :"rakshith" , rating : 7.8} ,
                {name:"vikram" , hero :"kamla hassan" , rating : 9} ,
            ]

// search for movie starts with k

let search = movies.filter((movie)=>{ return movie.name.startsWith("k")});


console.log(search);