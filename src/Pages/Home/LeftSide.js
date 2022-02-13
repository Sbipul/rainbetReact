import React from 'react';
import { Link } from 'react-router-dom';

const LeftSide = (props) => {
    return (
        <div>
            <button onClick={props.hideLeftSide}>Hide</button>
            <ul>
                <li><Link to="/home">Abcd</Link></li>
                <li><Link to="/home">Abcd</Link></li>
                <li><Link to="/home">Abcd</Link></li>
                <li><Link to="/home">Abcd</Link></li>
            </ul>
        </div>
    );
};

export default LeftSide;