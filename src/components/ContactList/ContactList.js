import React, { useState } from 'react';
import "./ContactList.css";

const ContactList = ({list,setSelectedId}) => {

    const [isActiveToggleOn,setIsActiveToggleOn] = useState(true);
    const [isArchivedToggleOn,setIsArchivedToggleOn] = useState(false);



    const activeContactList = list.filter(function(ele){
        return ele.isActive === true;
    })

    const archivedContactList = list.filter(function(ele){
        return ele.isArchived === true;
    })

    const showActiveChats = () => {
        setIsArchivedToggleOn(false);
        setIsActiveToggleOn(true);
    }

    const showArchivedChats = () => {
        setIsActiveToggleOn(false);
        setIsArchivedToggleOn(true);
    }

    const handleClick = (id) => {
        setSelectedId(id);
    }

    return (
        <div>
            <div className='activeArchive' onClick={showActiveChats}>
                <div>Active Conversations</div>
                <div className='toggleBtn'>^</div>
            </div>

            { isActiveToggleOn && activeContactList.map((item) => {
                return(
                    <div key={item.email} id='listdiv' onClick={() => handleClick(item.id)}>
                        <div>
                            <img src={item.profilePic} alt={item.name} className="listProfilePhoto"/>
                        </div>
                        <div>{item.name}</div>
                    </div>
                )
            })}

            <div className='activeArchive' onClick={showArchivedChats}>
                <div>Archived Conversations</div>
                <div className='toggleBtn' >^</div>
            </div>

            { isArchivedToggleOn && archivedContactList.map((item) => {
                return(
                    <div key={item.email} id='listdiv' onClick={() => handleClick(item.id)}>
                        <div>
                            <img src={item.profilePic} alt={item.name} className="listProfilePhoto"/>
                        </div>
                        <div>{item.name}</div>
                    </div>
                )
            })}


        </div>
    )
}

export default ContactList;