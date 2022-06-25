
import MyNavbar from './NavBar'
import React, { useState } from 'react';

const Index = () => {
  

  
    function HandleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
      }
  const [name, setName] = useState('Helen')

  
      const test = (e) => {
        console.log("object");
        // console.log(e);
        // console.log(e.target);
        console.log(e.target.value);
        setName(e.target.value)
      }
    return (
        <div>
          Helen's page  
          <MyNavbar/>
       
          

                <div className="">
                    <h3>Type your name:</h3>
                    <input onSubmit={HandleSubmit} type="text" />
                    <button onSubmit={HandleSubmit}>CLICK TO SEE CHANGE</button> 
                    <h3>Your name is: {name}</h3>
                </div>
        </div>
        
    );
};

export default Index;
