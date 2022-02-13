import React from 'react';
import LeftSide from './LeftSide';
import MiddleSide from './MiddleSide';
import RightSide from './RightSide';
import './Home.css'
const Home = () => {
    const hideLeftSide = () => {
        const leftSide = document.querySelector('.leftSide')
        const middleSide = document.querySelector('.middleSide')

        leftSide.classList.toggle('toggleLeftSide')
        middleSide.classList.toggle('toggMiddleSide')
    }
    return (
        <div>
            <div className="d-flex">
                <div className="leftSide">
                    <LeftSide hideLeftSide={hideLeftSide}/>
                </div>
                <div className="middleSide">
                    <MiddleSide/>
                </div>
                <div className="rightSide">
                    <RightSide/>
                </div>
            </div>
        </div>
    );
};

export default Home;