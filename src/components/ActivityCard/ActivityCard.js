import React from 'react';
import "./ActivityCard.css";
import clockImage from "./../../assets/pictures/Clock.png";
import friendImage from "./../../assets/pictures/friends.png";
import calendarImage from "./../../assets/pictures/calendar.png";
import messageImage from "./../../assets/pictures/message.png";
import ActivityBar from './../ActivityBar/ActivityBar'

const ActivityCard = () => {
    return(
        <div className='activityCard'>
            <div className='mainContainer'>
                <div className='container'>
                    <div className="item">
                        <div><img src={clockImage} className='sidebarIcons' alt='clock' /></div>
                        <div>
                            <div className='boldText'>13h</div>
                            <div className='smallText'>Time</div>
                        </div>
                    </div>
                    <div className="item">
                        <div><img src={friendImage} className='sidebarIcons' alt='friend' /></div>
                        <div>
                            <div className='boldText'>188</div>
                            <div className='smallText'>Attended</div>
                        </div>
                    </div>
                    <div className="item">
                        <div><img src={calendarImage} className='sidebarIcons' alt='calendar' /></div>
                        <div>
                            <div className='boldText'>119</div>
                            <div className='smallText'>Meetings</div>
                        </div>
                    </div>
                    <div className="item">
                        <div><img src={messageImage} className='sidebarIcons' alt='message' /></div>
                        <div>
                            <div className='boldText'>41</div>
                            <div className='smallText'>Rejected</div>
                        </div>
                    </div>
                </div>

                <div className='container2'>
                    <div className='activityHeader'>
                        <div className='currentWeekText'>Current week</div>
                        <div className='activityText'>Activity</div>
                    </div>

                    <div className='heightBars'>
                        <div><div className='smallText'>MON</div><ActivityBar heightBar = "10px"/></div>
                        <div><div className='smallText'>TUE</div><ActivityBar heightBar = "90px"/></div>
                        <div><div className='smallText'>WED</div><ActivityBar heightBar = "40px"/></div>
                        <div><div className='smallText'>THU</div><ActivityBar heightBar = "30px"/></div>
                        <div><div className='smallText'>FRI</div><ActivityBar heightBar = "20px"/></div>
                        <div><div className='smallText'>SAT</div><ActivityBar heightBar = "10px"/></div>
                        <div><div className='smallText'>SUN</div><ActivityBar heightBar = "10px"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityCard;