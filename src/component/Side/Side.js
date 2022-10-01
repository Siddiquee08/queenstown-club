import React, { useState } from 'react';
import './Side.css'

const Side = (props) => {
    const [ten, setTen] = useState([])

    const addTen = () => {
      setTen(10)  
    }
    const addTwenty = () => {
      setTen(20)  
    }
    const addThirty = () => {
      setTen(30)  
    }
    
    return (
        <div className='cart'>
            <div className='container'>
                 <div>
                 <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
           </div>
            <div className='profile-tag'>
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
                <button onClick={addTen}>10s</button>
                <button onClick={addTwenty}>20s</button>
                <button onClick={addThirty}>30s</button>

            </div>
            <div className='details'>
                <h4>Activity Details</h4>
                <p>Active Time: {props.side} </p>
                <p>Break Time: {ten} </p>
            </div>
            <button className='complete'>Activity Completed</button>
        </div>
    );
};

export default Side;