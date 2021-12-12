import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import User from './Component/User/User';
import Post from './Component/Post/Post';





function App() {
    const[page,setPage]= useState('User');
      
  return (
    <div className="App">


           <Navbar setPage={setPage}></Navbar>
           {
             page==="User"?<User></User>: <Post></Post>
           }
    </div>
  );
}

export default App;
