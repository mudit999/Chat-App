import React from 'react';
import "./OnBoardClients.css";
import telegram from "./../../assets/pictures/telegram.png"
import hyperlink from "./../../assets/pictures/hyperlink.png"

const OnBoardClients = () => {

    return(
        <div className='OnBoardClients'>
            <img src={telegram} alt="telegram" className='telegram'/>
            <div className='boldText'>Onboard Clients</div>
            <div className='textCenter'>Share the links with prospects and discuss all stuff</div>
            <div className='linkBtn'>
                <div>Copy Link</div>
                <img className='telegram' src={hyperlink} alt="copy link"/>
            </div>
        </div>
    )
}

export default OnBoardClients;