import postsTypes from "../types/postsTypes";

export const getPosts = payload => ({
    type: postsTypes.GET_ALL_POSTS,
    payload: payload
});

export const setPosts = payload => ({
    type: postsTypes.SET_POSTS,
    payload: payload
});