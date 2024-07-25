import React from 'react'

const UserList = () => {

    let data = [
        {
            name : "sai",
            email : "sai@gmail.com",
        },
        {
            name : "nithin",
            email : "nithin@gmail.com",
        },
        {
            name : "ramu",
            email : "ramu@gmail.com",
        },
        {
            name : "rakesh",
            email : "rakesh@gmail.com",
        },
        
    ];

  return (
    <div>
    {data.map(({name,email})=>(
       <div>
           <h1>{name}</h1>
           <h1>{email}</h1>
       </div> 
    ))
    }
    </div>
  )
}

export default UserList;