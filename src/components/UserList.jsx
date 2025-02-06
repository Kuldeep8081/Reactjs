//rafce

import React from 'react'

const UserList = () => {

    const user=[
        {id: 1, name: "Alice", age:25},
        {id: 2, name: "Bob", age:30},
        {id: 3, name: "Charlie", age:22},
    ]
  return (
    <div>
        {user.map((user)=>(
            <ul key={user.id}>
                <li>{user.name}</li>
                <li>{user.age}</li>
            </ul>
        ))}
    </div>
  )
}

export default UserList