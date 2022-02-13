import React from 'react';
import { Link } from 'react-router-dom';

const RightSide = () => {
    return (
        <div>
            <ul>
                <li><Link to="/home">Abcd</Link></li>
                <li><Link to="/home">Abcd</Link></li>
                <li><Link to="/home">Abcd</Link></li>
                <li><Link to="/home">Abcd</Link></li>
            </ul>
        </div>
    );
};

export default RightSide;