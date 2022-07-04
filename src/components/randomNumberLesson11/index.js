import React, { useState } from 'react';

const Index = () => {
    // initialize
    const [rgbBg, setRgbBg] = useState('0,0,255')
  const [rgbText, setRgbText] = useState ('0,0,0')

    const changeColorBg = () => {
        console.log("first")
        setRgbBg('0,0,0')
    }

    const changeColorText = () => {
        console.log('changeColor');
        setRgbText('255,0,0')
    }
    return (
        <div>
            This is randomNumber mock

            {/* <button>Random color</button> */}
            <hr className='text-warning' />
            <button
                onClick={changeColorBg}


                className='btn btn-primary'>BACKGROUND color</button>

            {/* button{
                 background-color: rgb('255,0,0')
             } */}

            <button
            onClick={changeColorText}
            
            >TEXT color</button>
            {/* red green blue */}
            <h1
                // `${}` 
                style={{
                    'color': `rgb(${rgbText})`,
                    'backgroundColor': `rgb(${rgbBg})`,
                    
                    
                }}>
                Stlye for this one by internal CSS</h1>
        </div>
    );
};

export default Index;