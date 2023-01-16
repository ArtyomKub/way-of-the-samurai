import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItems} from "./DialogItem/DialogItem";


export const Dialogs = () => {

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

    let dialogsElements = dialogs.map(d => <DialogItems name={d.name} id={d.id}/>)

    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

