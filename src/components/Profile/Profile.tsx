import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType, ProfilePageType} from "../../index";

type ProfilePagePrType = {
    state: ProfilePageType
}

export const Profile: React.FC<ProfilePagePrType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}