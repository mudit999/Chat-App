import React,{useState} from 'react';
import "./ChatSpace.css";

const ChatSpace = () => {

    const [message,setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

    const sendMessage = (e) => {
        setMessage(e.target.value);
    }
    
    const submitMessage = (e) => {
        e.preventDefault();

        // for persist message
        localStorage.setItem('chat',`${message}`);

        // add this item to messageList
        const newElement = {sms: `${message}`};
        setMessageList([...messageList, newElement]);
        setMessage(localStorage.getItem('chat'));
    }

    return(
        <div className='ChatSpace'>
            <div className='chatHistory'>
                {messageList.map((item, index) => {
                    return(<div className='chatItem' key={index}>{item.sms}</div>)
                })}
            </div>
            
            <div className='chatInputSection'>
                <div className='chatInputSubmit'>
                    <input type="text" value={message} onChange={(e) => sendMessage(e)}/>
                    <div className='chatSendBtn' onClick={(e) => {submitMessage(e)}}>Send</div>
                </div>
            </div>
        </div>
    )
}

export default ChatSpace;