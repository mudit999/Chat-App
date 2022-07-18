import React from 'react';
import pic from "./../../assets/pictures/profile-pic.jpeg";
import "./UserCard.css";
import settingsIcon from "./../../assets/pictures/settingsIcon.png";
import chatIcon from "./../../assets/pictures/iconChat.png";

const UserCard = () => {
    const UserInfo = {
        name: "Mudit Garg",
        designation: "Software developer SDE1"
    }

    return(
        <div>
            <div className='quickChat'>
                <div><img src={chatIcon} className="chatIcon" alt="chatIcon"/></div>
                <div className='quickChatName'>QuickChat</div>
            </div>

            <div className='userCard'>
                <div>
                    <img src ={pic} alt="imgaeaegeg" className='personImage'/>
                </div>
                <div className='nameHeader'>
                <p className='name'>{UserInfo.name}</p>
                <img className='settingImage' src ={settingsIcon} alt="imgaeaegeg"/>
                </div>
                <p>
                    {UserInfo.designation}
                </p>
                <div >
                    <input type="checkbox" className="toggleBtn"/>
                    <label>Active</label>
                </div>
            </div>
        </div>
    )
}

export default UserCard;