import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {ProfilePagePropsType} from "../../../index";


export const MyPosts: React.FC<ProfilePagePropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}