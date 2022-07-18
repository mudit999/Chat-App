import React from 'react';
import emailImage from "./../../assets/pictures/email.png";
import personImage from "./../../assets/pictures/person.png";
import archiveImage from "./../../assets/pictures/archive.png";

import "./ContactCard.css";

const ContactCard = ({selectedPerson}) => {
        const [{name, profilePic, email}] = selectedPerson;

    return(
        <div className='contactCard'>
            <div><img src ={profilePic} alt="person img" className='personImage'/></div>
            <div className='nameH'>
                <div className='headingPart1'><img src = {emailImage} className="imageStyle" alt='email'/><p>{email}</p></div>
                <div className='headingPart1'><img src = {personImage} className="imageStyle" alt='name'/><p>{name}</p></div>
            </div>
            <div className='headingArchive'>
                <div className="">Archive</div>
                <img src = {archiveImage} className="imageStyle" alt='archive'/>
            </div>
        </div>
    )
}

export default ContactCard;