import React from 'react';
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {ProfilePagePropsType} from "../../../index";


export const MyPosts: React.FC<ProfilePagePropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = (postMessage:string) => {
        let text = newPostElement.current?.value;
        props.addPost(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}