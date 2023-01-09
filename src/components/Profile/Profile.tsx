import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='https://media.istockphoto.com/id/1083266074/vector/silhouette-of-five-cowboys-walking-forward-banner.jpg?s=612x612&w=0&k=20&c=3lunkBPiSlSKRSC_gwg_J01lBqH9bT9ZZysJQRujwMo='
                    alt='contentIm'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}