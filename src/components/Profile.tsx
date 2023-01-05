import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://media.istockphoto.com/id/1083266074/vector/silhouette-of-five-cowboys-walking-forward-banner.jpg?s=612x612&w=0&k=20&c=3lunkBPiSlSKRSC_gwg_J01lBqH9bT9ZZysJQRujwMo='
                    alt='contentIm'/>
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
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}