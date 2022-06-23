import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div>
             <ul>
                <li> 
                    <Link to="/">Home</Link>
        
                </li>
                <li>
                    <Link to="/mypage1">1st page</Link>
                </li>
                <li>
                    <Link to="/mypage2">2nd page</Link>
                </li>
            </ul>
        </div>
    );
};
       

export default index;
