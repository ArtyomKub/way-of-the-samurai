import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea/>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <div>
                <Post message='Hi, how are you?' likeCount={15}/>
                <Post message='It is my first post' likeCount={20}/>
            </div>
        </div>
    )
}