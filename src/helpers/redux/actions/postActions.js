import {FETCH_POSTS, NEW_POST} from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch =>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(posts=>
        dispatch({
            type:FETCH_POSTS,
            payload:posts.data
        })
    )
    .catch(err=>{
        console.log("Error Fetch Post");
    });
};

export const createPost = postData => dispatch =>{
    axios.post('https://jsonplaceholder.typicode.com/posts',postData)
    .then(posts=>
          dispatch({
            type:NEW_POST,
            payload:posts.data
        })
    )
    .catch(err=>{
        console.log("Error Create Post");
    });
}