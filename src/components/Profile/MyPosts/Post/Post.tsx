import React from 'react';
import s from './Post.module.css'

export const Post = () => {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyIOiExXyTb30l_xginQAWqW3MV1xVnYAZZQ&usqp=CAU' alt='avatar'/>
            post number 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}