import React from 'react';
import './Side.css'

const Side = () => {
    const clickToMagic = () => {
        console.log('voila')
    }
    return (
        <div className='cart'>
            <div className='container'>
                 <div>
                 <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
           </div>
            <div>
                <h2 className='heading'>Tashrif Siddiquee</h2>
                <p>23/A, Dilu Road, Dhaka</p>
            </div>
           </div>
            <div className='info'>
                <p>Weight: 80 kg</p>
                <p>Height: 182 cm</p>
                <p>Age: 25 Years</p>
            </div>
            <h4>Add a Break</h4>
            <div className='break'>
                <button onClick = {clickToMagic}>10s</button>
                <button onClick={clickToMagic}>20s</button>
                <button onClick={clickToMagic}>30s</button>

            </div>
            <div className='details'>
                <h4>Activity Details</h4>
                <p>Active Time: </p>
                <p>Break Time: </p>
            </div>
            <button className='complete'>Activity Completed</button>
        </div>
    );
};

export default Side;