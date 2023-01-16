import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItems: React.FC<DialogItemPropsType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Mark'},
        {id: 2, name: 'Clark'},
        {id: 3, name: 'Gregory'},
        {id: 4, name: 'Teena'},
        {id: 5, name: 'Maria'},
        {id: 6, name: 'Helena'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your study?'},
        {id: 3, message: 'I am God'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItems name={dialogsData[1].name} id={dialogsData[1].id}/>


            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    );
};

