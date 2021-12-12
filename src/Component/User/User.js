import React, { useEffect, useState } from 'react';

const User = () => {

      const [user,setUser] =useState();

      useEffect(() => {
        fetch('https://gorest.co.in/public/v1/users')
        .then(response => response.json())
        .then(data => setUser(data));
        
      },[])

         console.log(user);
    return (
        <div>
              <h1>usera</h1>
        {
             user?.data?.map((person,i) => <p key={i}>{person.name}</p>  )
        }

        </div>
    );
};

export default User;