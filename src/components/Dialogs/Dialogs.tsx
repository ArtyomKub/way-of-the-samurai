import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Mark</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Clark</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Gregory</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Teona</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Maria</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Helena</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How is your study?</div>
                <div className={s.message}>I am God!</div>
            </div>
        </div>
    );
};

