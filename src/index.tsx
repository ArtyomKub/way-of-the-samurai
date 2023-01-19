import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {state} from "./redux/state";


export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type PostsType = {
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

export type StateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    posts: Array<PostsType>
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App appState={state}/>
    </React.StrictMode>
);

reportWebVitals();
