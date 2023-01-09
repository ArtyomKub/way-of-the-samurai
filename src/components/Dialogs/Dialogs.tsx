import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Mark
                </div>
                <div className={s.dialog}>
                    Clark
                </div>
                <div className={s.dialog}>
                    Gregory
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Teona
                </div>
                <div className={s.dialog}>
                    Maria
                </div>
                <div className={s.dialog}>
                    Helena
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

