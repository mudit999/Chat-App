import React from 'react';
import "./ActivityBar.css";

const ActivityBar = ({heightBar}) => {
    return(
        <div>
            <div style={{
                    "height": heightBar,
                    "width": "5px",
                    "border": "0.5px solid black",
                    "borderRadius": "3px",
                    "marginBottom": "3px"
            }}></div>

            <div className='activityDot'></div>
        </div>
    )
}

export default ActivityBar;