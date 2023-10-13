import React from 'react';
import UserCard from './Details'; // Assuming the UserCard component is in the same directory

import { useEffect,useState } from 'react';

const Account = () => {
    const [loggedUser, setLoggedUser] = useState('');
    const user = {
        "firstname": loggedUser.firstname,
        "lastname": loggedUser.lastname,
        "password": loggedUser.password,
        "mobile": loggedUser.password,
        "email": loggedUser.email
      };
   
    useEffect(() => {
        const temp = localStorage.getItem('loggedUser');
        setLoggedUser(JSON.parse(temp)); // Set the loggedUser state with the value from localStorage
        console.log(temp);
    }, []); // Empty dependency array ensures useEffect runs once after initial render
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginLeft:80}}>
      <UserCard user={loggedUser} />
    </div>
  );
};

export default Account;
