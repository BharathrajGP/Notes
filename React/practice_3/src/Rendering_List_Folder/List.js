import React from 'react'
import Person from "./Person"

function List() {
    const persons=[
{
    id:1,
    name:'Bharath',
    age:24,
    skill:"JAVA"
},
{
    id:2,
    name:'Arun',
    age:24,
    skill:"SQL" 
},
{
    id:3,
    name:'Kiran',
    age:24,
    skill:"Web"
}]
// const lists= persons.map(person => 
//     <h2>{person.name},{person.age},{person.skill}</h2>)

const lists= persons.map(person => 
    <Person key={person.id} person={person}></Person>)

  return (
    <div>
      {
        lists
      }
    </div>
  )
}

export default List
