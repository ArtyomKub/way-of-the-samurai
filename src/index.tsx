import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogs = [
    {id: 1, name: 'Mark'},
    {id: 2, name: 'Clark'},
    {id: 3, name: 'Gregory'},
    {id: 4, name: 'Teena'},
    {id: 5, name: 'Maria'},
    {id: 6, name: 'Helena'},
]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your study?'},
    {id: 3, message: 'I am God'},
]
let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It is my first post', likesCount: 17},
    {id: 3, message: 'HA HA HA HA', likesCount: 1},
    {id: 4, message: 'English Learning', likesCount: 24},
]
type DialogsType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}
type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsPagePropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type ProfilePagePropsType = {
    posts: Array<PostsType>
}
export type AllPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    posts: Array<PostsType>
}


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App dialogs={dialogs}
             messages={messages}
             posts={posts}
        />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
