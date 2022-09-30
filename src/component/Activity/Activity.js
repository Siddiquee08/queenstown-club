import React from 'react';
import '../Activity/Activity.css'

const Activity = (props) => {
    const {picture, time, min_age, name} = props.activity
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
        </div>
    );
};

export default Activity;