import './profilePage.scss'
import Chat from "../../components/chat/Chat.jsx";
import List from "../../components/list/List.jsx";

function ProfilePage() {

    return (
        <div className='profilePage'>
            <div className='details'>
                <div className='wrapper'>
                    <div className='title'>
                        <h1>User Information</h1>
                        <button>Update profile</button>
                    </div>
                    <div className='info'>
                        <span>
                            Avatar:
                            <img src='/user.png' alt='User Avatar' />
                        </span>
                        <span>
                            Username: <b>John Doe</b>
                        </span>
                        <span>
                            E-mail: <b>john_doe@gmail.com</b>
                        </span>
                    </div>
                    <div className='title'>
                        <h1>My List</h1>
                        <button>Create New Post</button>
                    </div>
                    <List />
                    <div className='title'>
                        <h1>Saved List</h1>
                    </div>
                </div>
            </div>

            <div className='chatContainer'>
                <div className='wrapper'>
                    <Chat />
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;