
import MyNavbar from './NavBar'
import React, { useState } from 'react';

const Index = () => {

  const [name, setName] = useState('Helen') //string
  
  function HandleSubmit(e) {
    e.targetValue();
    console.log('You clicked submit.');
  }

  const test = (e) => {
    console.log("object");
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.value);
    setName(e.target.value)
  }

  const [count, setCount] = useState(0)
  const setValue = () => {
    console.log("Set");
    setCount(1111)
    // set value for Count
  }
  

  // multiple topic
  // multiple topic
  // multiple topic
  const [mul, setMul] = useState(0)
  const [numA, setNumA] = useState(0) //number
  const [numB, setNumB] = useState(0)
  const [numResult, setNumResult] = useState (0)

  //numA NumberA
  function getNumberA(e) {
    // e.target.value();
    console.log(e.target.value)
    console.log('e.target.value', e.target.value);
    setNumA(e.target.value)
  }

  function getNumberB(e) {
    // clg
    console.log(e.target.value)
    console.log('e.target.value', e.target.value);
    setNumB(e.target.value)
  }

  function HandleClickMul(e) {
    console.log(e.target);
    console.log(numA*numB);
    setNumResult(numA*numB);
  }

  // ctrl + c
  // ctrl + f
  // ctrl + v

  return (
    <div>
      Helen's page
      <MyNavbar />


      <div className="">
        <h3>Type your name:</h3>
        <input onSubmit={HandleSubmit} type="text" />
        <button onSubmit={HandleSubmit}>CLICK TO SEE CHANGE</button>
        <h3>Your name is: {name}</h3>
      </div>


      <hr />
      <div className="container">
        <h1 className='text-warning'>Counting</h1>
        <hr className='text-danger' />
        <h2>MULTIPLICATION</h2>
        <hr className='text-danger' />
        <input onChange={getNumberA} type="number" />
        <input onChange={getNumberB} type="number" />
        <div className="d-flex">
          <button onClick={setValue} className='btn btn-warning'>SET VALUE TO 111</button>
          <br />
        
        <h3>Number A is: {numA}</h3>
        <h3>Number B is: {numB}</h3>
        <button onClick={HandleClickMul}>=</button>
        {/* chua 1 kq ex: result */}
        <h3>Number C is: {numResult}</h3>
        
  
          {/* click button -
                        onClick={decrement} will be executed

                        function decrement() {
                            console.log("Test decrement"); <============ PRINT IN CONSOLE
                            setCount(111) <========== // set value for Count = 111
                            
                        }

                        Upon the time, COUNT  is changed value.  */}

         

          <h3>{count}</h3>

        </div>
      </div>
    </div>


  );
};

export default Index;
