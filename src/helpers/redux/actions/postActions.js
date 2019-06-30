import {FETCH_POSTS, NEW_POST,RESET_NEW_POST, SET_NEW_POSTS} from './types';
import axios from 'axios';


export const setNewPosts = posts => dispatch =>{
    dispatch({
        type:SET_NEW_POSTS,
        payload:posts
    })
};

export const resetNewPost = () => dispatch =>{
    dispatch({
        type:RESET_NEW_POST
    })
};

export const fetchPosts = () => dispatch =>{
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then(posts=>{
        const datas = posts.data.slice(0, 90);
        dispatch({
            type:FETCH_POSTS,
            payload:datas
        })
    })
    .catch(err=>{
        console.log("Error Fetch Post");
    });
};

export const createPost = postData => dispatch =>{
    // axios.post('https://jsonplaceholder.typicode.com/posts/',postData)
    // .then(posts=>
    //     dispatch({
    //         type:NEW_POST,
    //         payload:posts.data
    //     })
    // )
    // .catch(err=>{
    //     console.log("Error Create Post");
    // });
    dispatch({
        type:NEW_POST,
        payload:postData
    })
}