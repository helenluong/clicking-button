import React,  from 'react';

const index = () => {
    const [rgb, setRgb] = useState('')
    const changeColor = () => {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        setRgb(`${r},${g},${b}`)
    }

    return (
        <div>
            {/* create a button */}
            <button onClick={changeColor}>Change color</button>
            {/* change this button color */}
            <button
                style={
                    {
                        'backgroundColor': `rgb(${rgb})`,
                        'border': `1px solid rgb(${rgb})`,
                        'color': 'white'
                    }
                }
            >Change This</button>
        </div>
    );
};

export default index;