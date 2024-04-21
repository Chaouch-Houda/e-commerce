import React, { useState } from 'react';
import './Chatbot.css';
import chatboxIcon from './images/chatbox-icon.svg';

const Chatbox = () => {
    const [state, setState] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const toggleState = () => {
        setState(!state);
    }

    const onSendButton = () => {
        if (inputValue === "") {
            return;
        }

        let msg1 = { name: "User", message: inputValue };
        setMessages([...messages, msg1]);

        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({ message: inputValue }),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
        })
        .then(r => r.json())
        .then(r => {
            let msg2 = { name: "Houda", message: r.answer };
            setMessages(prevMessages => [...prevMessages, msg2]);
            setInputValue('');
        }).catch((error) => {
            console.error('Error:', error);
            setInputValue('');
        });
    }

    const handleKeyUp = (event) => {
        if (event.key === "Enter") {
            onSendButton();
        }
    }

    return (
        <div className="chat-container">
            <div className="chatbox">
                <div className={`chatbox__support ${state ? 'chatbox--active' : ''}`}>
                    <div className="chatbox__header">
                        <div className="chatbox__image--header">
                            <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image" />
                        </div>
                        <div className="chatbox__content--header">
                            <h4 className="chatbox__heading--header">Chat support</h4>
                            <p className="chatbox__description--header">Hi. My name is Houda. How can I help you?</p>
                        </div>
                    </div>
                    <div className="chatbox__messages">
                        {[...messages].reverse().map((msg, index) => (
                            <div key={index} className={`messages__item ${msg.name === 'Houda' ? 'messages__item--visitor' : 'messages__item--operator'}`}>
                                {msg.message}
                            </div>
                        ))}
                    </div>
                    <div className="chatbox__footer">
                        <input type="text" placeholder="Write a message..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyUp={handleKeyUp} />
                        <button className="chatbox__send--footer send__button" onClick={onSendButton}>Send</button>
                    </div>
                </div>
                <div className="chatbox__button">
                    <button onClick={toggleState}><img src={chatboxIcon} /></button>
                </div>
            </div>
        </div>
    );
}

export default Chatbox;
