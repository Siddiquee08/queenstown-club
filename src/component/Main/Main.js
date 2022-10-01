import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import '../Main/Main.css';
import Side from '../Side/Side';

const Main = () => {
    const [activities, setActivities] = useState([])
    const [side, setSide] = useState([])
    
    useEffect(() => {
        fetch('package.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const addToSide = (activity) => {
        setSide(activity)
    }

    return (
        <div className='main'>
            <div className='adventure'>
                {
                    activities.map(activity => <Activity key ={activity.id}
                        activity={activity}
                    addToSide = {addToSide}
                    >

                    </Activity>)
                }
            </div>
            <div className='side'>
            <Side side = {side}></Side>
            </div>
        </div>
    );
};

export default Main;