import React from 'react';
import '../Activity/Activity.css'

const Activity = (props) => {
    const{addToSide} = props
    const { picture, time, min_age, name} = props.activity
    return (
        <div className='activity-container'>
            <div>
                <img src={picture} alt="" />
            </div>
            <div>
            <h4>Activity Name: {name}</h4>
            <p>Time: {time} Minutes</p>
            <p>Minimum Age: {min_age} Years</p>
            </div>
            <button className='btn' onClick={() => addToSide(props.activity.time)}>Add to List</button>
        </div>
    );
};

export default Activity;