import React from 'react'

export default function Practice4() {
    const users = [
        {id: 1, name: "franz", age: 67},
        {id: 2, name: "asd", age: 69},
        {id: 3, name: "dwdwd", age: 68}
    ];
  return (
    <div>
        {users.map((user) => 
            <Greeting key={user.id} info={user}/>
        )}
    </div>
  )
}

function Greeting({info}){
    return(
    <h3>
        Hello {info.name}, {info.age} years old!
    </h3>)
    
}
