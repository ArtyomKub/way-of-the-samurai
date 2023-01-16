import React from 'react';
import s from './Post.module.css'

type PostType = {
    message: string
    likesCount: number
}

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyIOiExXyTb30l_xginQAWqW3MV1xVnYAZZQ&usqp=CAU' alt='avatar'/>
            {props.message}
            <div>
                <span> like {props.likesCount}</span>
            </div>
        </div>
    )
}