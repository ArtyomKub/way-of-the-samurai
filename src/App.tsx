import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src='https://t3.ftcdn.net/jpg/03/98/92/00/360_F_398920043_T1lsy4Qk6hAryFfNPtnE3P9eXiubAz6T.jpg'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img
                        src='https://media.istockphoto.com/id/1083266074/vector/silhouette-of-five-cowboys-walking-forward-banner.jpg?s=612x612&w=0&k=20&c=3lunkBPiSlSKRSC_gwg_J01lBqH9bT9ZZysJQRujwMo='/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New Post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
