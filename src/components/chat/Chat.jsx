import './Chat.scss'

function Chat() {
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
            </div>

            <div className='chatBox'>Box</div>
        </div>
    );
}

export default Chat;