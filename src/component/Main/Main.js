import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import '../Main/Main.css';
import Side from '../Side/Side';
const Main = () => {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        fetch('package.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className='main'>
            <div className='adventure'>
                {
                    activities.map(activity => <Activity key={activity.id}
                        activity={activity}>

                    </Activity>)
                }
            </div>
            <div>
            <Side></Side>
            </div>
        </div>
    );
};

export default Main;