import {StateType} from "../index";

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It is my first post', likesCount: 17},
            {id: 3, message: 'HA HA HA HA', likesCount: 1},
            {id: 4, message: 'English Learning', likesCount: 24},
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your study?'},
            {id: 3, message: 'I am God'},
            {id: 4, message: 'Fine'},
            {id: 5, message: 'The END'},
        ],
        dialogs: [
            {id: 1, name: 'Mark'},
            {id: 2, name: 'Clark'},
            {id: 3, name: 'Gregory'},
            {id: 4, name: 'Teena'},
            {id: 5, name: 'Maria'},
            {id: 6, name: 'Helena'},
        ]
    }
}

// let addPost =(postMessage)=> {
//     return (
//         state.profilePage.posts.push();
//     )
// }