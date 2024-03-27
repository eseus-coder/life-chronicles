import axiosInstance from '../interceptors';

const apiFetchPosts = async(payload) => {
    let url = 'posts/getPosts'
    return await axiosInstance.get(url, { params: payload})
};

const apiCreatePosts = async(payload) => {
    let url = 'posts/createPost'
    return await axiosInstance.post(url, { body: payload})
};

export default {
    apiFetchPosts,
    apiCreatePosts
};