import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItems} from "./DialogItem/DialogItem";
import {DialogsPagePropsType} from "../../index";


export const Dialogs: React.FC<DialogsPagePropsType> = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItems key={d.id} name={d.name} id={d.id}/>)

    let messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)

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

