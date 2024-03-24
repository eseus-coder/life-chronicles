import React from "react";
import Post from "./Post/Post";
import useStyles from './styles';

const Posts = () => {

    const classes = useStyles();
    
    return (
        <>
            <div>
                <h1>Posts Component</h1>
            </div>
            <Post />
            <Post />
        </>
    )
};

export default Posts;