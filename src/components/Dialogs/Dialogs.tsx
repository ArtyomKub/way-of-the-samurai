import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems name='Mark' id='1'/>
                <DialogItems name='Clark' id='2'/>
                <DialogItems name='Gregory' id='3'/>
                <DialogItems name='Teena' id='4'/>
                <DialogItems name='Maria' id='5'/>
                <DialogItems name='Helena' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi!'/>
                <Message message='How is your study?'/>
                <Message message='I am God!'/>
            </div>
        </div>
    );
};

