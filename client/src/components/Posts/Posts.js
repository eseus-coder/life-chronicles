import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as postsActions from "../../redux/actions/postsAction";
import Post from "./Post/Post";
import useStyles from './styles';

const mapState = state => ({
    getAllPostsData: state.postsReducer.getAllPostsData,
})

const Posts = () => {

    const dispatch = useDispatch();
    const classes = useStyles();

    const {
        getAllPostsData,
    } = useSelector(mapState);


    useEffect(() => {
        dispatch(postsActions.getPosts());
    }, [dispatch])

    
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