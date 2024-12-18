import './Chat.scss'
import {useState} from "react";

function Chat() {
    const [chat, setChat] = useState(true);

    return (
        <div className='chat'>
            <div className='messages'>
                <h1>Messages</h1>
                <div className='message'>
                    <img src='/user.png' alt=''/>
                    <span>John Doe</span>
                    <p>
                        Lorem Ipsum is simply...
                    </p>
                </div>
                <div className='message'>
                    <img src='/user.png' alt=''/>
                    <span>John Doe</span>
                    <p>
                        Lorem Ipsum is simply...
                    </p>
                </div>
                <div className='message'>
                    <img src='/user.png' alt=''/>
                    <span>John Doe</span>
                    <p>
                        Lorem Ipsum is simply...
                    </p>
                </div>
                <div className='message'>
                    <img src='/user.png' alt=''/>
                    <span>John Doe</span>
                    <p>
                        Lorem Ipsum is simply...
                    </p>
                </div>
                <div className='message'>
                    <img src='/user.png' alt=''/>
                    <span>John Doe</span>
                    <p>
                        Lorem Ipsum is simply...
                    </p>
                </div>
                <div className='message'>
                    <img src='/user.png' alt=''/>
                    <span>John Doe</span>
                    <p>
                        Lorem Ipsum is simply...
                    </p>
                </div>
                <div className='message'>
                    <img src='/user.png' alt=''/>
                    <span>John Doe</span>
                    <p>
                        Lorem Ipsum is simply...
                    </p>
                </div>
            </div>

            {chat && (
                <div className='chatBox'>
                    <div className='top'>
                        <div className='user'>
                            <img src='/user.png' alt=''/>
                            John Doe
                        </div>
                    <span onClick={() => setChat(null)} className='close'>X</span>
                </div>

                <div className='center'>
                    <div className='chatMessage'>
                        <p>Lorem lorem lorem</p>
                        <span>10 hour ago</span>
                    </div>
                    <div className='chatMessage own'>
                        <p>Lorem lorem lorem</p>
                        <span>10 hour ago</span>
                    </div>
                    <div className='chatMessage'>
                        <p>Lorem lorem lorem</p>
                        <span>10 hour ago</span>
                    </div>
                    <div className='chatMessage own'>
                        <p>Lorem lorem lorem</p>
                        <span>10 hour ago</span>
                    </div>
                    <div className='chatMessage'>
                        <p>Lorem lorem lorem</p>
                        <span>10 hour ago</span>
                    </div>
                    <div className='chatMessage own'>
                        <p>Lorem lorem lorem</p>
                        <span>10 hour ago</span>
                    </div>
                    <div className='chatMessage'>
                        <p>Lorem lorem lorem</p>
                        <span>10 hour ago</span>
                    </div>
                    <div className='chatMessage own'>
                        <p>Lorem lorem lorem</p>
                        <span>10 hour ago</span>
                    </div>
                </div>

                <div className='bottom'>
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>
            )}
        </div>
    );
}

export default Chat;